"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { sendBulkEmail } from "../actions/waitlist";

interface Subscriber {
  name: string;
  email: string;
  role: "customer" | "provider";
  joinedAt: string;
}

interface BulkEmailFormProps {
  subscribers: Subscriber[];
}

export default function BulkEmailForm({ subscribers }: BulkEmailFormProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (selectAll) {
      setSelected(subscribers.map(s => s.email));
    } else {
      setSelected([]);
    }
  }, [selectAll, subscribers]);

  const handleCheckbox = (email: string) => {
    setSelected(prev =>
      prev.includes(email) ? prev.filter(e => e !== email) : [...prev, email]
    );
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setResult(null);
    try {
      const res = await sendBulkEmail({ subject, body, emails: selected });
      setResult(res.message);
      toast({
        title: res.success ? "Success" : "Error",
        description: res.message,
        variant: res.success ? undefined : "destructive",
      });
    } catch (err: any) {
      setResult("An error occurred.");
      toast({
        title: "Error",
        description: "An error occurred.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Send Email to Subscribers</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSend} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              required
              className="flex-1"
            />
          </div>
          <div>
            <textarea
              placeholder="Type your message here..."
              value={body}
              onChange={e => setBody(e.target.value)}
              required
              rows={5}
              className="w-full border rounded-md p-2 text-base"
            />
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={e => setSelectAll(e.target.checked)}
              />
              <span className="font-medium">Select All</span>
            </label>
            {subscribers.map(s => (
              <label key={s.email} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(s.email)}
                  onChange={() => handleCheckbox(s.email)}
                />
                <span className="text-sm">{s.email}</span>
              </label>
            ))}
          </div>
          <Button
            type="submit"
            disabled={sending || selected.length === 0 || !subject || !body}
          >
            {sending ? "Sending..." : `Send Email (${selected.length})`}
          </Button>
          {result && <div className="text-sm mt-2 text-gray-700">{result}</div>}
        </form>
      </CardContent>
    </Card>
  );
}
