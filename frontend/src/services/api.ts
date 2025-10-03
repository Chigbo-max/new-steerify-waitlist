import { Subscriber, ApiResponse } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }
      
      return data;
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Join waitlist
  async joinWaitlist(formData: {
    name: string;
    email: string;
    role: string;
  }): Promise<ApiResponse> {
    return this.request<ApiResponse>('/waitlist/join', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Get waitlist count
  async getWaitlistCount(): Promise<{ count: number }> {
    return this.request<{ count: number }>('/waitlist/count');
  }

  // Get all subscribers (admin)
  async getAllSubscribers(): Promise<{ subscribers: Subscriber[] }> {
    return this.request<{ subscribers: Subscriber[] }>('/waitlist/subscribers');
  }

  // Delete subscriber (admin)
  async deleteSubscriber(email: string): Promise<ApiResponse> {
    return this.request<ApiResponse>(`/waitlist/subscriber/${encodeURIComponent(email)}`, {
      method: 'DELETE',
    });
  }

  // Send bulk email (admin)
  async sendBulkEmail(data: {
    subject: string;
    body: string;
    emails: string[];
  }): Promise<ApiResponse> {
    return this.request<ApiResponse>('/waitlist/bulk-email', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiService = new ApiService();

// Legacy function wrappers to maintain compatibility
export async function joinWaitlist(prevState: any, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const role = formData.get('role') as string;

    const response = await apiService.joinWaitlist({ name, email, role });
    return response;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

export async function getWaitlistCount() {
  try {
    const response = await apiService.getWaitlistCount();
    return response.count;
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    return 0;
  }
}

export async function getAllSubscribers() {
  try {
    const response = await apiService.getAllSubscribers();
    return response.subscribers;
  } catch (error) {
    console.error('Error getting subscribers:', error);
    return [];
  }
}

export async function deleteSubscriberAction(email: string) {
  try {
    const response = await apiService.deleteSubscriber(email);
    return response;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

export async function sendBulkEmail(data: {
  subject: string;
  body: string;
  emails: string[];
}) {
  try {
    const response = await apiService.sendBulkEmail(data);
    return response;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}