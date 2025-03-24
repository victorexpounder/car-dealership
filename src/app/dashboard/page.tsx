'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart3, Car, Clock, DollarSign, Home, Package, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import AdminSidebar from "@/components/admin-sidebar"
import { AddCarDialog } from "@/components/add-car-dialog"
import { EditCarDialog } from "@/components/edit-car-dialog"
import { DeleteCarDialog } from "@/components/delete-car-dialog"
import Image from "next/image"
import { useCarContext } from "@/Context/CarContext"

export default function DashboardPage() {
    const {cars, setCars} = useCarContext();
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AdminSidebar />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
          <div className="flex items-center gap-2 lg:hidden">
            <Image 
            src="/images/logo.png" 
            width={30} 
            height={30} 
            alt="okopi logo"
            />
            <span className="text-xl font-bold">Okopi Autos</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm">
              <span className="sr-only sm:not-sr-only sm:ml-1 sm:mr-2">View website</span>
              <Link href="/">
                <Home className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="Admin User" />
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@autoelite.com</p>
              </div>
            </div>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <AddCarDialog />
          </div>
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="listings">Car Listings</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="rental">Rental Applications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="listings" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Car Listings</CardTitle>
                  <AddCarDialog />
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Car</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cars.map((car: any, index:number) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{car.model}</TableCell>
                            <TableCell>{car.category}</TableCell>
                            <TableCell>{car.price}</TableCell>
                            <TableCell>
                              <Badge className="bg-green-500">{car.status}</Badge>
                            </TableCell>
                            <TableCell className="text-right flex justify-end gap-2">
                              <EditCarDialog
                                car={car}
                              />
                              <DeleteCarDialog carName="Tesla Model S" />
                            </TableCell>
                          </TableRow>
                      ))}
                      
                      
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="orders" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Order Management</CardTitle>
                  <CardDescription>Manage customer orders and track status</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Car</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">#1204</TableCell>
                        <TableCell>John Smith</TableCell>
                        <TableCell>BMW X5</TableCell>
                        <TableCell>$76,500</TableCell>
                        <TableCell>2023-03-15</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-500">Processing</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">#1203</TableCell>
                        <TableCell>Sarah Johnson</TableCell>
                        <TableCell>Tesla Model S</TableCell>
                        <TableCell>$89,999</TableCell>
                        <TableCell>2023-03-14</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">#1202</TableCell>
                        <TableCell>Michael Davis</TableCell>
                        <TableCell>Audi e-tron GT</TableCell>
                        <TableCell>$99,800</TableCell>
                        <TableCell>2023-03-12</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">#1201</TableCell>
                        <TableCell>Emma Wilson</TableCell>
                        <TableCell>Porsche 911</TableCell>
                        <TableCell>$115,000</TableCell>
                        <TableCell>2023-03-10</TableCell>
                        <TableCell>
                          <Badge>Pending</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="rental" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Rental Applications</CardTitle>
                  <CardDescription>View and manage car rental requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Application ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Car</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">R-2304</TableCell>
                        <TableCell>Robert Brown</TableCell>
                        <TableCell>Mercedes EQS</TableCell>
                        <TableCell>7 days</TableCell>
                        <TableCell>2023-03-20</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-500">Pending Approval</Badge>
                        </TableCell>
                        <TableCell className="text-right flex justify-end gap-2">
                          <Button variant="outline" size="sm" className="bg-green-500 text-white">
                            Approve
                          </Button>
                          <Button variant="outline" size="sm" className="bg-red-500 text-white">
                            Reject
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">R-2303</TableCell>
                        <TableCell>Lisa Miller</TableCell>
                        <TableCell>BMW X5</TableCell>
                        <TableCell>3 days</TableCell>
                        <TableCell>2023-03-18</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Approved</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">R-2302</TableCell>
                        <TableCell>James Wilson</TableCell>
                        <TableCell>Audi e-tron GT</TableCell>
                        <TableCell>1 day</TableCell>
                        <TableCell>2023-03-15</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">R-2301</TableCell>
                        <TableCell>Jennifer Clark</TableCell>
                        <TableCell>Tesla Model S</TableCell>
                        <TableCell>5 days</TableCell>
                        <TableCell>2023-03-10</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-red-500 text-white">
                            Rejected
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

