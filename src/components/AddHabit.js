import React, { useState } from "react";

function AddHabit(props) {
  const [habit, setHabit] = useState('');

function handleSubmit(e) {
    e.preventDefault();
    if (!habit.trim()) {
      return;
    }
    props.addHabit(habit);
    setHabit("");
  }

  function handleChange(e) {
    setHabit(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        className="habit" 
        type="text" name="habit" 
        autoComplete="off"
        value={habit}
        onChange={handleChange}/>
     <button type="submit" defaultValue="+ Add Habit">
     Add
      </button>
      </form>
  );
}

export default AddHabit;