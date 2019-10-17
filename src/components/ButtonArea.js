import React from 'react';

class ButtonArea extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={`btn_area ${this.props.bottom}`}>
                {this.props.children}
            </div>
        )
    }
}
export default ButtonArea;
