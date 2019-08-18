import React from 'react';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.defaultText || 버튼
        }
    }
    render(){
        return(
            <button type="button" className="btn_normal primary_type">{this.state.text}</button>
        )
    }
}

export default Button;
