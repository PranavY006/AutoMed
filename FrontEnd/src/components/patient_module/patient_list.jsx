import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Pagination } from "@/components/ui/pagination"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function Component() {
  const [activeTab, setActiveTab] = useState("search")
  const [searchQuery, setSearchQuery] = useState("")
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Doe",
      dob: "1980-05-15",
      phone: "555-1234",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      dob: "1985-09-20",
      phone: "555-5678",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Bob Johnson",
      dob: "1990-03-01",
      phone: "555-9012",
      email: "bob@example.com",
    },
    {
      id: 4,
      name: "Alice Williams",
      dob: "1975-11-10",
      phone: "555-3456",
      email: "alice@example.com",
    },
  ])
  const [currentPage, setCurrentPage] = useState(1)
  const [patientsPerPage] = useState(10)
  const [newPatient, setNewPatient] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
  })
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleInputChange = (e) => {
    setNewPatient({
      ...newPatient,
      [e.target.id]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setPatients([...patients, { id: patients.length + 1, ...newPatient }])
    setNewPatient({
      name: "",
      dob: "",
      phone: "",
      email: "",
    })
  }
  const handleAddAppointment = (patientId) => {}
  const indexOfLastPatient = currentPage * patientsPerPage
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient)
  const totalPages = Math.ceil(patients.length / patientsPerPage)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <div className="flex h-screen w-full">
      <div className="bg-background border-r px-4 py-6 flex flex-col gap-4">
        <Button
          variant={activeTab === "search" ? "primary" : "ghost"}
          onClick={() => handleTabChange("search")}
          className="justify-start"
        >
          <SearchIcon className="w-5 h-5 mr-2" />
          Search Patients
        </Button>
        <Button
          variant={activeTab === "add" ? "primary" : "ghost"}
          onClick={() => handleTabChange("add")}
          className="justify-start"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Patient
        </Button>
      </div>
      <div className="flex-1 p-6">
        {activeTab === "search" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Search patients..."
                value={searchQuery}
                onChange={handleSearch}
                className="flex-1"
              />
              <Button variant="outline">
                <FilterIcon className="w-5 h-5" />
              </Button>
            </div>
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Date of Birth</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Appointment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentPatients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell>{patient.name}</TableCell>
                      <TableCell>{patient.dob}</TableCell>
                      <TableCell>{patient.phone}</TableCell>
                      <TableCell>{patient.email}</TableCell>
                      <TableCell>
                        <Button variant="outline" onClick={() => handleAddAppointment(patient.id)}>
                          Add Appointment
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-end">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
          </div>
        )}
        {activeTab === "add" && (
          <div className="flex justify-center items-center h-full">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Add New Patient</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter patient name"
                      value={newPatient.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" value={newPatient.dob} onChange={handleInputChange} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="Enter patient phone number"
                      value={newPatient.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter patient email"
                      value={newPatient.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}