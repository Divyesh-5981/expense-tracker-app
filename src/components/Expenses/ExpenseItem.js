import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem({ title, amount, date }) {

    console.log("==========", title, amount, date);

    // const [title, setTitle] = useState(props.title);

    // clikHandler function
    // const clickHandler = () => setTitle("Updated!!!");

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
                {/* <button onClick={clickHandler}>click me</button> */}
            </div>
        </Card>
    )
}

export default ExpenseItem;