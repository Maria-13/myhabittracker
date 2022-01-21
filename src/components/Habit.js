import React, { useState } from 'react';
import HabitForm from './HabitForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


const Habit = ({ habits, completeHabit, removeHabit, updateHabit }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateHabit(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <HabitForm edit={edit} onSubmit={submitUpdate} />;
  }

  return habits.map((habit, index) => (

    <div className={habit.isComplete ? 'habits li complete' : 'habits li'}
    key={index}
    >
    <div key={habit.id} onClick={() => completeHabit(habit.id)}>
        {habit.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeHabit(habit.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: habit.id, value: habit.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};    

export default Habit; 