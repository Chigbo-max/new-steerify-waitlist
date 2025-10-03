"use client";

import { useState } from "react";
import { joinWaitlist } from "../../src/services/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EnhancedLoaderIcon, EnhancedCheckIcon } from "./icons/enhanced-icons";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  onSuccess: (count: number) => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("role", role);
    try {
      const result = await joinWaitlist(null, formData);
      if (result?.success) {
        setIsSubmitted(true); // Show success message
        toast({
          title: "Thank you for signing up!",
          description: "We'll notify you when Steerify Cleaning launches in your city.",
          duration: 5000,
        });
        if (result.count) {
          onSuccess(result.count);
        }
        setName("");
        setEmail("");
        setRole("");
      } else {
        toast({
          title: "Error",
          description: result?.message || "An error occurred.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsPending(false);
    }
  };

  // Success state - replaces the form
  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <EnhancedCheckIcon className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">You're on the list!</h3>
        <p className="text-green-700 text-lg mb-4">
          Thank you for joining the Steerify waitlist. Your information has been successfully added.
        </p>
        <p className="text-green-600">
          Keep an eye on your inbox - we'll send you early access details and launch updates soon!
        </p>
      </div>
    );
  }

  // Original form
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-steerify-teal focus:ring-0 text-steerify-blue placeholder:text-gray-400"
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
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
        className="w-full bg-gradient-to-r from-steerify-blue to-steerify-teal hover:from-steerify-blue/90 hover:to-steerify-teal/90 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
      >
        {isPending ? (
          <EnhancedLoaderIcon className="h-5 w-5 animate-spin mr-2" />
        ) : null}
        {isPending ? "Joining..." : "Join the Waitlist Now"}
      </Button>
    </form>
  );
}
