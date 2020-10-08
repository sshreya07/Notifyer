import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskBox from "./components/TaskBox";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskBox />
      <TaskList />
    </div>
  );
}

export default App;
