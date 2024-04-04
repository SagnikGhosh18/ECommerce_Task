import React from 'react'
import { useState, useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState('products');

  async function getUsers() {
    try {
      const response = await fetch('http://localhost:5000/users'); // Ensure correct protocol
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const emailhandler = (e) => {
    setEmail(e.target.value);
  }

  const passhandler = (e) => {
    setPass(e.target.value);
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    const valid = users.filter(user=>(user.email===email && user.pass===pass));
    console.log(valid);
    if(valid.length===1)
      setPage('products');
    else{
      setPage('');
    }
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xs m-4">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input value={email} onChange={emailhandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input value={pass} onChange={passhandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******" />
            </div>
            <div className="flex items-center justify-between">
              <Link to={`/${page}`}>
                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>  
              </Link>
              
            </div>
          </form>
        </div>
      </div>

    </>
  )
}
