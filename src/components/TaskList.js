import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Input,
  InputLabel,
} from "@material-ui/core";
import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <div id="tasklist" className="cardDiv">
      <Card className="card">
        <CardContent>
          <InputLabel>filter task</InputLabel>
          <Input focused fullWidth></Input>
        </CardContent>
        <CardContent>
          <CardHeader title="Task List"></CardHeader>
        </CardContent>
        <TaskItem />
      </Card>
    </div>
  );
};

export default TaskList;
