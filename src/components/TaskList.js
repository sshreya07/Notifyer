import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Input,
  InputLabel,
} from "@material-ui/core";
import TaskItem from "./TaskItem";
import notifyerContext from "./context/notifyerContext";

const TaskList = () => {
  const [text , setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);
    notifyerContext.searchTask(text);
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
        </CardContent>
        <TaskItem />
      </Card>
    </div>
  );
};

export default TaskList;
