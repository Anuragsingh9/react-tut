import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Expense from './components/Expense';
import NewExpense from './components/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 3, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  function App() {
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
    const [savedMonthlyExp,setSavedMonthlyExp] = useState(0);
    const [maxExpense, setMaxExpesne] = useState(500);
    const maxExp = maxExpense;

    const [deleteIdd,setDeleteIdd] = useState(null);

    const crossBtnClickHandler = (delIdd) => {
      setDeleteIdd(delIdd);
        let index = expenses.findIndex(x => x.id == delIdd)
          expenses.splice(index, 1);
    }
  const addExpenseHandler = (expense) => {
    if(expense.amount <= maxExp){
      console.log('min');
        setSavedMonthlyExp(maxExp - expense.amount)
        if(expense.amount < maxExp){
          console.log('less');
          setMaxExpesne(maxExp + (maxExp - expense.amount));
        }else{
          console.log('equal');
          console.log(maxExp);
          setMaxExpesne(500);
        }
    }else{
      console.log('max');
      setSavedMonthlyExp(maxExp - expense.amount)
      setMaxExpesne(maxExp - expense.amount);
    }
    setExpenses((preExpenses) => {
      return [expense,...preExpenses];
    })
    
  }
  
  return (
    <div>
      {/* <h2>Hello World!!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} maxAmountValue={maxExpense}></NewExpense>
      <Expense item={expenses} monthlySaved={savedMonthlyExp} crossBtnClicked={crossBtnClickHandler}></Expense>
    </div>
  );  
}

export default App;
