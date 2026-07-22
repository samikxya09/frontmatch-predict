import { useState } from "react";
import axios from 'axios'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 async function loginUser(event) {
    event.preventDefault();

  const response = await axios.post("http://localhost:3000/logintest",{
       email: email ,
       password: password 
  
  });
  console.log(response.data)
  if(response.status == 200)
    {
localStorage.setItem("token",response.data.token)

alert("User Registered Successfully");
      
           setEmail("");
           setPassword("");

   
 }
else{
  alert("something went wrong")
}

   }   // Backend code will go here later

     
 
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to your account
        </p>

        <form onSubmit={loginUser} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Register
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;