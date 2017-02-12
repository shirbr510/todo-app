import React,{Component} from 'react';
import TodoCreator from './Todos/TodoCreator'
import Todo from './Todos/Todo'

export default class App extends Component {
    render() {
        return (
            <div>
                <TodoCreator/>
                <Todo text="hello" timestamp="novmeber first"/>
            </div>
        );
    }
}