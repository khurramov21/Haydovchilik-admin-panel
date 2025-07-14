import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import Button from "../components/Button"
import { BookOpenIcon, PlayIcon, PlusIcon, UsersIcon } from "@heroicons/react/24/outline"

// Fake data - Bu yerga real API dan ma'lumotlar kelib tushadi
const lessons = [
  {
    id: 1,
    title: "Yo'l belgilari asoslari",
    category: "B",
    duration: "45 daqiqa",
    students: 156,
    status: "active",
    description: "Yo'l belgilarining asosiy turlari va ularning ma'nolari",
  },
  {
    id: 2,
    title: "Yo'l qoidalari",
    category: "B",
    duration: "60 daqiqa",
    students: 203,
    status: "active",
    description: "Asosiy yo'l harakati qoidalari va tartib-qoidalar",
  },
  {
    id: 3,
    title: "Avtomobil texnikasi",
    category: "A",
    duration: "30 daqiqa",
    students: 89,
    status: "draft",
    description: "Avtomobil qismlari va ularning ishlash printsiplari",
  },
  {
    id: 4,
    title: "Birinchi yordam",
    category: "C",
    duration: "40 daqiqa",
    students: 134,
    status: "active",
    description: "Yo'l-transport hodisalarida birinchi yordam ko'rsatish",
  },
]

const Lessons: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Darslar</h1>
        <Button>
          <PlusIcon className="h-5 w-5 mr-2" />
          Yangi Dars
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpenIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Jami Darslar</p>
                <p className="text-2xl font-bold text-gray-900">{lessons.length}</p>
                <p className="text-sm text-gray-500">Barcha kategoriyalar</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <PlayIcon className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Faol Darslar</p>
                <p className="text-2xl font-bold text-gray-900">
                  {lessons.filter((l) => l.status === "active").length}
                </p>
                <p className="text-sm text-gray-500">Nashr etilgan</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UsersIcon className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Jami O'quvchilar</p>
                <p className="text-2xl font-bold text-gray-900">
                  {lessons.reduce((sum, lesson) => sum + lesson.students, 0)}
                </p>
                <p className="text-sm text-gray-500">Barcha darslarda</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpenIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">O'rtacha Vaqt</p>
                <p className="text-2xl font-bold text-gray-900">44 daq</p>
                <p className="text-sm text-gray-500">Har bir dars uchun</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    lesson.category === "B"
                      ? "bg-blue-100 text-blue-800"
                      : lesson.category === "A"
                        ? "bg-green-100 text-green-800"
                        : lesson.category === "C"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {lesson.category}
                </span>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    lesson.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {lesson.status === "active" ? "Faol" : "Qoralama"}
                </span>
              </div>
              <CardTitle className="text-lg">{lesson.title}</CardTitle>
              <p className="text-sm text-gray-500">{lesson.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <BookOpenIcon className="mr-1 h-4 w-4" />
                  {lesson.duration}
                </span>
                <span className="flex items-center">
                  <UsersIcon className="mr-1 h-4 w-4" />
                  {lesson.students} o'quvchi
                </span>
              </div>
              <div className="flex space-x-2">
                <Button variant="secondary" size="sm" className="flex-1">
                  Tahrirlash
                </Button>
                <Button size="sm" className="flex-1">
                  <PlayIcon className="mr-1 h-4 w-4" />
                  Ko'rish
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New Lesson Card */}
        <Card className="border-dashed border-2 hover:border-blue-500 transition-colors cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <PlusIcon className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Yangi Dars Qo'shish</h3>
            <p className="text-gray-500 text-center mb-4">O'quvchilar uchun yangi dars yarating</p>
            <Button>Dars Yaratish</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Lessons
