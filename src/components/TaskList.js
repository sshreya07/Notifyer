import React, { useState,useEffect,useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Input,
  InputLabel,
  Button,
  ButtonGroup
} from "@material-ui/core";
import TaskItem from "./TaskItem";
import NotifyerContext from "./context/notifyerContext";

const TaskList = () => {
  const [text , setText] = useState("");

  const notifyerContext = useContext(NotifyerContext);

  const [task,setTasks] = useState([]);

  const {tasks } = notifyerContext;

  // useEffect(()=>{
  //   notifyerContext.getTask();
  //     // eslint-disable-next-line
  // }, []);

  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);
    notifyerContext.searchTask(text);
  }

  const getAllTask = (e) => {
    e.preventDefault();
    notifyerContext.getTask();
  }

  return (
    <div id="tasklist" className="cardDiv">
      <Card className="card">
        <CardContent>
          <InputLabel>filter task</InputLabel>
          <Input focused fullWidth  value={text}
          onChange={onChange}></Input>
        </CardContent>
        <CardContent>
          <h2>Task List</h2>
          <ButtonGroup className="submitButton" onClick={getAllTask} >
          <Button className="Mui-focusVisible" >
             GET TASK
          </Button>
        </ButtonGroup>
        </CardContent>
        <TaskItem tasks={tasks} />
      </Card>
    </div>
  );
};

export default TaskList;
