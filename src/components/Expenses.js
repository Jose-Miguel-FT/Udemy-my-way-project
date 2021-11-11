import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.expense.title}
        amount={props.expense.amount}
        date={props.expense.date}
      />
    </div>
  );
}

export default Expenses;
