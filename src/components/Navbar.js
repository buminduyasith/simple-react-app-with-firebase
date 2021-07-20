import React, { useState, useEffect } from 'react'
import {
    Link
} from "react-router-dom";

import app from "../firebasconfig"

import { useHistory } from 'react-router-dom'

export default function Navbar() {


    let history = useHistory();
    const [loading, setloading] = useState(true);
    const [login, setlogin] = useState(null);


    useEffect(() => {

        app.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                setlogin(true);
                // ...
            } else {
                // User is signed out
                // ...
                // history.push('/');
            }
        });
    }, [])

    const logout = () => {
        app.auth().signOut().then(() => {
            // Sign-out successful.
            history.push('/');
        }).catch((error) => {
            // An error happened.
        });

    }
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h5 className="navbar-brand">React App</h5>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link to="/signup" className="nav-link" >Register</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Login</Link>

                        </li>
                    </ul>
                    <span className="navbar-text">
                        {/* Navbar text with an inline element */}
                        {login &&
                            <button class="btn btn-primary" onClick={logout}>Logout</button>
                        }

                    </span>
                </div>
            </div>
        </nav>


    )
}

