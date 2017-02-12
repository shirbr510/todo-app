import React,{Component} from 'react';
import _ from 'lodash';
import Todo from './Todo';

export default class App extends Component {

    constructor(props){
        super(props);
        this.renderItem=this.renderItem.bind(this);
    }

    renderItem(todo,i){
        return <Todo key={i} {...todo}/>
    }

    render() {
        return (
            <div>
                {_.map(this.props.todos,this.renderItem)}
            </div>
        );
    }
}