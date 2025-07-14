"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Trash2, UserPlus, Search, Edit } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Fake data - Bu yerga real API dan ma'lumotlar kelib tushadi
const initialStudents = [
  { id: 1, name: "Alisher Karimov", phone: "+998901234567", category: "B", status: "active", progress: 75 },
  { id: 2, name: "Malika Tosheva", phone: "+998907654321", category: "A", status: "active", progress: 45 },
  { id: 3, name: "Bobur Rahimov", phone: "+998909876543", category: "B", status: "completed", progress: 100 },
  { id: 4, name: "Nilufar Saidova", phone: "+998901111111", category: "C", status: "active", progress: 30 },
]

export default function StudentsPage() {
  const [students, setStudents] = useState(initialStudents)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newStudent, setNewStudent] = useState({
    name: "",
    phone: "",
    category: "",
  })
  const { toast } = useToast()

  // O'quvchi qo'shish - Bu yerga POST API ulanadi
  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.phone || !newStudent.category) {
      toast({
        title: "Xatolik",
        description: "Barcha maydonlarni to'ldiring",
        variant: "destructive",
      })
      return
    }

    const student = {
      id: students.length + 1,
      ...newStudent,
      status: "active" as const,
      progress: 0,
    }

    setStudents([...students, student])
    setNewStudent({ name: "", phone: "", category: "" })
    setIsAddDialogOpen(false)

    toast({
      title: "Muvaffaqiyatli",
      description: "O'quvchi qo'shildi",
    })

    // API call - Real loyihada bu yerga API chaqiruvi yoziladi
    // fetch('/api/students', {
    //   method: 'POST',
    //   body: JSON.stringify(student)
    // })
  }

  // O'quvchi o'chirish - Bu yerga DELETE API ulanadi
  const handleDeleteStudent = (id: number) => {
    setStudents(students.filter((s) => s.id !== id))
    toast({
      title: "O'chirildi",
      description: "O'quvchi o'chirildi",
    })

    // API call - Real loyihada bu yerga API chaqiruvi yoziladi
    // fetch(`/api/students/${id}`, { method: 'DELETE' })
  }

  const filteredStudents = students.filter(
    (student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.phone.includes(searchTerm),
  )

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <h2 className="text-3xl font-bold tracking-tight">O'quvchilar</h2>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Yangi O'quvchi
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yangi O'quvchi Qo'shish</DialogTitle>
              <DialogDescription>Yangi o'quvchi ma'lumotlarini kiriting</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Ism Familiya</Label>
                <Input
                  id="name"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  placeholder="Ism familiyani kiriting"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  value={newStudent.phone}
                  onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                  placeholder="+998901234567"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Kategoriya</Label>
                <Select onValueChange={(value) => setNewStudent({ ...newStudent, category: value })}>
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
            </div>
            <DialogFooter>
              <Button onClick={handleAddStudent}>Qo'shish</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>O'quvchilar Ro'yxati</CardTitle>
          <CardDescription>Barcha o'quvchilarni boshqaring</CardDescription>
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="O'quvchi qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ism Familiya</TableHead>
                <TableHead>Telefon</TableHead>
                <TableHead>Kategoriya</TableHead>
                <TableHead>Holat</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Amallar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{student.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={student.status === "active" ? "default" : "secondary"}>
                      {student.status === "active" ? "Faol" : "Tugatgan"}
                    </Badge>
                  </TableCell>
                  <TableCell>{student.progress}%</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeleteStudent(student.id)}>
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
    </div>
  )
}
