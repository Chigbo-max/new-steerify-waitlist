"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DeleteSubscriberButton } from "../components/delete-subscriber-button";
import { Subscriber } from "../../src/types";

interface SubscribersTableProps {
  initialSubscribers: Subscriber[];
}

export function SubscribersTable({ initialSubscribers }: SubscribersTableProps) {
  const [subscribers, setSubscribers] = useState<Subscriber[]>(initialSubscribers);

  const handleDelete = (deletedEmail: string) => {
    setSubscribers(prev => prev.filter(sub => sub.email !== deletedEmail));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4 font-medium">Name</th>
            <th className="text-left py-3 px-4 font-medium">Email</th>
            <th className="text-left py-3 px-4 font-medium">Role</th>
            <th className="text-left py-3 px-4 font-medium">Joined</th>
            <th className="text-left py-3 px-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscribers
            .sort(
              (a, b) =>
                new Date(b.joinedAt).getTime() -
                new Date(a.joinedAt).getTime()
            )
            .map((subscriber) => (
              <tr
                key={subscriber.email}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-3 px-4 font-medium">
                  {subscriber.name}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {subscriber.email}
                </td>
                <td className="py-3 px-4">
                  <Badge
                    variant={
                      subscriber.role === "customer"
                        ? "default"
                        : "secondary"
                    }
                    className={
                      subscriber.role === "customer"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }
                  >
                    {subscriber.role}
                  </Badge>
                </td>
                <td className="py-3 px-4 text-gray-500">
                  {new Date(subscriber.joinedAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </td>
                <td className="py-3 px-4">
                  <DeleteSubscriberButton 
                    email={subscriber.email} 
                    onDelete={handleDelete}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {subscribers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No subscribers found.
        </div>
      )}
    </div>
  );
}
