import React from 'react';

class ButtonArea extends React.Component {
    render(){
        return(
            <div className="btn_area">
                {this.props.children}
            </div>
        )
    }
}
export default ButtonArea;
