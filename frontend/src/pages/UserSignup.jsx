import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import {UserDataContext} from "../context/UserContext";
import { useState } from "react";


const UserSignup = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [userData, setUserData] = React.useState({});

    const navigate = useNavigate();
    const {user, setUser} = React.useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname:{
            firstname: firstName,
            lastname: lastName,
            },
            email: email,
            password: password
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
        if (response.status === 201) {
            const data= response.data;
            setUserData(data.user);
            localStorage.setItem("token", data.token);
            navigate("/home");
        }
        // Handle form submission
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
        <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />
        
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
        <h3 className="text-lg font-medium mb-2">What's your name?</h3>
        <div className="flex gap-4 mb-6">
            <input 
            required
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
            type="text" 
            placeholder='First Name' 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
            <input 
            required
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
            type="text" 
            placeholder='Last Name' 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
            </div>
            <h3 className="text-lg font-medium mb-2">What's your email?</h3>
            <input 
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm "
            type="email" 
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input 
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm "
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            

            <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 border w-full text-base placeholder:text-sm" >
                Create Account
            </button>
        </form>
            <p className="text-center">Already have an account?<Link to={'/login'} className='text-blue-600 '> Login here.</Link></p>
        
        </div>
        <div>
            <p className="text-sm text-gray-600 text-center mb-4">
                By Proceeding, you consent to get calls, WhatsApp or SMS messages, inclusing automated means, from Uber and its affiliats to the number provided.
            </p>
        </div>
    </div>
  )
}

export default UserSignup;