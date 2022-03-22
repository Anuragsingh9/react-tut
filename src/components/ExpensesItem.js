import './css/ExpenseItem.css'
import ExpensesDate from './ExpensesDate'

function ExpenseItem(props){
    // console.log('keyyyy ' + props.uniqueId);
    const crossButtonHandler = () => {
        console.log('keyyyy ' + props.uniqueId);
        props.onClickCross(props.uniqueId);
    }

    return (
        <li>

    <div className="expense-item">
        <ExpensesDate date={props.date}></ExpensesDate>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    <span className='cross-btn' onClick={crossButtonHandler}>✕</span>
    </div>
    </li>

    );
}
export default ExpenseItem;