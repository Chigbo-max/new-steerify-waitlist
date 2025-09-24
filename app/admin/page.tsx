import { getAllSubscribers } from "../actions/waitlist"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Mail, UserCheck } from "lucide-react"

export default async function AdminPage() {
  let subscribers = []
  let error = null

  try {
    console.log("[v0] Admin page: Fetching subscribers")
    subscribers = await getAllSubscribers()
    console.log("[v0] Admin page: Got subscribers:", subscribers.length)
  } catch (err) {
    console.error("[v0] Admin page: Error fetching subscribers:", err)
    error = err
  }

  const customerCount = subscribers.filter((sub) => sub.role === "customer").length
  const providerCount = subscribers.filter((sub) => sub.role === "provider").length

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-steerify-blue mb-2">Waitlist Dashboard</h1>
          <p className="text-gray-600">Manage your Steerify Cleaning waitlist subscribers</p>
        </div>

        {error && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="text-red-800">
                <strong>Error loading subscribers:</strong> {error.toString()}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-steerify-blue">{subscribers.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{customerCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Providers</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{providerCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Latest Signup</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium">
                {subscribers.length > 0
                  ? new Date(Math.max(...subscribers.map((s) => new Date(s.joinedAt).getTime()))).toLocaleDateString()
                  : "No signups yet"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subscribers Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              All Subscribers
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subscribers.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No subscribers yet. Share your waitlist to get started!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Email</th>
                      <th className="text-left py-3 px-4 font-medium">Role</th>
                      <th className="text-left py-3 px-4 font-medium">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers
                      .sort((a, b) => new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime())
                      .map((subscriber, index) => (
                        <tr key={subscriber.email} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{subscriber.name}</td>
                          <td className="py-3 px-4 text-gray-600">{subscriber.email}</td>
                          <td className="py-3 px-4">
                            <Badge
                              variant={subscriber.role === "customer" ? "default" : "secondary"}
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
                            {new Date(subscriber.joinedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
