import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // using only one state 
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // if your state is depends on the previous state you could also use below approch however you always use call back function approch
        // setUserInput({ ...userInput, enteredTitle: event.target.value })
        // if your state is depends on previous state then you should always use callback function approch not above line approch
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, enteredTitle: event.target.value,
        //     }
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({ ...userInput, enteredDate: event.target.value })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" min="1" max="12" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min="2019-01-01" max="31-12-2022" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add</button>
            </div>
        </form>);
}

export default ExpenseForm;