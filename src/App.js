import React,{Component} from 'react';
import TodoCreator from './Todos/TodoCreator'
import TodoList from './Todos/TodoList'

var todos=[
    {
        text: "hello",
        timestamp: "novmeber first"
    },
    {
        text: "hello",
        timestamp: "novmeber first"
    }
];
todos=_.map(todos,(todo,i)=>{
    todo.id=i;
    return todo;
});

export default class App extends Component {

    constructor(props){
        super(props);
        this.onTodosChange=this.onTodosChange.bind(this);
        this.onTodoAdded=this.onTodoAdded.bind(this);
        this.state={
            todos:todos
        };
    }

    onTodoAdded(todoText){
        debugger;
        var todo={
            text:todoText,
            timestamp:Date.now()
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