import {
    SEARCH_TASK,
    GET_TITLE,
    GET_DESCRIPTION,
    GET_TASK,
} from '../types';

export default(state,action) => {
    switch(action.type){
        case GET_TITLE:
            return {
                ...state,
                title: action.payload,
            };
        case GET_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            }
        case GET_TASK:
            return {
                ...state,
                tasks: action.payload,
            }
        default:
            return state;
    }
};