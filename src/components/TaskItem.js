import React, { Component, Fragment } from "react";
import { Card, CardContent, Button, ButtonGroup } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

export class TaskItem extends Component {
  state = {
    tasks: [
      {
        title: "post one",
        description: "this is post one",
      },
      {
        title: "post two",
        description: "this is post two",
      },
      {
        title: "post three",
        description: "this is post three",
      },
    ],
  };

  render() {
    const { tasks } = this.state;
    return (
      <Fragment>
        {tasks.map((task) => (
          <Card id="cardList" variant="outlined">
            <CardContent id="cardTitle">
              <h3 style={{ fontWeight: "normal" }}>{task.title}</h3>
              <h5 style={{ fontWeight: "normal" }}>{task.description}</h5>
              <span id="cardButton">
                <ButtonGroup className="submitButton" id="listButtons">
                  <Button
                    color="primary"
                    className="Mui-focusVisible"
                    size="small"
                  >
                    <EditIcon />
                  </Button>
                  &ensp;
                  <Button
                    color="secondary"
                    className="Mui-focusVisible"
                    size="small"
                  >
                    <DeleteForeverIcon />
                  </Button>
                </ButtonGroup>
              </span>
            </CardContent>
          </Card>
        ))}
      </Fragment>
    );
  }
}

export default TaskItem;
