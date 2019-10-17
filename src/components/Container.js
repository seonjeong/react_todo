import React from 'react';

class Container extends React.Component {
    render(){
        return (
        <div className="container" style={this.props.style}>
            {this.props.children}
        </div>
        )
    }
}

export default Container;;
