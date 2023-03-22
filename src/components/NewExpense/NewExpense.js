import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString(),
        }
        props.onAddExpenseData(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => setIsEditing(true);

    const stopEditingHandler = () => setIsEditing(false);

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>);
}

export default NewExpense;