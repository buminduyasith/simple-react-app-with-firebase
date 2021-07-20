import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'
import { useHistory } from 'react-router-dom'
import app from "../firebasconfig"
import firebase from 'firebase';
function Dashboard() {
    const db = firebase.firestore();
    const [users, setUsers] = useState([]);
    let history = useHistory();
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        app.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                // setlogin(true);
                // ...
            } else {
                // User is signed out
                // ...
                history.push('/');
            }
        });
    }, [])


    useEffect(() => {
        db.collection("userProfiles").get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());

                // setNames(names => [...names, newName])
                setUsers(users => [...users, doc.data()]);
                setLoading(false);
            });
        });
    }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className=" min-vh-100 d-flex flex-column ">
                        <div className="row mt-2">

                            {loading && <h3>Loading please wait...</h3>}

                            {users.map((item, i) => (
                                <UserCard key={i} name={item.name} email={item.email} job={item.job} />
                            ))}

                            {/* end */}

                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //     <Navbar />
        //     <div class="row">
        //         <div class="col-sm-6">
        //             <div class="card">
        //                 <div class="card-body">
        //                     <h5 class="card-title">Special title treatment</h5>
        //                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //                     <a href="#" class="btn btn-primary">Go somewhere</a>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="col-sm-6">
        //             <div class="card">
        //                 <div class="card-body">
        //                     <h5 class="card-title">Special title treatment</h5>
        //                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //                     <a href="#" class="btn btn-primary">Go somewhere</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Dashboard
