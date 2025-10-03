export interface Subscriber {
  name: string;
  email: string;
  role: "customer" | "provider";
  joinedAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface BulkEmailRequest {
  emails: string[];
  subject: string;
  body: string;
}