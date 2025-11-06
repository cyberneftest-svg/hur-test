"use client"
import React, { use, useEffect } from 'react'

const page = () => {

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/feedbacks';
    }
    else {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Test Page</h1>
      <p className="mb-4">This is a test page for the application.</p>
      <div className="flex space-x-4">
        <a href="/login" className="text-blue-500 hover:text-blue-600">Login</a>
        <a href="/register" className="text-blue-500 hover:text-blue-600">Register</a>
      </div>  
    </div>
  )
}

export default page
