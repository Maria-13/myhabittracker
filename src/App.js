import React from 'react';
import Header from './components/Header';
import AddHabit from './components/AddHabit';
import HabitList from './components/HabitList';
import { nanoid } from "nanoid";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: habit => !habit.completed,
  Completed: habit => habit.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [habits, setHabits] = useState(props.habits);
  const [filter, setFilter] = useState('All');


  function toggleHabitCompleted(id) {
    const updatedHabits = habits.map(habits => {
      // if this habit has the same ID as the edited habit
      if (id === habit.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...habit, completed: !habit.completed}
      }
      return habit;
    });
    setHabits(updatedHabits);
  }

  function deleteHabit(id) {
    const remainingHabits = habits.filter(habit => id !== habit.id);
    setHabits(remainingHabits);
  }


  function editHabit(id, newName) {
    const editedHabitList = habit.map(habit => {
    // if this habit has the same ID as the edited task
      if (id === habit.id) {
        //
        return {...habit, name: newName}
      }
      return habit;
    });
    setHabits(editedHabitList);
  }

  const HabitList = habits
  .filter(FILTER_MAP[filter])
  .map(habit => (
    <AddHabit
      id={habit.id}
      name={habit.name}
      completed={habit.completed}
      key={habit.id}
      toggleHabitCompleted={toggleHabitCompleted}
      deleteHabit={deleteHabit}
      editHabit={editHabit}
    />
  ));

  function addHabit(name) {
    const newHabit = { id: "habit-" + nanoid(), name: name, completed: false };
    setHabit([...habits, newHabit]);
  }

  }

export default App;