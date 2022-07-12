import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"

export default function Login() {
    return (
        <div className="login">
            <span className='loginTitle'>Login</span>
            <form action="" className="loginform">
                <label>Email</label>
                <input type="email" placeholder='Email' />
                <label>Password</label>
                <input type="password" placeholder='Password' />
            <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
        </div>
    )
}
