"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { deleteSubscriberAction } from "../actions/waitlist";

interface DeleteSubscriberButtonProps {
  email: string;
  onDelete: (email: string) => void;
}

export function DeleteSubscriberButton({ email, onDelete }: DeleteSubscriberButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${email} from the waitlist?`)) {
      return;
    }

    setIsDeleting(true);
    
    try {
      const result = await deleteSubscriberAction(email);
      
      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        });
        onDelete(email);
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
    >
      <Trash2 className="h-4 w-4 mr-1" />
      {isDeleting ? "Deleting..." : "Delete"}
    </Button>
  );
}