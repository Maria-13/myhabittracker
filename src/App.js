import React, { useState } from 'react';
import Header from './components/Header';
import AddHabit from './components/AddHabit';
import HabitList from './components/HabitList';
import { nanoid } from "nanoid";



function App(props) {
  const [habits, setHabits] = useState(props.habits);


  const habitList = habits
  .map(habit => (
    <HabitList
      id={habit.id}
      name={habit.name}
      completed={habit.completed}
      key={habit.id}
    />
  ));

  function addHabit(name) {
    const newHabit = { id: "habit-" + nanoid(), name: name, completed: false };
    setHabits([...habits, newHabit]);
  }

    return (
      <div className="theme-container">
        <Header />
      <h1>My Habit Tracker</h1>
      <AddHabit
       addHabit={addHabit}/>
      <div className="add-habit input">
      <ul>
        {habitList}
        </ul>
      </div>
    </div>

    );
  }

export default App;