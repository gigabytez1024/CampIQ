import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import "./style.css";
import {db, auth} from "../firebase"
import userEvent from "@testing-library/user-event";
import { firestore } from "firebase-admin";
import { setGridRowCountActionCreator } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PackListComponent = () => {



  function notify() {
    toast("🏕️ New packing list saved!", {
      position: toast.POSITION.BOTTOM_CENTER,
      className: 'toast-success',
      progressClassName: 'success-progress-bar',
      autoClose: 4000, 
      toastId:1
    })
  }
 
  
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);


  const firstEvent = (event) => {
    setItem(event.target.value);
  };

  const addEvent = () => {
    setNewItem((prev) => {
      return [...prev, item];
    });

    setItem("");
  };

  const deleteEvent = () => {
    setNewItem([]);
  };

  const saveEvent = () => {
    notify();
    const userId = auth.currentUser.uid;
    
db.collection( `users`).doc(`${userId}`).set({packlist: newItem}, {merge: false})
setNewItem([]);
  }

  return (
    <div>
      <br />
      <br />
      <div className="childOne">
        <input type="text" value={item} placeholder="Add an item" onChange={firstEvent} />
        <Button className="AddBtn" onClick={addEvent}>
          <AddIcon />
        </Button>
        <br />
        <br />
        <ul className="textFont">
          {newItem.map((val) => {
            return <li> {val} </li>;
          })}
        </ul>
      </div>
      <br />
      <br />
      <div className="childTwo">
        <Button className="delBtn" onClick={deleteEvent}>
          <DeleteIcon />
          Delete All
        </Button>
      </div>
      <div className="childTwo">
        <Button className="saveBtn" onClick={saveEvent}>
          <UpdateIcon />
          Save
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PackListComponent;
