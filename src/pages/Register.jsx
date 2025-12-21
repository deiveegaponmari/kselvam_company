import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from '../api/apiConfig';

function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const finalRole=role.trim() === "" ? "User" : role;
    try {
      const response = await api.post(
        "/register",
        {
          userName: user,
          email: email,
          password: password,
          role:finalRole
        }
      );
      console.log("Registration successfull", response);
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log("something went wrong", error.message);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Create Account
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setUser(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Role</label>
            <select value={role}
              type="text"
              placeholder="Select Your Role"
              onChange={(e) => setRole(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Role --</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            onClick={handleRegister}
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">Or</p>
        <p className="text-gray-700 text-center ">Already have an account?</p>
        <button
          type="submit"
          onClick={() => navigate("/login")}
          className=" w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
