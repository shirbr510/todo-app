import React,{Component} from 'react';
import _ from 'lodash';
import Todo from './Todo';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.renderItem=this.renderItem.bind(this);
        this.onRemove=this.onRemove.bind(this);
    }

    onRemove(todoId){

        var todos=_.filter(this.props.todos,todo=>todo.id!=todoId);
        this.props.onTodosChanged(todos);
    }

    renderItem(todo,i){
        return <Todo key={i} {...todo} onRemoveClick={this.onRemove}/>
    }

    render() {
        return (
            <div>
                {_.map(this.props.todos,this.renderItem)}
            </div>
        );
    }
}

TodoList.defaultProps={
    todos:[],
    onTodosChanged:()=>{}
};

TodoList.propTypes={
    todos:React.PropTypes.array,
    onTodosChanged:React.PropTypes.func
};

export default TodoList