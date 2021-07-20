
import Navbar from '../components/Navbar'

import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import app from "../firebasconfig"
import firebase from 'firebase';


function Register() {
    const email = useRef("");
    const password = useRef("");
    const name = useRef("");
    const job = useRef("");


    let history = useHistory();

    const db = firebase.firestore();
    const [error, setError] = useState("");
    const signupuser = (event) => {

        event.preventDefault();



        app.auth().createUserWithEmailAndPassword(email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 

                var userId = userCredential.user.uid;
                console.log('id', userId);
                db.collection("userProfiles").doc(userId).set({
                    name: name.current.value,
                    email: email.current.value,
                    job: job.current.value

                }).then(() => {
                    console.log("done");
                    history.push('/dashboard');
                })


                email.current.value = "";
                password.current.value = "";
                name.current.value = "";
                job.current.value = "";
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
                setError(errorMessage);
                // ..
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
                                        <h3 className="mb-0">Sign up user</h3>
                                    </div>
                                    {error &&
                                        <div class="alert alert-danger mt-2 mx-2" role="alert">
                                            {error}
                                        </div>
                                    }
                                    <div className="card-body">
                                        <form className="form" onSubmit={signupuser}>


                                            <div className="form-group">
                                                <label >Name</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" ref={name} required />
                                                <div className="invalid-feedback">Oops, you missed this one.</div>
                                            </div>

                                            <div className="form-group">
                                                <label >Email</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" ref={email} required />
                                                <div className="invalid-feedback">Oops, you missed this one.</div>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control form-control-lg rounded-0" ref={password} required />
                                                <div className="invalid-feedback">Enter your password too!</div>
                                            </div>

                                            <div className="form-group">
                                                <label >Job</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" ref={job} required />
                                                <div className="invalid-feedback">Oops, you missed this one.</div>
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

export default Register
