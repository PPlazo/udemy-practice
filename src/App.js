import React, {useState} from 'react';
import './styles/App.css'
import NewExpense from "./components/new-expenses/NewExpense";
import Expenses from "./components/expenses/Expenses";

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)
        },
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

    const [expensesList, setExpenses] = useState(expenses)

    const addExpenseHandler = expense => {
        console.log('In App.js');
        setExpenses(expensesList.concat([expense]));
    };

    return (
        <div className="App">
            <h2>Let's get started</h2>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expensesList}/>
        </div>
    );
}

export default App;
