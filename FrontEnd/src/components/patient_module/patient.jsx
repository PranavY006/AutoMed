import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Toggle } from '@/components/ui/toggle';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import PatientAdd from './patient_add';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '../ui/label';

export default function Patient() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8081/')
      .then((res) => {
        if (res.data.Status === 'Success' && res.data.position === 'nurse') {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(
            res.data.Message || 'You are not authorized to view this page.'
          );
          navigate('/'); // Redirect to login page if not authorized
        }
      })
      .catch((error) => {
        console.error('There was an error checking authorization!', error);
        setAuth(false);
        setMessage('An error occurred while checking authorization.');
        navigate('/'); // Redirect to login page in case of error
      });
  }, [navigate]);

  const handleLogout = () => {
    axios
      .get('http://localhost:8081/logout')
      .then((res) => {
        if (res.data.Status === 'Success') {
          setAuth(false);
          setName('');
          setMessage('You have been logged out.');
          navigate('/');
        } else {
          setMessage('Logout failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('There was an error during logout!', error);
        setMessage('An error occurred while logging out.');
      });
  };
  const [activeTab, setActiveTab] = useState('search');
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8081/patients')
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the patient data!', error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPatients = searchQuery
    ? patients.filter((patient) => {
        const query = searchQuery.toLowerCase();
        const queryNumber = Number(searchQuery);
        return (
          (patient.id &&
            (patient.id.toString().toLowerCase().includes(query) ||
              patient.id === queryNumber)) ||
          (patient.patient_fname &&
            patient.patient_fname.toLowerCase().includes(query)) ||
          (patient.email && patient.email.toLowerCase().includes(query))
        );
      })
    : patients;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  //console.log("Search Query:", searchQuery);
  console.log('Filtered patients:', filteredPatients); // Debugging log

  return (
    <div className="flex h-screen w-full">
      <div className="bg-gray-100 border-r px-4 py-6 flex flex-col gap-4">
        <div className="flex justify-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <Button onClick={() => handleLogout() }>Logout</Button>
        <Button
          variant={activeTab === 'search' ? 'primary' : 'ghost'}
          onClick={() => handleTabChange('search')}
          className="justify-start"
        >
          <FaSearch />
        </Button>

        <Button
          variant={activeTab === 'add' ? 'primary' : 'ghost'}
          onClick={() => handleTabChange('add')}
          className="justify-start"
        >
          <FaPlus />
        </Button>
      </div>
      <div className="flex-1 p-6">
        {activeTab === 'search' && (
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Search Patients</h2>
              <div className="flex gap-4 mb-4">
                <Input
                  type="text"
                  placeholder="Search by Patient ID"
                  value={searchQuery}
                  onChange={handleSearch}
                />
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
                          <Dialog>
                            <DialogTrigger>
                              <Button>Add Appointment</Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>
                                  Are you absolutely sure?
                                </DialogTitle>
                                <div className="flex gap-4">
                                <Label className="font-bold pt-3">{patient.patient_id}</Label>
                                <Label>{patient.patient_fname}</Label>
                                </div> 
                                <Input
                                  id="password"
                                  name="password"
                                  placeholder="Enter your password"
                                  type="password"
                                  required
                                  className="mb-4"
                                />
                                <Button>Hayee</Button>
                                <DialogDescription>
                                  This action cannot be undone. This will
                                  permanently delete your account and remove
                                  your data from our servers.
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
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
            <div className="flex">
              <PatientAdd />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
