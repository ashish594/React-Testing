import CommentReducer from 'reducers/comments';
import {SAVE_COMMENT} from "../../actions/actionTypes";

it('handles action SAVE_COMMENT', () => {

    const action = {
        type: SAVE_COMMENT,
        payload: 'NEW COMMENT'
    };

    const newState = CommentReducer([], action);

    expect(newState).toEqual(['NEW COMMENT']);

});

