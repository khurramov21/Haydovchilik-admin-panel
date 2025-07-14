"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayCircle, Plus, Edit, Trash2, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Fake data - Bu yerga real API dan ma'lumotlar kelib tushadi
const testCategories = [
  { id: 1, name: "Yo'l belgilari", category: "B", questions: 25, duration: 30 },
  { id: 2, name: "Yo'l qoidalari", category: "B", questions: 30, duration: 35 },
  { id: 3, name: "Avtomobil texnikasi", category: "A", questions: 20, duration: 25 },
  { id: 4, name: "Birinchi yordam", category: "C", questions: 15, duration: 20 },
]

const activeTests = [
  { id: 1, student: "Alisher Karimov", test: "Yo'l belgilari", startTime: "14:30", progress: 60 },
  { id: 2, student: "Malika Tosheva", test: "Yo'l qoidalari", startTime: "14:45", progress: 25 },
  { id: 3, student: "Bobur Rahimov", test: "Avtomobil texnikasi", startTime: "15:00", progress: 80 },
]

export default function TestsPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isStartTestDialogOpen, setIsStartTestDialogOpen] = useState(false)
  const [newTest, setNewTest] = useState({
    name: "",
    category: "",
    questions: "",
    duration: "",
    description: "",
  })
  const [selectedStudent, setSelectedStudent] = useState("")
  const [selectedTest, setSelectedTest] = useState("")
  const { toast } = useToast()

  // Yangi test qo'shish - Bu yerga POST API ulanadi
  const handleAddTest = () => {
    if (!newTest.name || !newTest.category || !newTest.questions || !newTest.duration) {
      toast({
        title: "Xatolik",
        description: "Barcha majburiy maydonlarni to'ldiring",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Muvaffaqiyatli",
      description: "Yangi test qo'shildi",
    })

    setNewTest({ name: "", category: "", questions: "", duration: "", description: "" })
    setIsAddDialogOpen(false)

    // API call - Real loyihada bu yerga API chaqiruvi yoziladi
    // fetch('/api/tests', {
    //   method: 'POST',
    //   body: JSON.stringify(newTest)
    // })
  }

  // Test boshlash - Bu yerga POST API ulanadi
  const handleStartTest = () => {
    if (!selectedStudent || !selectedTest) {
      toast({
        title: "Xatolik",
        description: "O'quvchi va testni tanlang",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Test boshlandi",
      description: "O'quvchi uchun test faollashtirildi",
    })

    setSelectedStudent("")
    setSelectedTest("")
    setIsStartTestDialogOpen(false)

    // API call - Real loyihada bu yerga API chaqiruvi yoziladi
    // fetch('/api/tests/start', {
    //   method: 'POST',
    //   body: JSON.stringify({ studentId: selectedStudent, testId: selectedTest })
    // })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <h2 className="text-3xl font-bold tracking-tight">Testlar</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog open={isStartTestDialogOpen} onOpenChange={setIsStartTestDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <PlayCircle className="mr-2 h-4 w-4" />
                Test Boshlash
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Test Boshlash</DialogTitle>
                <DialogDescription>O'quvchi uchun testni faollashtiring</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>O'quvchi</Label>
                  <Select onValueChange={setSelectedStudent}>
                    <SelectTrigger>
                      <SelectValue placeholder="O'quvchini tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Alisher Karimov</SelectItem>
                      <SelectItem value="2">Malika Tosheva</SelectItem>
                      <SelectItem value="3">Bobur Rahimov</SelectItem>
                      <SelectItem value="4">Nilufar Saidova</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Test</Label>
                  <Select onValueChange={setSelectedTest}>
                    <SelectTrigger>
                      <SelectValue placeholder="Testni tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      {testCategories.map((test) => (
                        <SelectItem key={test.id} value={test.id.toString()}>
                          {test.name} ({test.category})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleStartTest}>Boshlash</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Yangi Test
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Yangi Test Yaratish</DialogTitle>
                <DialogDescription>Yangi test ma'lumotlarini kiriting</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="test-name">Test Nomi</Label>
                  <Input
                    id="test-name"
                    value={newTest.name}
                    onChange={(e) => setNewTest({ ...newTest, name: e.target.value })}
                    placeholder="Test nomini kiriting"
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Kategoriya</Label>
                  <Select onValueChange={(value) => setNewTest({ ...newTest, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Kategoriyani tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">A kategoriya</SelectItem>
                      <SelectItem value="B">B kategoriya</SelectItem>
                      <SelectItem value="C">C kategoriya</SelectItem>
                      <SelectItem value="D">D kategoriya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="questions">Savollar soni</Label>
                    <Input
                      id="questions"
                      type="number"
                      value={newTest.questions}
                      onChange={(e) => setNewTest({ ...newTest, questions: e.target.value })}
                      placeholder="25"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="duration">Vaqt (daqiqa)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={newTest.duration}
                      onChange={(e) => setNewTest({ ...newTest, duration: e.target.value })}
                      placeholder="30"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Tavsif</Label>
                  <Textarea
                    id="description"
                    value={newTest.description}
                    onChange={(e) => setNewTest({ ...newTest, description: e.target.value })}
                    placeholder="Test haqida qisqacha ma'lumot"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddTest}>Yaratish</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="tests" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tests">Testlar</TabsTrigger>
          <TabsTrigger value="active">Faol Testlar</TabsTrigger>
        </TabsList>

        <TabsContent value="tests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Test Kategoriyalari</CardTitle>
              <CardDescription>Barcha mavjud testlar ro'yxati</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Test Nomi</TableHead>
                    <TableHead>Kategoriya</TableHead>
                    <TableHead>Savollar</TableHead>
                    <TableHead>Vaqt</TableHead>
                    <TableHead>Amallar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {testCategories.map((test) => (
                    <TableRow key={test.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4" />
                          <span>{test.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{test.category}</Badge>
                      </TableCell>
                      <TableCell>{test.questions} ta</TableCell>
                      <TableCell>{test.duration} daqiqa</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Faol Testlar</CardTitle>
              <CardDescription>Hozirda davom etayotgan testlar</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>O'quvchi</TableHead>
                    <TableHead>Test</TableHead>
                    <TableHead>Boshlangan vaqt</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Amallar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeTests.map((test) => (
                    <TableRow key={test.id}>
                      <TableCell className="font-medium">{test.student}</TableCell>
                      <TableCell>{test.test}</TableCell>
                      <TableCell>{test.startTime}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${test.progress}%` }}></div>
                          </div>
                          <span className="text-sm">{test.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Ko'rish
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
