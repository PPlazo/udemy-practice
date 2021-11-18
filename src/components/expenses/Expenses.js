import React, {useState} from 'react';
import ExpenseItem from './ExpensesItem';
import Card from './Card';
import ExpensesFilter from '../expenses-filter/ExpensesFilter';
import '../../styles/App.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {props.items.map((expense) => <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}/>
                )}
            </Card>
        </div>
    );
};

export default Expenses;