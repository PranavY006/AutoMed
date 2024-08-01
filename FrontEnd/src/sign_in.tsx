/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BmxjYMg96Eu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import React, { useState } from "react"
import axios from "axios"

export default function Components() {

  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('http://localhost:8081', values)
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
            <h2 className="text-3xl font-bold">Login</h2>
            <p className="text-muted-foreground">Enter your username and password to access your account.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  required
                  onChange={e => setValues({ ...values, username: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  required
                  onChange={e => setValues({ ...values, password: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="text-center mt-4">
                <Link to="/signup" className="text-muted-foreground">
                  Don't have an account? Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
