import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import "./style.css";
import {db} from "../firebase"
import { UserImportBuilder } from "firebase-admin/lib/auth/user-import-builder";

const PackListComponent = () => {
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
db.collection('users').doc('packlist').set({packlist: newItem}, {merge: true})

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
      </div>
    </div>
  );
};

export default PackListComponent;
