export interface Subscriber {
  name: string;
  email: string;
  role: "customer" | "provider";
  joinedAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  count?: number;
  subscribers?: Subscriber[];
}