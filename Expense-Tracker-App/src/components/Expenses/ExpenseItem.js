import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //this function gets exec only once
  //during the jsx evaluation
  //full access to native dom elements

  const [title, setTitle] = useState(props.title); //is a react hook

  // let title = props.title; won't work

  // const clickHandler = () =>{
  //   setTitle('updated');
  //   //title is a special var for rreact and setTitle
  //   //is the state changer for it
  //   // console.log(title); //shows older value since
  //   //the set Titiel is scheduled but not done yet
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}
export default ExpenseItem;
