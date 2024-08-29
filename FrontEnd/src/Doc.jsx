import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Doc() {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    axios.defaults.withCredentials = true;

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                if (res.data.Status === 'Success' && res.data.position === 'doctor') {
                    setAuth(true);
                    setName(res.data.name);
                } else {
                    setAuth(false);
                    setMessage(res.data.Message || "You are not authorized to view this page.");
                    navigate('/'); // Redirect to login page if not authorized
                }
            })
            .catch(error => {
                console.error("There was an error checking authorization!", error);
                setAuth(false);
                setMessage("An error occurred while checking authorization.");
                navigate('/'); // Redirect to login page in case of error
            });
    }, [navigate]);

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                if (res.data.Status === 'Success') {
                    setAuth(false);
                    setName('');
                    setMessage("You have been logged out.");
                    navigate('/');
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
            {auth ? (
                <div>
                    <h3>You are Authorized, Dr. {name}</h3>
                    <Button className='btn btn-danger' onClick={handleLogout}>Logout</Button>
                </div>
            ) : (
                <div>
                    <h3>{message}</h3>
                    <Button className='btn btn-primary' onClick={() => navigate('/')}>Login</Button>
                </div>
            )}
        </div>
    );
}

export default Doc;
