
import React from "react";
import ExpenseItem  from "../expenseItem/ExpenceItem";
import "./Expenses.css"

const Expenses = ({expenses}) => {
  return (
    <div className="main-container">
    <ul className="ul_ka">
      {expenses.map((elem) => {
        return (
          <ExpenseItem key={elem.title} title={elem.title} date={elem.date} price={elem.price}  />
        );
      })}
    </ul>
    </div>
  );
};

export default Expenses;