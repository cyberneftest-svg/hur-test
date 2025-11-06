import React from 'react'

const page = () => {
  return (

    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="flex flex-col w-80">
            <input type="text" placeholder="Name" className="mb-2 p-2 text-lg border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="mb-2 p-2 text-lg border border-gray-300 rounded" />
            <input type="password" placeholder="Password" className="mb-4 p-2 text-lg border border-gray-300 rounded" />
            <button type="submit" className="p-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer" onClick={() => window.location.href = '/login'}>Register</button>
        </form>
        <p className='mt-4'>Already have an account? <a href="/login" className='text-blue-300 hover:text-blue-600'>Login</a></p>
    </div>
  )
}

export default page
