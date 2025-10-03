"use client"

import { WaitlistSignup } from "./components/waitlist-signup"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <WaitlistSignup />
      <Toaster
      />
    </main>
  )
}
