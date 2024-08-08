/**
 * v0 by Vercel.
 * @see https://v0.dev/t/N4XmQpDBWBo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    position: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/signup', values)
      .then(res => {
        console.log(res);
        if (res.data.status === "Success") {
          navigate('/'); // Redirect to sign-in page at '/'
        } else {
          alert(res.data.error || "Sign up failed");
        }
      })
      .catch(err => {
        console.log(err);
        alert("An error occurred. Please try again.");
      });
  }

  return (
    <div className="grid md:grid-cols-2 min-h-screen w-full">
      <div className="bg-muted flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Welcome to Hospital Login</h1>
          <p className="text-muted-foreground">
            Securely access your hospital's digital services with our user-friendly login experience.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <p className="text-muted-foreground">Create a new account to access our services.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="username" 
                  type="text" 
                  onChange={e => setValues({ ...values, username: e.target.value })}
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Select 
                  onValueChange={value => setValues({ ...values, position: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="nurse">Nurse</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  onChange={e => setValues({ ...values, password: e.target.value })}
                  required 
                  placeholder="Enter your password" 
                />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
