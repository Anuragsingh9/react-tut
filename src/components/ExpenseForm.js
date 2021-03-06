import React, { useState } from "react";
import './css/ExpenseForm.css';
const ExpenseForm = (props) => {
    console.log('ass');
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");
    const titleChangeHadler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        const expanseData = {
            title:enteredTitle,
            amount:+enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log(expanseData)
        props.onSaveExpenseData(expanseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHadler} required/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" max={props.maxAmountVal} required step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" step="2022-12031" required onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;