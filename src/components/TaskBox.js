import React, {useState,useContext}from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  TextField
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NotifyerContext from "./context/notifyerContext";


const TaskBox = () => {
  const notifyerContext = useContext(NotifyerContext);

  const [title, setTitle] = useState("");

  // const {tasks} = notifyerContext;

  // notifyerContext.getTask();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const taskAdded = (e)=>{
    console.log("ok");
    console.log(title);
    notifyerContext.getTitle(title);
    setTitle("");
    // notifyerContext.storeInLocalStorage(title);
    // console.log(tasks);
    e.preventDefault();
  }

  return (
    <div className="cardDiv ">
      <Card className="card" >
        <CardContent>
          <h2 id="cardHeader">Add New Task</h2>
        </CardContent>
        <CardActionArea>
          <CardContent className="inputBoxes">
          <TextField required id="standard-required" label="task" variant="outlined" onChange={onChangeTitle}/>
          </CardContent>
        </CardActionArea>
        <ButtonGroup className="submitButton" onClick={taskAdded}>
          <Button className="Mui-focusVisible" id="addtask">
            <AddIcon></AddIcon>&ensp; ADD TASK
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};


export default TaskBox;
