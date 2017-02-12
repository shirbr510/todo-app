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
        this.state={
            todos:todos
        };
    }

    onTodosChange(todos){
        this.setState({todos:todos})
    }

    render() {
        return (
            <div>
                <TodoCreator/>
                <TodoList todos={this.state.todos} onTodosChanged={this.onTodosChange}/>
            </div>
        );
    }
}