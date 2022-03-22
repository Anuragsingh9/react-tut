import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpensesItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const [searchedKey, setSearchTitle] = useState('');
  const [filterComp, setFilteredComp] = useState('less');
  const [savedExpenses,setSavedExpenses] = useState(0);
  
  const crossBtnHandler = (uniId) => {
    props.crossBtnClicked(uniId);
    }
  
  const keyChangeHandler = searchKey => {
    setSearchTitle(searchKey);
  };

  
  const filterChangeHandler = selectedValue => {
    const comparison = ['less','greater'];
    if(comparison.includes(selectedValue)){
      console.log(selectedValue + 'string');
      setFilteredComp(selectedValue)
    }else{
      console.log(selectedValue + 'number');
      setFilteredYear(selectedValue);
    }
  };
  const savedExp = (props) =>{
    console.log('ll ' + (filteredYear - 1))
  let saved = 0;
    props.item.filter(expense => {
        if(expense.date.getFullYear().toString() == (filteredYear - 1)){
          saved += expense.amount;
        }
    });
    console.log('save ' + saved);
    return saved;
  } 

  
  
  
  const filteredExpenses = props.item.filter(expense => {
    const getFilterExpenses = () => {
      const exp =  (expense.title.includes(searchedKey) && expense.date.getFullYear().toString() === filteredYear 
      && (filterComp == 'less' ? expense.amount <= 100 : expense.amount >= 100 && expense.date.getFullYear().toString() === filteredYear))
      return exp;
    }
    
    
    const comparison = ['less','greater'];
    if(searchedKey.trim().length > 0){
      return getFilterExpenses();
    }else if(comparison.includes(filterComp)){
       if(filterComp === 'less'){
        return getFilterExpenses();
       }
       return getFilterExpenses();
    }
    else{
    return getFilterExpenses();
  };
  });

  let expensesContent = <div className="no-data"><p>No expenses found.</p></div>
  if (filteredExpenses.length > 0) {
    // if(deleteId){
    //   console.log('delllll ' + deleteId)
    //   let index = filteredExpenses.findIndex(x => x.id === deleteId)
    //   filteredExpenses.splice(index, 1);
      
    // }
    // setDeleteId('');
    console.log('cccccc ' + filteredExpenses);
    expensesContent = filteredExpenses.map((expenses) => (
      <ExpenseItem 
      key ={expenses.id}
      title = {expenses.title}
      amount={expenses.amount}
      date={expenses.date}
      />
    ))
  }
  
    return <div>
      <ExpenseFilter selected={filteredYear}  selectedComp={filterComp} monthlysaved={props.monthlySaved} lastExpense={savedExp(props)} onKeyChange={keyChangeHandler} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList item={filteredExpenses} onClickCrossBtn={crossBtnHandler}/>

      {/* /* Other ways of loading components conditionaly are below one */ }

      {/* {filteredExpenses.length === 0 && <p>No Expense data was found.</p>}

      {filteredExpenses.length > 0 && (expensesContent = filteredExpenses.map((expenses) => (
      <ExpenseItem 
      key ={expenses.id}
      title = {expenses.title}
      amount={expenses.amount}
      date={expenses.date}
      />
    )))} */}




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