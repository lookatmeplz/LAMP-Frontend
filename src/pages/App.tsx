import React from 'react';
import './App.scss';
import Calender from '../components/Calender'
import TimeLine from "../components/TimeLine";

const App = () => {
  return (
    <div className="App">
      <Calender />
      <TimeLine />
    </div>
  );
};

export default App;
