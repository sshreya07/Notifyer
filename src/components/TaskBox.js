import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Input,
  InputLabel,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const TaskBox = () => {
  return (
    <div className="cardDiv ">
      <Card className="card" variant="outlined">
        <CardContent>
          <CardHeader title="Add New Task" id="cardHeader" />
        </CardContent>
        <CardActionArea>
          <CardContent className="inputBoxes">
            <InputLabel focused required>
              title
            </InputLabel>
            <Input fullWidth required></Input>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardContent className="inputBoxes">
            <InputLabel focused>Description</InputLabel>
            <Input fullWidth multiline></Input>
          </CardContent>
        </CardActionArea>
        <ButtonGroup className="submitButton">
          <Button color="primary" className="Mui-focusVisible">
            <AddIcon></AddIcon>&ensp; ADD TASK
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default TaskBox;
