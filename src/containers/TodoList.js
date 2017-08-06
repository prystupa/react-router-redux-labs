import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import toggleTodo from '../actions/tooggleTodo';

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => dispatch(toggleTodo(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);