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
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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
  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense,...preExpenses];
    })
    console.log('App');
    console.log(expense);
  }
  
  return (
    <div>
      {/* <h2>Hello World!!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense item={expenses}></Expense>
    </div>
  );  
}

export default App;
