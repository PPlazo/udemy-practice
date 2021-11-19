import React, {useState} from 'react';
import Card from './Card';
import ExpensesFilter from '../expenses-filter/ExpensesFilter';
import '../../styles/App.css';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <li>
                <Card className='expenses'>
                    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                    <ExpensesList items={filteredExpenses}/>
                </Card>
            </li>
        </div>
    );
};

export default Expenses;