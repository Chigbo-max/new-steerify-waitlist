import { getWaitlistCollection } from "./mongodb";
import { Subscriber } from "../models/subscriber";





export async function addSubscriber(subscriber: Subscriber): Promise<boolean> {
  try {
    const collection = await getWaitlistCollection();
    const existing = await collection.findOne({ email: subscriber.email });
    if (existing) {
      console.log("[mongodb] Subscriber already exists:", subscriber.email);
      return false;
    }
    await collection.insertOne(subscriber);
    return true;
  } catch (error) {
    console.error("[mongodb] Error adding subscriber:", error);
    throw error;
  }
}

export async function getAllSubscribers(): Promise<Subscriber[]> {
  try {
    const collection = await getWaitlistCollection();
    return await collection.find().toArray();
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
