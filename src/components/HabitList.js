import React, { useState } from 'react';
import HabitForm from './HabitForm';
import Habit from './Habit';

function HabitList() {
  const [habits, setHabits] = useState([]);

  const addHabit = habit => {
    if (!habit.text || /^\s*$/.test(habit.text)) {
      return;
    }

    const newHabits = [habit, ...habits];

    setHabits(newHabits);
    console.log(...habits);
  };
    
  const updateHabit = (habitId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setHabits(prev => prev.map(item => (item.id === habitId ? newValue : item)));
  };

  const removeHabit = id => {
    const removedArr = [...habits].filter(habit => habit.id !== id);

    setHabits(removedArr);
  };

  const completeHabit = id => {
    let updatedHabits = habits.map(habit => {
      if (habit.id === id) {
        habit.isComplete = !habit.isComplete;
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  return (
    <>
      <h1>My Habit Tracker</h1>
      <HabitForm onSubmit={addHabit} />
      <Habit
        habits={habits}
        completeHabit={completeHabit}
        removeHabit={removeHabit}
        updateHabit={updateHabit}
      />
    </>
  );
}

export default HabitList;