"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import Button from "../components/Button"
import Modal from "../components/Modal"
import toast from "react-hot-toast"
import { PlusIcon, PlayIcon, DocumentTextIcon } from "@heroicons/react/24/outline"

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

const Tests: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tests")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isStartModalOpen, setIsStartModalOpen] = useState(false)
  const [newTest, setNewTest] = useState({
    name: "",
    category: "",
    questions: "",
    duration: "",
    description: "",
  })
  const [selectedStudent, setSelectedStudent] = useState("")
  const [selectedTest, setSelectedTest] = useState("")

  // Yangi test qo'shish - Bu yerga POST API ulanadi
  const handleAddTest = () => {
    if (!newTest.name || !newTest.category || !newTest.questions || !newTest.duration) {
      toast.error("Barcha majburiy maydonlarni to'ldiring")
      return
    }

    toast.success("Yangi test qo'shildi")
    setNewTest({ name: "", category: "", questions: "", duration: "", description: "" })
    setIsAddModalOpen(false)

    // API call - Real loyihada bu yerga API chaqiruvi yoziladi
    // fetch('/api/tests', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newTest)
    // })
  }

  // Test boshlash - Bu yerga POST API ulanadi
  const handleStartTest = () => {
    if (!selectedStudent || !selectedTest) {
      toast.error("O'quvchi va testni tanlang")
      return
    }

    toast.success("Test boshlandi")
    setSelectedStudent("")
    setSelectedTest("")
    setIsStartModalOpen(false)

    // API call - Real loyihada bu yerga API chaqiruvi yoziladi
    // fetch('/api/tests/start', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ studentId: selectedStudent, testId: selectedTest })
    // })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Testlar</h1>
        <div className="flex space-x-3">
          <Button variant="secondary" onClick={() => setIsStartModalOpen(true)}>
            <PlayIcon className="h-5 w-5 mr-2" />
            Test Boshlash
          </Button>
          <Button onClick={() => setIsAddModalOpen(true)}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Yangi Test
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("tests")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "tests"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Testlar
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "active"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Faol Testlar
          </button>
        </nav>
      </div>

      {/* Tests Tab */}
      {activeTab === "tests" && (
        <Card>
          <CardHeader>
            <CardTitle>Test Kategoriyalari</CardTitle>
            <p className="text-sm text-gray-500">Barcha mavjud testlar ro'yxati</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Test Nomi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kategoriya
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Savollar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vaqt
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amallar
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {testCategories.map((test) => (
                    <tr key={test.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
                          <span className="text-sm font-medium text-gray-900">{test.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {test.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.questions} ta</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.duration} daqiqa</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Button variant="secondary" size="sm">
                            Tahrirlash
                          </Button>
                          <Button variant="danger" size="sm">
                            O'chirish
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active Tests Tab */}
      {activeTab === "active" && (
        <Card>
          <CardHeader>
            <CardTitle>Faol Testlar</CardTitle>
            <p className="text-sm text-gray-500">Hozirda davom etayotgan testlar</p>
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
                      Test
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Boshlangan vaqt
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
                  {activeTests.map((test) => (
                    <tr key={test.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.student}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.test}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.startTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${test.progress}%` }}></div>
                          </div>
                          <span className="text-sm text-gray-500">{test.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Button variant="secondary" size="sm">
                          Ko'rish
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Test Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Yangi Test Yaratish">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Test Nomi</label>
            <input
              type="text"
              value={newTest.name}
              onChange={(e) => setNewTest({ ...newTest, name: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Test nomini kiriting"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Kategoriya</label>
            <select
              value={newTest.category}
              onChange={(e) => setNewTest({ ...newTest, category: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Kategoriyani tanlang</option>
              <option value="A">A kategoriya</option>
              <option value="B">B kategoriya</option>
              <option value="C">C kategoriya</option>
              <option value="D">D kategoriya</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Savollar soni</label>
              <input
                type="number"
                value={newTest.questions}
                onChange={(e) => setNewTest({ ...newTest, questions: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="25"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vaqt (daqiqa)</label>
              <input
                type="number"
                value={newTest.duration}
                onChange={(e) => setNewTest({ ...newTest, duration: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="30"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tavsif</label>
            <textarea
              value={newTest.description}
              onChange={(e) => setNewTest({ ...newTest, description: e.target.value })}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Test haqida qisqacha ma'lumot"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="secondary" onClick={() => setIsAddModalOpen(false)}>
              Bekor qilish
            </Button>
            <Button onClick={handleAddTest}>Yaratish</Button>
          </div>
        </div>
      </Modal>

      {/* Start Test Modal */}
      <Modal isOpen={isStartModalOpen} onClose={() => setIsStartModalOpen(false)} title="Test Boshlash">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">O'quvchi</label>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">O'quvchini tanlang</option>
              <option value="1">Alisher Karimov</option>
              <option value="2">Malika Tosheva</option>
              <option value="3">Bobur Rahimov</option>
              <option value="4">Nilufar Saidova</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Test</label>
            <select
              value={selectedTest}
              onChange={(e) => setSelectedTest(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Testni tanlang</option>
              {testCategories.map((test) => (
                <option key={test.id} value={test.id.toString()}>
                  {test.name} ({test.category})
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="secondary" onClick={() => setIsStartModalOpen(false)}>
              Bekor qilish
            </Button>
            <Button onClick={handleStartTest}>Boshlash</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Tests
