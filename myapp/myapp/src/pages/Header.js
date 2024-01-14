import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
export default function Header() {
  return (
    <div>   
        <nav className="header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/School">School</Link>
                </li>
                <li>
                    <Link to="/Test">Test</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
