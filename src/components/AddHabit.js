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
    <div className="habit-container">

    <form className="add-habit">
      <input
        className="habit"
        type="text" 
        name="habit"
        placeholder="Enter Habit Name"
        required/>
         <input
          type="number"
          name="reps"
          placeholder="# of Repetitions"
          min="1"
          required
        />
        <div class="frequency">
          <label for="timeframe">Frequency: </label>
          <select name="timeframe" id="timeframe">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <input type="submit" value="+ Add Habit" />
      </form>
      </div>
  );
}

export default AddHabit;