import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import TaskBox from "./components/layout/TaskBox";
import TaskList from "./components/layout/TaskList";

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
