import React, { useState, useEffect, useRef } from 'react';

function HabitForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
      return (
        <form onSubmit={handleSubmit} className='add-habit'>
        {props.edit ? (
          <>
          <input
            className='habits'
            type='text'
            placeholder='Update your habit'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='button-edit'>
            Update
            </button>
      </>
      ) : (
        <>
            <input
            placeholder='Enter Habit Name'
            value={input}
            onChange={handleChange}
            name='habit'
            className='habit'
            type='text'
            ref={inputRef}
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
          type='submit'
          value='+ Add Habit'
          onClick={handleSubmit}
          />
        </>
      )}
    </form>
  );
  }


export default HabitForm;