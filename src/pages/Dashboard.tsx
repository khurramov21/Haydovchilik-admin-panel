import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { UsersIcon, DocumentTextIcon, TrendingUpIcon, AcademicCapIcon } from "@heroicons/react/24/outline"

// Fake data - Bu yerga real API dan ma'lumotlar kelib tushadi
const monthlyData = [
  { name: "Yan", students: 45, tests: 120 },
  { name: "Fev", students: 52, tests: 145 },
  { name: "Mar", students: 48, tests: 135 },
  { name: "Apr", students: 61, tests: 180 },
  { name: "May", students: 55, tests: 165 },
  { name: "Iyun", students: 67, tests: 200 },
]

const testResults = [
  { name: "Muvaffaqiyatli", value: 75, color: "#10b981" },
  { name: "Muvaffaqiyatsiz", value: 25, color: "#ef4444" },
]

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UsersIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Jami O'quvchilar</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
                <p className="text-sm text-green-600">+12% o'tgan oydan</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DocumentTextIcon className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Jami Testlar</p>
                <p className="text-2xl font-bold text-gray-900">2,456</p>
                <p className="text-sm text-green-600">+8% o'tgan oydan</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUpIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Muvaffaqiyat %</p>
                <p className="text-2xl font-bold text-gray-900">75%</p>
                <p className="text-sm text-green-600">+3% o'tgan oydan</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <AcademicCapIcon className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Guvohnoma Olganlar</p>
                <p className="text-2xl font-bold text-gray-900">892</p>
                <p className="text-sm text-green-600">+15% o'tgan oydan</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Oylik Statistika</CardTitle>
            <p className="text-sm text-gray-500">O'quvchilar va testlar soni</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#3b82f6" name="O'quvchilar" />
                <Bar dataKey="tests" fill="#10b981" name="Testlar" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Natijalari</CardTitle>
            <p className="text-sm text-gray-500">Muvaffaqiyatli va muvaffaqiyatsiz</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={testResults}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {testResults.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
