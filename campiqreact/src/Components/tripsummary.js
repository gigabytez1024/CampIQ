import React , {useEffect} from "react";
import {useState} from 'react';
//import {db} from "../firebasedb";
import {auth, db} from "../firebase"

const TripSummaryComponent = () => {

    const [info , setInfo] = useState([]);
    //const uid = auth.currentUser.uid;
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
    });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        
        db.collection("users")
        
        .get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);   
            });
        })
    }

    return(

        <div>
            <center>
                <h2>Account & Packing List</h2>
            </center>
            
            {
                info.map((data) => (
                <Frame 
                    name={data.name} 
                    email={data.email}
                    packinglist={data.packinglist}
                    />
                ))
            }
        </div>
    )

}

const Frame = ({name , email , packinglist}) => {
    console.log(name + " " + email + " " + packinglist);
    return (
        <center>
            <div className="div">
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>Packing List : {packinglist}</p>
            </div>
        </center>
    );
}

export default TripSummaryComponent;