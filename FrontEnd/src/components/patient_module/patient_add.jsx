import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import axios from 'axios';

export default function PatientAdd() {
  const [formData, setFormData] = useState({
    patient_id: '',
    patient_fname: '',
    patient_lname: '',
    blood_type: '',
    email: '',
    gender: '',
    age: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8081/patients',
        formData
      );
      console.log('Patient added successfully:', response.data);
      // Optionally, you can reset the form or redirect the user
    } catch (error) {
      console.error('There was an error adding the patient!', error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Patient</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4 mb-4">
          <Input
            name="patient_fname"
            placeholder="First Name"
            value={formData.patient_fname}
            onChange={handleChange}
            required
          />

          <Input
            name="patient_lname"
            placeholder="Last Name"
            value={formData.patient_lname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-4 mb-4">
          <Select
            value={formData.blood_type}
            onValueChange={(value) => handleSelectChange('blood_type', value)}
          >
            <SelectTrigger className="w-full">
              {formData.blood_type || 'Select Blood Type'}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A+">A+</SelectItem>
              <SelectItem value="A-">A-</SelectItem>
              <SelectItem value="B+">B+</SelectItem>
              <SelectItem value="B-">B-</SelectItem>
              <SelectItem value="AB+">AB+</SelectItem>
              <SelectItem value="AB-">AB-</SelectItem>
              <SelectItem value="O+">O+</SelectItem>
              <SelectItem value="O-">O-</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={formData.gender}
            onValueChange={(value) => handleSelectChange('gender', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full"
        />

        <Input
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full"
        />
        <Input
          name="phone"
          placeholder="Phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full"
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
