import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import TaskBox from "./components/layout/TaskBox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskBox />
    </div>
  );
}

export default App;
