import React,{Component} from 'react';
import _ from 'lodash';
import TodoCreator from './TodoCreator'
import TodoList from './TodoList'

 class TodosManager extends Component {

    constructor(props){
        super(props);
        this.onTodosChange=this.onTodosChange.bind(this);
        this.onTodoAdded=this.onTodoAdded.bind(this);
        this.state={
            todos:[]
        };
    }

    onTodoAdded(todoText){
        var todo={
            text:todoText,
            timestamp:new Date()
        };
        var todos=this.state.todos;
        todos.push(todo);
        todos=this.mixinIds(todos);
        this.setState({todos:todos});
    }

    mixinIds(array){
        return _.map(array,(item,i)=>{
            item.id=i;
            return item;
        });
    }


    onTodosChange(todos){
        this.setState({todos:todos})
    }

    render() {
        return (
            <div>
                <TodoCreator onAddClick={this.onTodoAdded}/>
                <TodoList todos={this.state.todos} onTodosChanged={this.onTodosChange}/>
            </div>
        );
    }
}
export default TodosManager;