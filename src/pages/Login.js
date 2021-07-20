
import Navbar from '../components/Navbar';

import React, { useRef, useState, useEffect } from 'react'

import app from "../firebasconfig"

import { useHistory } from 'react-router-dom';


function Login() {

    const email = useRef("");
    const password = useRef("");
    let history = useHistory();
    const [error, setError] = useState("");

    useEffect(() => {

        app.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                history.push('/dashboard');
                // setlogin(true);
                // ...
            } else {
                // User is signed out
                // ...

            }
        });
    }, [])


    const signinuser = (event) => {

        event.preventDefault();


        const data = {
            email: email.current.value,
            password: password.current.value
        }

        console.log(data);






        app.auth().signInWithEmailAndPassword(email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                email.current.value = "";
                password.current.value = "";
                history.push('/dashboard');


                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage);
                email.current.value = "";
                password.current.value = "";
            });


    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 mx-auto">


                                <div className="card rounded shadow shadow-sm">
                                    <div className="card-header">
                                        <h3 className="mb-0">Login</h3>
                                    </div>
                                    {error &&
                                        <div class="alert alert-danger mt-2 mx-2" role="alert">
                                            {error}
                                        </div>
                                    }
                                    <div className="card-body">
                                        <form className="form" noValidate onSubmit={signinuser}>
                                            <div className="htmlForm-group">
                                                <label htmlFor="uname1">Username</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" ref={email} required />
                                                <div className="invalid-feedback">Oops, you missed this one.</div>
                                            </div>
                                            <div className="htmlForm-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control form-control-lg rounded-0" ref={password} required />
                                                <div className="invalid-feedback">Enter your password too!</div>
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-lg   mt-3 " id="btnLogin" style={{ width: "100%" }}>Login</button>
                                        </form>


                                    </div>

                                </div>

                            </div>


                        </div>


                    </div>

                </div>

            </div>
        </div>

    )
}

export default Login
