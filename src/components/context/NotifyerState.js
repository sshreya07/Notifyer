import React, { useReducer } from "react";
import axios from "axios";
import NotifyerContext from "./notifyerContext";
import NotifyerReducer from "./notifyreReducer";

import {
    SEARCH_TASK,
    GET_TITLE,
    GET_DESCRIPTION,
    GET_TASK,
} from '../types';

const NotifyerState = (props) => {
    const initialState = {
        title:"",
        description:"",
        tasks: [],
    };

    const [state, dispatch] = useReducer(NotifyerReducer, initialState);

    const getTask = async () => {
        const res = await axios.get('tasks.json');

        dispatch({
            type: GET_TASK,
            payload: res.data.items,
        })
    }
  
    const getTitle = (text) => {
        dispatch({ 
            type: GET_TITLE, 
            payload: {text},
        });
    }

    const getDescription = (text) => {
        dispatch({ 
            type: GET_DESCRIPTION, 
            payload: {text},
        });
    }

    return (
        <NotifyerContext.Provider
            value={{
                title: state.title,
                description: state.description,
                getTitle,
                getDescription,
                getTask,
            }}
        >
        {props.children}
        </NotifyerContext.Provider>
    );
};

export default NotifyerState;