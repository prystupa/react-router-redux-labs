import React from 'react';
import {connect} from 'react-redux';
import addTodo from '../actions/addTodo';

const AddTodo = ({dispatch}) => {

    let input;

    function onSubmit(e) {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(addTodo(input.value.trim()));
        input.value = '';
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={ref => input = ref}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
