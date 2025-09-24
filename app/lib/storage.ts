export interface Subscriber {
  name: string
  email: string
  role: "customer" | "provider"
  joinedAt: string
}

// In-memory storage that persists during the session
const subscribers: Subscriber[] = []

export async function addSubscriber(subscriber: Subscriber): Promise<boolean> {
  try {
    console.log("[v0] Adding subscriber:", subscriber.email)

    // Check if email already exists
    if (subscribers.some((s) => s.email === subscriber.email)) {
      console.log("[v0] Subscriber already exists:", subscriber.email)
      return false
    }

    subscribers.push(subscriber)
    console.log("[v0] Total subscribers:", subscribers.length)
    return true
  } catch (error) {
    console.error("[v0] Error adding subscriber:", error)
    throw error
  }
}

export async function getAllSubscribers(): Promise<Subscriber[]> {
  console.log("[v0] Getting all subscribers, count:", subscribers.length)
  return [...subscribers] // Return a copy to prevent external modifications
}

export async function getSubscriberCount(): Promise<number> {
  return subscribers.length
}
