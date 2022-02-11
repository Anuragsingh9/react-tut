import React, { useState } from "react";
import ExpenseItem from "./ExpensesItem";
import ExpenseFilter from "./ExpenseFilter";
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
    return <div>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.map((expenses) => (
        <ExpenseItem 
        key ={expenses.id}
        title = {expenses.title}
        amount={expenses.amount}
        date={expenses.date}
        />
      ))}
      
      {/* <ExpenseItem
      title={props.item[0].title}
      amount={props.item[0].amount}
      date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.item[1].title}
      amount={props.item[1].amount}
      date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.item[2].title}
      amount={props.item[2].amount}
      date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.item[3].title}
      amount={props.item[3].amount}
      date={props.item[3].date}
      ></ExpenseItem> */}
    </div>
};

export default Expense;