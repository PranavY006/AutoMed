import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";



export default function patient_list() {
    const [activeTab, setActiveTab] = useState('search');
    const [patients, setPatients] = useState([
      { id: 1, name: 'John Doe', mobile: '123-456-7890', email: 'admin@gmail.com'},
      { id: 2, name: 'Jane Smith', mobile: '987-654-3210', email: 'whatever@gag'},
      { id: 3, name: 'Alice Johnson', mobile: '555-666-7777', email: 'helo@fa'},
    ]);

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

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
                    <Input placeholder="Search by Patient ID" />
                  </div>

                  <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Mobile</TableHead>
                      <TableHead>email</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {patients.map((patient) => (
                      <TableRow key={patient.id}>
                        <TableCell>{patient.id}</TableCell>
                        <TableCell>{patient.name}</TableCell>
                        <TableCell>{patient.mobile}</TableCell>
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
                  {/* Add your add patient form here */}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
  );
}
