import React from "react";
import './Header.css';
import './Global.css';

export default function Header() {

    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <h1>Start Boostrap</h1>
                    </a>
                </div>
                <nav className="navbar">
                    <a className="active" href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
        </div>
    );
}