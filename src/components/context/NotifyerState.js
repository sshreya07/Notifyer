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
        // description:"",
        tasks: []
    };

    const [state, dispatch] = useReducer(NotifyerReducer, initialState);

    const getTask = async() => {
        const res = await axios.get(`https://localhost:44388/api/task`);

        dispatch({
            type: GET_TASK,
            payload: res.data.items
        })
    }

    // const storeInLocalStorage = (Title) => {
    //     let titles;
        
    //     if(localStorage.getItem('title') === null){
    //         titles = [];
    //     }else{
    //         titles = JSON.parse(localStorage.getItem('title'));
    //     }

    //     titles.push(Title);

    //     localStorage.setItem('title', JSON.stringify(titles));

        // if(localStorage.getItem('description') === null){
        //     desc = [];
        // }else{
        //     desc = JSON.parse(localStorage.getItem('description'));
        // }

        // desc.push(Desc);

        // localStorage.setItem('description', JSON.stringify(desc));

        // localStorage.clear();
        
        // console.log(titles);
        // console.log(desc);

        // dispatch({
        //     type: GET_TASK,
        //     payload: titles
        // })

    // }
  
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
                // description: state.description,
                tasks: state.tasks,
                getTitle,
                // getDescription,
                getTask,
                // storeInLocalStorage,
            }}
        >
        {props.children}
        </NotifyerContext.Provider>
    );
};

export default NotifyerState;