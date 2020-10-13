import React, { Fragment, useContext } from "react";
import { Card, CardContent, Button, ButtonGroup } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import NotifyerContext from "./context/notifyerContext";

const TaskItem = () => {
  const notifyerContext = useContext(NotifyerContext);

  const { tasks } = notifyerContext;

    return (
      <Fragment>
        {tasks.map((task) => (
          <Card id="cardList" variant="outlined">
          <CardContent id="cardTitle">
            <h3 style={{ fontWeight: "bold", color: "rgb(100, 7, 221)" }}>{task}</h3>
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

export default TaskItem;
