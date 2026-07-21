
import { useState } from "react";

import axios from 'axios'

function Register(){
  const [name,setName] =useState("")
  const [password,setPassword] =useState("")
  const [email,setEmail] = useState("")
 
async function registerUser(event) {
  event.preventDefault();

  
    await axios.post("http://localhost:3000/register", {
      email: email,
      name: name,
      password: password,
    });

    alert("User Registered Successfully");

    setEmail("");
    setName("");
    setPassword("");
  
}


    return(
       
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form onSubmit={registerUser}className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-5">

    <h2 className="text-3xl font-bold text-center text-gray-800">
      Register
    </h2>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Name
      </label>
      <input
        type="text"
        value ={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Password */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>
      <input
        type="password"
        value ={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
    >
      Register
    </button>

  </form>
</div>
    );
}

export default Register;