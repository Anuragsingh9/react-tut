import ExpensesItem from "./ExpensesItem";
const ExpenseList = (props) => {
  const crossBtnHandler = (uniqueId) =>{
    console.log('unnn ' + uniqueId); 
    props.onClickCrossBtn(uniqueId);
  }
    if(props.item.length === 0){
            return <div className="no-data"><p>No expenses found.</p></div>
    }
    return (
      <ul>
    {props.item.map((expenses) => (
        <ExpensesItem 
        key ={expenses.id}
        title = {expenses.title}
        amount={expenses.amount}
        date={expenses.date}
        uniqueId={expenses.id}
        onClickCross={crossBtnHandler}
        />
      ))}
      </ul>
    )
}

export default ExpenseList;