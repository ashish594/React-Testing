import { SAVE_COMMENT, FETCH_COMMENTS } from "./actionTypes";
import axios from 'axios';

export const saveComment = payload => {
    return {
        type: SAVE_COMMENT,
        payload
    };
};

export const fetchComments = () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
};