import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import axios from 'axios';

function Home1() {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                if (res.data.Status === 'Success') {
                    setAuth(true);
                    setName(res.data.name);
                } else {
                    setAuth(false);
                    setMessage(res.data.Message);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
                setAuth(false);
                setMessage("An error occurred while checking authorization.");
            });
    }, []); // Add empty dependency array to run only once on mount

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                if (res.data.Status === 'Success') {
                    setAuth(false);
                    setName('');
                    setMessage("You have been logged out.");
                } else {
                    setMessage("Logout failed. Please try again.");
                }
            })
            .catch(error => {
                console.error("There was an error during logout!", error);
                setMessage("An error occurred while logging out.");
            });
    };
    

    return (
        <div className='container mt-4'>
            {
                auth ? (
                    <div>
                        <h3>You are Authorized, {name}</h3>
                        <Button className='btn btn-danger' onClick={handleLogout}>Logout</Button>
                    </div>
                ) : (
                    <div>
                        <h3>{message}</h3>
                        <h3>Login now</h3>
                        <Button className='btn btn-primary'>Login</Button>
                    </div>
                )
            }
        </div>
    );
}

export default Home1;
