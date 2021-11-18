import ExpenseDate from "./ExpenseDate";
import '../../styles/App.css'

function ExpenseItem(props) {
    const title = props.title;
    const amount = props.amount;
    const date = props.date;

    return (
        <div className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;