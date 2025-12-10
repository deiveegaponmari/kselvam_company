import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();
  const handleLogin=async(e)=>{
    e.preventDefault();
    try{
       const response=await axios.post("http://localhost:5000/api/login",{
        email:email,
        password:password
      })
      console.log("login successfull",response)
    
      if(response.data.token){
        //store token to localstorage
        localStorage.setItem("authToken",response.data.token)
      }
       navigate("/")
    }
    catch(error){
      console.log("something went wrong",error.message)
    }
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Login
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e)=>setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Your Name"
              onChange={(e)=>setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">Or</p>
        <p className="text-gray-700 text-center ">Don't have an account?</p>
        <button
            type="submit"
            onClick={()=>navigate('/register')}
            className=" w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
           Create Account
          </button>
      </div>
    </div>
  );
}

export default Login;
