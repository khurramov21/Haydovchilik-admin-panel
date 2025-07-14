"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center space-x-2">
        <SidebarTrigger />
        <h2 className="text-3xl font-bold tracking-tight">Sozlamalar</h2>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Umumiy</TabsTrigger>
          <TabsTrigger value="tests">Test Sozlamalari</TabsTrigger>
          <TabsTrigger value="notifications">Bildirishnomalar</TabsTrigger>
          <TabsTrigger value="backup">Zaxira Nusxa</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Umumiy Sozlamalar</CardTitle>
              <CardDescription>Tizimning asosiy sozlamalarini boshqaring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="system-name">Tizim Nomi</Label>
                <Input id="system-name" defaultValue="Haydovchilik Admin Panel" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="admin-email">Administrator Email</Label>
                <Input id="admin-email" type="email" defaultValue="admin@example.com" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="language">Til</Label>
                <Select defaultValue="uz">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uz">O'zbek</SelectItem>
                    <SelectItem value="ru">Русский</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Qorong'u rejim</Label>
                  <p className="text-sm text-muted-foreground">Interfeys uchun qorong'u mavzuni yoqish</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Avtomatik saqlash</Label>
                  <p className="text-sm text-muted-foreground">Ma'lumotlarni avtomatik saqlash</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Button>Saqlash</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Test Sozlamalari</CardTitle>
              <CardDescription>Testlar uchun umumiy sozlamalar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="default-duration">Standart vaqt (daqiqa)</Label>
                  <Input id="default-duration" type="number" defaultValue="30" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="pass-score">O'tish bali (%)</Label>
                  <Input id="pass-score" type="number" defaultValue="70" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="max-attempts">Maksimal urinishlar soni</Label>
                <Input id="max-attempts" type="number" defaultValue="3" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tasodifiy savollar</Label>
                  <p className="text-sm text-muted-foreground">Savollarni tasodifiy tartibda ko'rsatish</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Vaqt ko'rsatish</Label>
                  <p className="text-sm text-muted-foreground">Qolgan vaqtni ko'rsatish</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Natijani darhol ko'rsatish</Label>
                  <p className="text-sm text-muted-foreground">Test tugagach natijani darhol ko'rsatish</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Button>Saqlash</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bildirishnoma Sozlamalari</CardTitle>
              <CardDescription>Email va SMS bildirishnomalarini sozlang</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email bildirishnomalar</Label>
                  <p className="text-sm text-muted-foreground">Muhim hodisalar haqida email yuborish</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS bildirishnomalar</Label>
                  <p className="text-sm text-muted-foreground">Test natijalari haqida SMS yuborish</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Yangi o'quvchi qo'shilganda</Label>
                  <p className="text-sm text-muted-foreground">Yangi o'quvchi ro'yxatdan o'tganda xabar berish</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Test tugaganda</Label>
                  <p className="text-sm text-muted-foreground">O'quvchi testni tugatganda xabar berish</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="grid gap-2">
                <Label htmlFor="smtp-server">SMTP Server</Label>
                <Input id="smtp-server" placeholder="smtp.gmail.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="smtp-username">Username</Label>
                  <Input id="smtp-username" placeholder="your-email@gmail.com" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="smtp-password">Parol</Label>
                  <Input id="smtp-password" type="password" />
                </div>
              </div>

              <Button>Saqlash</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Zaxira Nusxa Sozlamalari</CardTitle>
              <CardDescription>Ma'lumotlar bazasini zaxiralash va tiklash</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Avtomatik zaxiralash</Label>
                  <p className="text-sm text-muted-foreground">Har kuni avtomatik zaxira nusxa yaratish</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="backup-time">Zaxiralash vaqti</Label>
                <Input id="backup-time" type="time" defaultValue="02:00" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="backup-location">Zaxira joyi</Label>
                <Input id="backup-location" defaultValue="/backup/driving-admin" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="retention-days">Saqlash muddati (kun)</Label>
                <Input id="retention-days" type="number" defaultValue="30" />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Zaxira amallar</Label>
                <div className="flex space-x-2">
                  <Button variant="outline">Zaxira yaratish</Button>
                  <Button variant="outline">Zaxiradan tiklash</Button>
                  <Button variant="outline">Zaxiralarni ko'rish</Button>
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">So'nggi zaxira</h4>
                <p className="text-sm text-muted-foreground">2024-01-15 02:00:00 - Muvaffaqiyatli (2.3 MB)</p>
              </div>

              <Button>Saqlash</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
