"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Play, Plus, Users } from "lucide-react"

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

export default function LessonsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <h2 className="text-3xl font-bold tracking-tight">Darslar</h2>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Yangi Dars
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jami Darslar</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lessons.length}</div>
            <p className="text-xs text-muted-foreground">Barcha kategoriyalar</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faol Darslar</CardTitle>
            <Play className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lessons.filter((l) => l.status === "active").length}</div>
            <p className="text-xs text-muted-foreground">Nashr etilgan</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jami O'quvchilar</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lessons.reduce((sum, lesson) => sum + lesson.students, 0)}</div>
            <p className="text-xs text-muted-foreground">Barcha darslarda</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">O'rtacha Vaqt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">44 daq</div>
            <p className="text-xs text-muted-foreground">Har bir dars uchun</p>
          </CardContent>
        </Card>
      </div>

      {/* Lessons Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{lesson.category}</Badge>
                <Badge variant={lesson.status === "active" ? "default" : "secondary"}>
                  {lesson.status === "active" ? "Faol" : "Qoralama"}
                </Badge>
              </div>
              <CardTitle className="text-lg">{lesson.title}</CardTitle>
              <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span className="flex items-center">
                  <BookOpen className="mr-1 h-4 w-4" />
                  {lesson.duration}
                </span>
                <span className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  {lesson.students} o'quvchi
                </span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  Tahrirlash
                </Button>
                <Button size="sm" className="flex-1">
                  <Play className="mr-1 h-4 w-4" />
                  Ko'rish
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Lesson Card */}
      <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Plus className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Yangi Dars Qo'shish</h3>
          <p className="text-muted-foreground text-center mb-4">O'quvchilar uchun yangi dars yarating</p>
          <Button>Dars Yaratish</Button>
        </CardContent>
      </Card>
    </div>
  )
}
