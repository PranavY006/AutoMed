import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

export default function Signin() {
  const [values, setValues] = useState({
    user_id: '',
    password: '',
  });

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8081/', values)
      .then((res) => {
        if (res.data.Status === 'Success') {
          const position = res.data.position;
          if (position === 'admin') {
            navigate('/admin');
          } else if (position === 'doctor') {
            navigate('/doctor');
          } else if (position === 'nurse') {
            navigate('/nurse');
          } else {
            navigate('/');
          }
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="grid md:grid-cols-2 min-h-screen w-full">
      <div className="bg-muted flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Welcome to Hospital Login
          </h1>
          <p className="text-muted-foreground">
            Securely access your hospital's digital services with our
            user-friendly login experience.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Login</h2>
            <p className="text-muted-foreground">
              Enter your user_id and password to access your account.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="user_id">user_id</Label>
                <Input
                  id="user_id"
                  name="user_id"
                  type="text"
                  placeholder="Enter your user_id"
                  required
                  onChange={(e) =>
                    setValues({ ...values, user_id: e.target.value })
                  }
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
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
              </div>

              <Button className="w-full">Login</Button>

              <div className="text-center mt-4">
                <Link
                  to="/signup"
                  prefetch={undefined}
                  className="text-muted-foreground"
                >
                  Don't have an account? Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
