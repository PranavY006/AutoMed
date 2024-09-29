import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

function Create() {
  const [values, setValues] = useState({
    name: '',
    position: '',
    email: '',
  });

  const handleChange = (value) => {
    setValues({ ...values, position: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8081/create', values)
      .then((res) => navigate('/user'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex align-items-center flex-column mt-3">
      <h1 className="font-bold">Add A User</h1>
      <form className="w-50 px-4" onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <Input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label mb-8">
            Position:
          </label>
          <RadioGroup
            id="position"
            className="form-control flex"
            value={values.position}
            onValueChange={handleChange}
          >
            <RadioGroupItem value="admin" id="frontend" />
            <label htmlFor="frontend">admin</label>

            <RadioGroupItem value="doctor" id="backend" />
            <label htmlFor="backend">doctor</label>

            <RadioGroupItem value="user" id="fullstack" />
            <label htmlFor="fullstack">user</label>
          </RadioGroup>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <Input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Create;
