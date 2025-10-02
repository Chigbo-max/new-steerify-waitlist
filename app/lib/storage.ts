import { ObjectId } from "mongodb";

export interface Subscriber {
  _id?: ObjectId; // Add this line
  name: string;
  email: string;
  role: "customer" | "provider";
  joinedAt: string;
}

import { getWaitlistCollection } from "./mongodb";

export async function addSubscriber(subscriber: Subscriber): Promise<boolean> {
  try {
    const collection = await getWaitlistCollection();
    
    // Check if subscriber exists
    const existing = await collection.findOne({ email: subscriber.email });
    if (existing) {
      console.log("[mongodb] Subscriber already exists:", subscriber.email);
      return false;
    }
    
    // Insert new subscriber
    const result = await collection.insertOne(subscriber);
    console.log("[mongodb] Subscriber added successfully:", subscriber.email);
    return result.acknowledged;
    
  } catch (error) {
    console.error("[mongodb] Error adding subscriber:", error);
    
    // Check if it's a connection error
    if (error instanceof Error && error.message.includes("connection")) {
      throw new Error("Database connection failed");
    }
    
    throw error;
  }
}

export async function getAllSubscribers(): Promise<Subscriber[]> {
  try {
    const collection = await getWaitlistCollection();
    const subscribers = await collection.find().toArray();
    
    // Convert MongoDB documents to Subscriber objects
    return subscribers.map(sub => ({
      _id: sub._id,
      name: sub.name,
      email: sub.email,
      role: sub.role,
      joinedAt: sub.joinedAt
    }));
  } catch (error) {
    console.error("[mongodb] Error fetching all subscribers:", error);
    return [];
  }
}

export async function getSubscriberCount(): Promise<number> {
  try {
    const collection = await getWaitlistCollection();
    return await collection.countDocuments();
  } catch (error) {
    console.error("[mongodb] Error counting subscribers:", error);
    return 0;
  }
}

export async function deleteSubscriber(email: string): Promise<boolean> {
  try {
    const collection = await getWaitlistCollection();
    const result = await collection.deleteOne({ email: email });
    
    // Check if a document was actually deleted
    return result.deletedCount === 1;
  } catch (error) {
    console.error("[mongodb] Error deleting subscriber:", error);
    return false;
  }
}