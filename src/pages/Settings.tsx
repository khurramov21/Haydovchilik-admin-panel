"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import Button from "../components/Button"

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-gray-900">Sozlamalar</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: "general", name: "Umumiy" },
            { id: "tests", name: "Test Sozlamalari" },
            { id: "notifications", name: "Bildirishnomalar" },
            { id: "backup", name: "Zaxira Nusxa" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* General Settings */}
      {activeTab === "general" && (
        <Card>
          <CardHeader>
            <CardTitle>Umumiy Sozlamalar</CardTitle>
            <p className="text-sm text-gray-500">Tizimning asosiy sozlamalarini boshqaring</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Tizim Nomi</label>
              <input
                type="text"
                defaultValue="Haydovchilik Admin Panel"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Administrator Email</label>
              <input
                type="email"
                defaultValue="admin@example.com"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Til</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Qorong'u rejim</label>
                  <p className="text-sm text-gray-500">Interfeys uchun qorong'u mavzuni yoqish</p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Avtomatik saqlash</label>
                <p className="text-sm text-gray-500">Ma'lumotlarni avtomatik saqlash</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded" />
            </div>

            <Button>Saqlash</Button>
          </CardContent>
        </Card>
      )}

      {/* Test Settings */}
      {activeTab === "tests" && (
        <Card>
          <CardHeader>
            <CardTitle>Test Sozlamalari</CardTitle>
            <p className="text-sm text-gray-500">Testlar uchun umumiy sozlamalar</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Standart vaqt (daqiqa)</label>
                <input
                  type="number"
                  defaultValue="30"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">O'tish bali (%)</label>
                <input
                  type="number"
                  defaultValue="70"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Maksimal urinishlar soni</label>
              <input
                type="number"
                defaultValue="3"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Tasodifiy savollar</label>
                  <p className="text-sm text-gray-500">Savollarni tasodifiy tartibda ko'rsatish</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Vaqt ko'rsatish</label>
                  <p className="text-sm text-gray-500">Qolgan vaqtni ko'rsatish</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Natijani darhol ko'rsatish</label>
                  <p className="text-sm text-gray-500">Test tugagach natijani darhol ko'rsatish</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded" />
              </div>
            </div>

            <Button>Saqlash</Button>
          </CardContent>
        </Card>
      )}

      {/* Other tabs content would go here */}
      {activeTab === "notifications" && (
        <Card>
          <CardHeader>
            <CardTitle>Bildirishnoma Sozlamalari</CardTitle>
            <p className="text-sm text-gray-500">Email va SMS bildirishnomalarini sozlang</p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">Bildirishnoma sozlamalari bu yerda bo'ladi...</p>
          </CardContent>
        </Card>
      )}

      {activeTab === "backup" && (
        <Card>
          <CardHeader>
            <CardTitle>Zaxira Nusxa Sozlamalari</CardTitle>
            <p className="text-sm text-gray-500">Ma'lumotlar bazasini zaxiralash va tiklash</p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">Zaxira nusxa sozlamalari bu yerda bo'ladi...</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Settings
