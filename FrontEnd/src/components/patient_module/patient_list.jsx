import React, { useState , useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Label } from "@/components/ui/label";


export default function patient_list() {
    const [activeTab, setActiveTab] = useState('search');
    const [patients, setPatients] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [newPatient, setNewPatient] = useState({
      id: "",
      patient_fname: "",
      phone: "",
      email: ""
    });

    useEffect(() => {
      axios.get('http://localhost:8081/patients')
        .then(response => {
          setPatients(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the patient data!", error);
        });
    }, []);

    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewPatient({ ...newPatient, [name]: value });
    };
    const handleAddPatient = () => {
      axios.post('http://localhost:8081/patients', newPatient)
        .then(response => {
          setPatients([...patients, response.data]);
          setActiveTab("list");
        })
        .catch(error => {
          console.error("There was an error adding the patient!", error);
        });
    };

    const filteredPatients = searchQuery
    ? patients.filter(patient => {
        const query = searchQuery.toLowerCase();
        const queryNumber = Number(searchQuery);
        return (
          (patient.id && (patient.id.toString().toLowerCase().includes(query) || patient.id === queryNumber)) ||
          (patient.patient_fname && patient.patient_fname.toLowerCase().includes(query)) ||
          (patient.email && patient.email.toLowerCase().includes(query))
        );
      })
    : patients;

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
    //console.log("Search Query:", searchQuery);
    console.log("Filtered patients:", filteredPatients); // Debugging log

    return (
      <div className="flex h-screen w-full">
        <div className="bg-gray-100 border-r px-4 py-6 flex flex-col gap-4">
          <Button
            variant={activeTab === 'search' ? 'primary' : 'ghost'}
            onClick={() => handleTabChange('search')}
            className="justify-start"
          >
            Search Patients
          </Button>
          <Button
            variant={activeTab === 'add' ? 'primary' : 'ghost'}
            onClick={() => handleTabChange('add')}
            className="justify-start"
          >
            Add Patient
          </Button>
        </div>
        <div className="flex-1 p-6">
          {activeTab === 'search' && (
              <div className="flex flex-col gap-4">
                <div className="bg-white p-4 rounded shadow">
                  <h2 className="text-xl font-bold mb-4">Search Patients</h2>
                  <div className="flex gap-4 mb-4">
                    <Input type="text" placeholder="Search by Patient ID" value={searchQuery}
          onChange={handleSearch} />
                  </div>

                  <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Mobile</TableHead>
                      <TableHead>email</TableHead>
                      <TableHead>Appointment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPatients.map((patient) => (
                      <TableRow key={patient.id}>
                        <TableCell>{patient.patient_id}</TableCell>
                        <TableCell>{patient.patient_fname}</TableCell>
                        <TableCell>{patient.phone}</TableCell>
                        <TableCell>{patient.email}</TableCell>
                        <TableCell>
                          <Button variant="outline">Action</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
                </div>
              </div>
          )}
          {activeTab === 'add' && (
            <>
              <div className="flex justify-center items-center h-full">
                <div className="bg-white p-4 rounded shadow w-full max-w-md">
                  <h2 className="text-xl font-bold mb-4">Add New Patient</h2>
                  <div className="mb-4">
              <Label htmlFor="id">Patient ID</Label>
              <Input
                type="text"
                id="id"
                name="id"
                value={newPatient.id}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="patient_fname">Name</Label>
              <Input
                type="text"
                id="patient_fname"
                name="patient_fname"
                value={newPatient.patient_fname}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="phone">Mobile</Label>
              <Input
                type="text"
                id="phone"
                name="phone"
                value={newPatient.phone}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={newPatient.email}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <Button variant="outline" onClick={handleAddPatient}>
              Add Patient
            </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
  );
}
