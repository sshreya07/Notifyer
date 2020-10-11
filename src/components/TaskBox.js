import React, {useState,useContext}from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  Input,
  InputLabel,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NotifyerContext from "./context/notifyerContext";


const TaskBox = () => {
  const notifyerContext = useContext(NotifyerContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  notifyerContext.getTask();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }


  const taskAdded = (e)=>{
    console.log("ok");
    console.log(title);
    console.log(description);
    notifyerContext.getTitle(title);
    notifyerContext.getDescription(description);
    setTitle("");
    setDescription("");

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
            <InputLabel focused required style={{color:"#3d3d3d"}}>
              title
            </InputLabel>
            <Input fullWidth value={title}
          onChange={onChangeTitle}></Input>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardContent className="inputBoxes">
            <InputLabel focused style={{color:"#3d3d3d"}}>Description</InputLabel>
            <Input fullWidth multiline value={description}
          onChange={onChangeDescription}></Input>
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
