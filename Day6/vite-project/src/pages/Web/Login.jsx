import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        try {
            const response = await axios.get('http://localhost:8080/users/login', {
                params: {
                    email,
                    password
                }
            });

            if (response.data) {
                // Successful login
                if (email === 'iamneo@gmail.com') {
                    navigate('/admin/dashboard'); // Navigate to Admin Panel
                } else {
                    navigate('/shopbycategory'); // Navigate to User Panel
                }
            } else {
                setError('Invalid email or password.');
            }
        } catch (error) {
            setError('An error occurred during login: ' + error.message);
        }
    };

    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <Card className="w-full max-w-sm mx-4 bg-white shadow-lg rounded-lg">
                <CardHeader className="space-y-1 p-6 border-b border-gray-200">
                    <CardTitle className="text-2xl font-bold text-gray-800">Login</CardTitle>
                    <CardDescription className="text-gray-600">
                        Enter your details below to login
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="user@domain.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="******"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">Login</Button>
                    </form>
                </CardContent>
                <CardFooter className="p-6">
                    {/* You can add additional footer content here if needed */}
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
