import React,{Component} from 'react';

 class TodoCreator extends Component {

     constructor(props){
         super(props);
         this.onInput=this.onInput.bind(this);
         this.state={value:props.defaultText};
     }

     onInput(event){
         this.setState({value:event.target.value});
     }

    render() {
        return (
            <div>
                <button>Add</button>
                <input type="text" value={this.state.value} onChange={this.onInput}/>
            </div>
        );
    }
}

TodoCreator.defaultProps={
    defaultText:''
};

TodoCreator.propTypes={
    defaultText:React.PropTypes.string
};

export default TodoCreator