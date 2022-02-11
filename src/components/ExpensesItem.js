import './css/ExpenseItem.css'
import ExpensesDate from './ExpensesDate'

function ExpenseItem(props){
    return (
    <div className="expense-item">
        <ExpensesDate date={props.date}></ExpensesDate>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
    );
}
export default ExpenseItem;