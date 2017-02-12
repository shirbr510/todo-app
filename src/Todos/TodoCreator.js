import React,{Component} from 'react';

 class TodoCreator extends Component {

     constructor(props){
         super(props);
         this.onInput=this.onInput.bind(this);
         this.onAddClick=this.onAddClick.bind(this);
         this.state={value:props.defaultText};
     }

     onInput(event){
         this.setState({value:event.target.value});
     }

     onAddClick(){
         console.log(this.state.value);
         this.props.onAddClick(this.state.value);
     }

    render() {
        return (
            <div>
                <button onClick={this.onAddClick}>Add</button>
                <input type="text" value={this.state.value} onChange={this.onInput}/>
            </div>
        );
    }
}

TodoCreator.defaultProps={
    defaultText:'',
    onAddClick:()=>{}
};

TodoCreator.propTypes={
    defaultText:React.PropTypes.string,
    onAddClick:React.PropTypes.func
};

export default TodoCreator