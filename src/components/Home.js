import React, { Fragment } from 'react';
import TaskBox from "./TaskBox";
import TaskList from "./TaskList";

const Home = () => {
    return (
        <Fragment>
            <TaskBox />
            <TaskList />
        </Fragment>
    )
}

export default Home
