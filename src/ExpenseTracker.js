import React, { useState } from 'react'
import './ExpenseTracker.css'

const Expensetracker = () => {
    const[input,setInput]=useState('')
    const[amount,setAmount]=useState('')
    const [expenses,setExpenses]=useState([])
    const addExpense = ()=>{
        if(!input || !amount) return;

        const newExpense = {
          id: expenses.length+1,
          title:input,
          amount:amount
        };
        setExpenses([...expenses,newExpense])
        setInput('')
        setAmount('')
    }

    const deleteExpense=(id)=>{
      setExpenses(expenses.filter((expenses)=>expenses.id!==id))
    }
  return (
    <div className='container'>
      <h2>Expense Tracker</h2> 
      <div className='exptr'>
      <input type="text"  placeholder='Item' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <input type="number"  placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <button className='but1' onClick={addExpense}>Add Expense</button>
      </div>
      <ul className='expense-list'></ul>
      {
        expenses.map((expense)=>(
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
            <button onClick={()=>deleteExpense(expense.id)}>Delete</button>
          </li>
        ))
      }
    </div>
  )
}

export default Expensetracker
