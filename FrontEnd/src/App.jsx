import './index.css'
import Sign_in from './auth/Sign_in.jsx'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function App() {

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
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" placeholder="Enter your username" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;



