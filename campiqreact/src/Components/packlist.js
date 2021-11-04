import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import "./style.css";

const PackListComponent = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const firstEvent = (event) => {
    setItem(event.target.value);
  };

  const secondEvent = () => {
    setNewItem((prev) => {
      return [...prev, item];
    });

    setItem("");
  };

  const thirdEvent = () => {
    setNewItem([]);
  };

  return (
    <div>
      <br />
      <br />
      <div className="childOne">
        <input type="text" value={item} placeholder="Add an item" onChange={firstEvent} />
        <Button className="AddBtn" onClick={secondEvent}>
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
        <Button className="delBtn" onClick={thirdEvent}>
          <DeleteIcon />
          Delete All
        </Button>
      </div>
    </div>
  );
};

export default PackListComponent;
