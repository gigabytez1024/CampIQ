import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import "./style.css";
import theme from "../theme";
import {db, auth} from "../firebase"
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
    <MuiThemeProvider theme={theme}>
      <Card>
        <CardHeader title="Packing List" style={{ textAlign: "center", paddingBottom: 0 }} />
        <CardContent>
          <div className="childOne">
            <input style={{ marginLeft: "4vw" }} type="text" value={item} placeholder="Add an item" onChange={firstEvent} />
            <Button color="primary" className="AddBtn" onClick={addEvent}>
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
          <div style={{ textAlign: "center" }}>
            <span style={{ paddingRight: "2vh" }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={deleteEvent}
              >  
                <DeleteIcon />
                Delete All
              </Button>
            </span>
            <span>
              <Button
                variant="contained"
                color="secondary"
                onClick={saveEvent}
              >
                <UpdateIcon />
                Save
              </Button>
            </span>
            <ToastContainer />
          </div>
        </CardContent>
    </Card>
    </MuiThemeProvider>
  );
};

export default PackListComponent;