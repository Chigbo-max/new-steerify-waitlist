import { MongoClient, Db, Collection } from "mongodb";
import type { Subscriber } from "./storage";

const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB || "steerify";
const collectionName = "waitlist_subscribers";

let client: MongoClient | null = null;
let db: Db | null = null;

async function getDb(): Promise<Db> {
  if (!client) {
    try {
      if (!uri) {
        throw new Error("MONGODB_URI is not set in environment variables.");
      }
      client = new MongoClient(uri);
      await client.connect();
      db = client.db(dbName);
    } catch (err) {
      console.error("[mongodb] Failed to connect to MongoDB:", err);
      throw new Error(
        "Failed to connect to MongoDB. Check your MONGODB_URI and credentials."
      );
    }
  }
  if (!db) {
    throw new Error("MongoDB database connection is not established.");
  }
  return db;
}

export async function getWaitlistCollection(): Promise<Collection<Subscriber>> {
  const database = await getDb();
  return database.collection<Subscriber>(collectionName);
}
