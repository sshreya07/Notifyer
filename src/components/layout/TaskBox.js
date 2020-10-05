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

const TaskBox = () => {
  return (
    <div className="cardDiv ">
      <Card className="card" variant="outlined">
        <CardHeader title="Add New Task" id="cardHeader" />
        <CardActionArea>
          <CardContent className="inputBoxes">
            <InputLabel focused onAnimationStart required>
              title
            </InputLabel>
            <Input fullWidth required></Input>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardContent className="inputBoxes">
            <InputLabel focused onAnimationStart>
              Description
            </InputLabel>
            <Input fullWidth multiline></Input>
          </CardContent>
        </CardActionArea>
        <ButtonGroup id="submitButton">
          <Button color="primary" className="Mui-focusVisible">
            ADD TASK
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default TaskBox;
