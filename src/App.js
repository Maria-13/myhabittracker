import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AddHabit from './components/AddHabit';
import HabitList from './components/HabitList';


function App() {
    const [theme, setTheme] = useState("light")
    return (
      <div className="theme-container">
        <Header 
        theme={theme} setTheme={setTheme} />
      <h1>My Habit Tracker</h1>
      <AddHabit />
      <HabitList />
      </div>

    );
  }

export default App;