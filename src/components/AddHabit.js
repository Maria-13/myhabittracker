import React, { useState } from "react";


function AddHabit(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    props.addHabit(name);
    setName("");
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="habit-container">

    <form onSubmit={handleSubmit}
    className="add-habit">
      <label htmlFor="new-habit"
      className="habit"></label>
      <input
        type="text" 
        id="new-habit"
        name="text"
        placeholder="Enter Habit Name"
        required
        value={name}
        onChange={handleChange}
        />
         <input
          type="number"
          name="reps"
          placeholder="# of Repetitions"
          min="1"
          required
        />
        <div className="frequency">
          <label for="timeframe">Frequency: </label>
          <select name="timeframe" id="timeframe">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <input 
        type = "submit" 
        value="+ Add Habit" 
        className="habits button"
        id={props.id}
        onClick={handleSubmit}/>
      </form>
      </div>
  );
}

export default AddHabit; 