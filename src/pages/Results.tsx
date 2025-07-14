import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

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

const Results: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Test Natijalari</h1>
        <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          <option value="all">Barcha kategoriyalar</option>
          <option value="A">A kategoriya</option>
          <option value="B">B kategoriya</option>
          <option value="C">C kategoriya</option>
          <option value="D">D kategoriya</option>
        </select>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Jami Testlar</p>
              <p className="text-3xl font-bold text-gray-900">2,456</p>
              <p className="text-sm text-gray-500">Bu oyda</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">O'tganlar</p>
              <p className="text-3xl font-bold text-green-600">1,847</p>
              <p className="text-sm text-gray-500">75% muvaffaqiyat</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">O'tmaganlar</p>
              <p className="text-3xl font-bold text-red-600">609</p>
              <p className="text-sm text-gray-500">25% muvaffaqiyatsiz</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">O'rtacha Ball</p>
              <p className="text-3xl font-bold text-gray-900">78.5</p>
              <p className="text-sm text-gray-500">100 balldan</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Oylik Test Natijalari</CardTitle>
            <p className="text-sm text-gray-500">O'tgan va o'tmagan testlar statistikasi</p>
          </CardHeader>
          <CardContent>
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

        <Card>
          <CardHeader>
            <CardTitle>Kategoriya bo'yicha</CardTitle>
            <p className="text-sm text-gray-500">Har bir kategoriya uchun test natijalari</p>
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
          <p className="text-sm text-gray-500">Eng so'nggi test natijalari ro'yxati</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    O'quvchi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategoriya
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ball
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Holat
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sana
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTests.map((test) => (
                  <tr key={test.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.student}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {test.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.score}/100</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          test.status === "passed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {test.status === "passed" ? "O'tdi" : "O'tmadi"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Results
