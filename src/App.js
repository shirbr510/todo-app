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
    render() {
        return (
            <div>
                <TodoCreator/>
                <TodoList todos={todos}/>
            </div>
        );
    }
}