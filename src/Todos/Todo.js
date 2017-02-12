import React,{Component} from 'react';

class TodoCreator extends Component {

    constructor(props){
        super(props);
        this.onToggle=this.onToggle.bind(this);
        this.onRemoveClick=this.onRemoveClick.bind(this);
        this.state={isChecked:props.isChecked};
    }

    onToggle(){
        var isChecked=this.state.isChecked;
        this.setState({isChecked:!isChecked});
    }

    onRemoveClick(){
        this.props.onRemoveClick(this.props.id);
    }

    render() {
        return (
            <div>
                <button onClick={this.onRemoveClick}>Remove</button>
                <span>{this.props.text}</span>
                <input type="checkbox" checked={this.state.isChecked} onChange={this.onToggle}/>
                <span>Created At: {this.props.timestamp}</span>
            </div>
        );
    }
}

TodoCreator.defaultProps={
    isChecked:false,
    onRemoveClick:()=>{}
};

TodoCreator.propTypes={
    id:React.PropTypes.any.isRequired,
    isChecked:React.PropTypes.bool,
    timestamp:React.PropTypes.string.isRequired,
    text:React.PropTypes.string.isRequired,
    onRemoveClick:React.PropTypes.func
};

export default TodoCreator