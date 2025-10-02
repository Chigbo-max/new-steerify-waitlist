import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB || "steerify";

let client: MongoClient | null = null;
let cachedDb: Db | null = null;

async function getDb(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  if (!uri) {
    throw new Error("MONGODB_URI is not set in environment variables.");
  }

  try {
    client = new MongoClient(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    await client.connect();
    cachedDb = client.db(dbName);
    
    console.log("[mongodb] Successfully connected to database");
    return cachedDb;
  } catch (error) {
    console.error("[mongodb] Connection failed:", error);
    
    // Close client if connection fails
    if (client) {
      await client.close();
      client = null;
    }
    throw error;
  }
}

export async function getWaitlistCollection() {
  const db = await getDb();
  return db.collection("waitlist_subscribers");
}

// Close connection when needed
export async function closeConnection() {
  if (client) {
    await client.close();
    client = null;
    cachedDb = null;
  }
}