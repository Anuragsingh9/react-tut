import React, { useState } from 'react';

import './css/ExpenseFilter.css';

const ExpensesFilter = (props) => {
  // console.log('bbbtt' + props.monthlysaved)
  const limit = 6000;
  console.log('jjjjj-> ' + props.lastExpense);
  let savedExpenses = limit - props.lastExpense;
  if(savedExpenses < 0){
    savedExpenses = 0;
  }
  const [compFilter,setCompFilter] = useState('');
  // console.log('fil' + props.selectedComp);
  const [searchKey, setSearchKey] = useState('');
  console.log(props.lastExpense);
  const dropdownChangeHandler = (event) =>{
    props.onChangeFilter(event.target.value);
    setCompFilter(event.target.value);
  };

  const searchKeyChangeHandler = (event) => {
    setSearchKey(event.target.value);
    props.onKeyChange(event.target.value);
  }
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
        <label>Search:</label>
        <input className='search-box' type="text" placeholder='Search' value={searchKey} onChange={searchKeyChangeHandler} />
        <label>Amount</label>
        <select value={compFilter} onChange={dropdownChangeHandler}>
          <option value="less">Less Then 100</option>
          <option value="greater">Greater Then 100</option>
        </select>
        <label style={{paddingLeft:15}}>Yearly Saved Expenses:</label>
        <span className='saved-expenses'>{savedExpenses.toFixed(2)}</span>
        <label style={{paddingLeft:15}}>Monthly Saved Expenses:</label>
        <span className='saved-expenses'>{props.monthlysaved}</span>
      </div>
      {/* <div className='no-data'></div> */}
    </div>
  );
};

export default ExpensesFilter;