import tv4 from 'tv4';
import jsonSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
    next(action);

    if(!tv4.validate(getState(), jsonSchema)) {
        console.warn(`Invalid JSON`);
    }
};
