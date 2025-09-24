"use client"

import { useState, useEffect } from "react"
import { useActionState } from "react"
import { joinWaitlist } from "../actions/waitlist"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface WaitlistFormProps {
  onSuccess: (count: number) => void
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "🎉 Thank you for signing up!",
        description: "We'll notify you when Steerify Cleaning launches in your city.",
        duration: 5000,
      })
      if (state.count) {
        onSuccess(state.count)
      }
      setName("")
      setEmail("")
      setRole("")
    } else if (state?.success === false) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
        duration: 5000,
      })
    }
  }, [state, toast, onSuccess])

  const handleSubmit = async (formData: FormData) => {
    formData.append("role", role)
    await formAction(formData)
  }

  return (
    <form action={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-steerify-teal focus:ring-0 text-steerify-blue placeholder:text-gray-400"
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-steerify-teal focus:ring-0 text-steerify-blue placeholder:text-gray-400"
        />
        <Select value={role} onValueChange={setRole} required>
          <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-steerify-teal focus:ring-0 text-steerify-blue">
            <SelectValue placeholder="I am a..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="customer">Customer</SelectItem>
            <SelectItem value="provider">Provider</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        disabled={isPending || !role}
        className="w-full bg-gradient-to-r from-steerify-blue to-steerify-teal hover:from-steerify-blue/90 hover:to-steerify-teal/90 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        {isPending ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
        {isPending ? "Joining..." : "Join the Waitlist"}
      </Button>
    </form>
  )
}
