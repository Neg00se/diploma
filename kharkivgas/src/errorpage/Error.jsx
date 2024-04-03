import React from 'react'
import './error.css'
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="error-container">
            <h1>Упс! Такої сторінки не існує...</h1>
            <p>Ось кілька корисних посилань:</p>
            <Link to='/login'>Login</Link>
            
        </div>
    )
}

