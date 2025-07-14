"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import Button from "../components/Button"
import Modal from "../components/Modal"
import toast from "react-hot-toast"
import { PlusIcon, TrashIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

// Fake data - Bu yerga real API dan ma'lumotlar kelib tushadi
const initialStudents = [
  { id: 1, name: "Alisher Karimov", phone: "+998901234567", category: "B", status: "active", progress: 75 },
  { id: 2, name: "Malika Tosheva", phone: "+998907654321", category: "A", status: "active", progress: 45 },
  { id: 3, name: "Bobur Rahimov", phone: "+998909876543", category: "B", status: "completed", progress: 100 },
  { id: 4, name: "Nilufar Saidova", phone: "+998901111111", category: "C", status: "active", progress: 30 },
]

const Students: React.FC = () => {
  const [students, setStudents] = useState(initialStudents)
  const [searchTerm, setSearchTerm] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newStudent, setNewStudent] = useState({
    name: "",
    phone: "",
    category: "",
  })

  // O'quvchi qo'shish - Bu yerga POST API ulanadi
  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.phone || !newStudent.category) {
      toast.error("Barcha maydonlarni to'ldiring")
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
    setIsModalOpen(false)
    toast.success("O'quvchi muvaffaqiyatli qo'shildi")

    // API call - Real loyihada bu yerga API chaqiruvi yoziladi
    // fetch('/api/students', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(student)
    // })
  }

  // O'quvchi o'chirish - Bu yerga DELETE API ulanadi
  const handleDeleteStudent = (id: number) => {
    setStudents(students.filter((s) => s.id !== id))
    toast.success("O'quvchi o'chirildi")

    // API call - Real loyihada bu yerga API chaqiruvi yoziladi
    // fetch(`/api/students/${id}`, { method: 'DELETE' })
  }

  const filteredStudents = students.filter(
    (student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.phone.includes(searchTerm),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">O'quvchilar</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <PlusIcon className="h-5 w-5 mr-2" />
          Yangi O'quvchi
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>O'quvchilar Ro'yxati</CardTitle>
          <div className="mt-4 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="O'quvchi qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ism Familiya
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Telefon
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategoriya
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Holat
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amallar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {student.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          student.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {student.status === "active" ? "Faol" : "Tugatgan"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                        </div>
                        <span>{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Button variant="danger" size="sm" onClick={() => handleDeleteStudent(student.id)}>
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add Student Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Yangi O'quvchi Qo'shish">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ism Familiya</label>
            <input
              type="text"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ism familiyani kiriting"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Telefon</label>
            <input
              type="text"
              value={newStudent.phone}
              onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="+998901234567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Kategoriya</label>
            <select
              value={newStudent.category}
              onChange={(e) => setNewStudent({ ...newStudent, category: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Kategoriyani tanlang</option>
              <option value="A">A kategoriya</option>
              <option value="B">B kategoriya</option>
              <option value="C">C kategoriya</option>
              <option value="D">D kategoriya</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Bekor qilish
            </Button>
            <Button onClick={handleAddStudent}>Qo'shish</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Students
