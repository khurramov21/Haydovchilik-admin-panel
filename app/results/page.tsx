"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Fake data - Bu yerga real API dan ma'lumotlar kelib tushadi
const testResults = [
  { month: "Yan", passed: 45, failed: 15 },
  { month: "Fev", passed: 52, failed: 18 },
  { month: "Mar", passed: 48, failed: 12 },
  { month: "Apr", passed: 61, failed: 19 },
  { month: "May", passed: 55, failed: 15 },
  { month: "Iyun", passed: 67, failed: 23 },
]

const categoryResults = [
  { name: "A kategoriya", value: 25, color: "#3b82f6" },
  { name: "B kategoriya", value: 45, color: "#10b981" },
  { name: "C kategoriya", value: 20, color: "#f59e0b" },
  { name: "D kategoriya", value: 10, color: "#ef4444" },
]

const recentTests = [
  { id: 1, student: "Alisher Karimov", category: "B", score: 85, status: "passed", date: "2024-01-15" },
  { id: 2, student: "Malika Tosheva", category: "A", score: 45, status: "failed", date: "2024-01-15" },
  { id: 3, student: "Bobur Rahimov", category: "B", score: 92, status: "passed", date: "2024-01-14" },
  { id: 4, student: "Nilufar Saidova", category: "C", score: 78, status: "passed", date: "2024-01-14" },
  { id: 5, student: "Jasur Toshev", category: "B", score: 38, status: "failed", date: "2024-01-13" },
]

export default function ResultsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <h2 className="text-3xl font-bold tracking-tight">Test Natijalari</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Kategoriya" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Barcha kategoriyalar</SelectItem>
              <SelectItem value="A">A kategoriya</SelectItem>
              <SelectItem value="B">B kategoriya</SelectItem>
              <SelectItem value="C">C kategoriya</SelectItem>
              <SelectItem value="D">D kategoriya</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jami Testlar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,456</div>
            <p className="text-xs text-muted-foreground">Bu oyda</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">O'tganlar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">1,847</div>
            <p className="text-xs text-muted-foreground">75% muvaffaqiyat</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">O'tmaganlar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">609</div>
            <p className="text-xs text-muted-foreground">25% muvaffaqiyatsiz</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">O'rtacha Ball</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5</div>
            <p className="text-xs text-muted-foreground">100 balldan</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Oylik Test Natijalari</CardTitle>
            <CardDescription>O'tgan va o'tmagan testlar statistikasi</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={testResults}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="passed" fill="#10b981" name="O'tgan" />
                <Bar dataKey="failed" fill="#ef4444" name="O'tmagan" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Kategoriya bo'yicha</CardTitle>
            <CardDescription>Har bir kategoriya uchun test natijalari</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={categoryResults}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {categoryResults.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Test Results Table */}
      <Card>
        <CardHeader>
          <CardTitle>So'nggi Test Natijalari</CardTitle>
          <CardDescription>Eng so'nggi test natijalari ro'yxati</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>O'quvchi</TableHead>
                <TableHead>Kategoriya</TableHead>
                <TableHead>Ball</TableHead>
                <TableHead>Holat</TableHead>
                <TableHead>Sana</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTests.map((test) => (
                <TableRow key={test.id}>
                  <TableCell className="font-medium">{test.student}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{test.category}</Badge>
                  </TableCell>
                  <TableCell>{test.score}/100</TableCell>
                  <TableCell>
                    <Badge variant={test.status === "passed" ? "default" : "destructive"}>
                      {test.status === "passed" ? "O'tdi" : "O'tmadi"}
                    </Badge>
                  </TableCell>
                  <TableCell>{test.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
