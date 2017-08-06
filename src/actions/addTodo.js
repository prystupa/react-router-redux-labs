import {ADD_TODO} from '.';

let nextId = 0;

export default text => ({
    type: ADD_TODO,
    id: nextId++,
    text
})
