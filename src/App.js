import "./App.css";
import React, {useState} from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpense";

  let DUMMY_EXPENSE = [
    {
      id: 'e1',
      title: 'School Fees',
      amount: 250,
      date: new Date(2021 , 4 ,10)
    },
    {
      id: 'e2',
      title: 'Food Fees',
      amount: 100,
      date: new Date(2021 , 11 ,10)
    },
    {
      id: 'e3',
      title: 'Tution Fees',
      amount: 800,
      date: new Date(2021 , 15 ,1)
    },
    {
      id: 'e4',
      title: 'Travel Fees',
      amount: 250,
      date: new Date(2021 , 4 ,10)
    }
  ];

  const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

const addExpenseHandler = (expense) => {
  const updatedExpense = [expense, ...expenses];
  setExpenses(updatedExpense)
};

  return (
    <div >
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
      
    </div>
  );
}

export default App;
