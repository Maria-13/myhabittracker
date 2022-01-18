import React, { Component } from 'react';

function App(props) {
    return (
      <div className="app stack">
        <h1>My Habit Tracker</h1>
        <div className="habit-container"></div> 
        <form>
        <div className="add-habit">
          <input className="habit" type="text" 
          name="habit" placeholder="Enter Habit Name" required />
           <input type="number" name="reps" 
        placeholder="# of Repetitions" min={1} required />
        </div>
         <div className="frequency">
        <label htmlFor="timeframe">Frequency: </label>
        <select name="timeframe" id="timeframe">
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option> 
          </select>  
        </div>
        <input type="submit" value="Add Habit" />
        </form>
        <ul className="habits">
        <li>Loading...</li>
      </ul>
    </div>
    );
  }

export default App;