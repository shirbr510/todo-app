import React,{Component} from 'react';

 class TodoCreator extends Component {

     constructor(props){
         super(props);
         this.onInput=this.onInput.bind(this);
         this.onClick=this.onClick.bind(this);
         this.state={value:props.defaultText};
     }

     onInput(event){
         this.setState({value:event.target.value});
     }

     onClick(){
         console.log(this.state.value);
         this.props.onClick(this.state.value);
     }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Add</button>
                <input type="text" value={this.state.value} onChange={this.onInput}/>
            </div>
        );
    }
}

TodoCreator.defaultProps={
    defaultText:'',
    onClick:()=>{}
};

TodoCreator.propTypes={
    defaultText:React.PropTypes.string,
    onClick:React.PropTypes.func
};

export default TodoCreator