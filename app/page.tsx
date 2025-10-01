"use client"

import { WaitlistSignup } from "./components/waitlist-signup"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <WaitlistSignup />
      <Toaster

        toastOptions={{
          style: {
            background: "white",
            color: "#0A2540",
            border: "1px solid #13942dff",
          },
          className: "rounded-xl",
          duration: 5000,
        }}
      />
    </main>
  )
}
