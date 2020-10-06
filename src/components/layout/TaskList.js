import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Input,
  InputLabel,
  Button,
  ButtonGroup,
} from "@material-ui/core";

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
        <Card id="cardList" variant="outlined">
          <CardContent>
            <h3 style={{ fontWeight: "normal" }}>post one</h3>
            <h5 style={{ fontWeight: "normal" }}>this is post one</h5>
            <ButtonGroup className="submitButton" id="listButtons">
              <Button
                color="secondary"
                className="Mui-focusVisible"
                size="small"
              >
                Delete
              </Button>
              <Button color="primary" className="Mui-focusVisible" size="small">
                Update
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
};

export default TaskList;
