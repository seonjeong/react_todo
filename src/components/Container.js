import React from 'react';

class Container extends React.Component {
    constructor(props){
        super(props);
        this.setSize = this.setSize.bind(this);
        this.setSize();
    }
    setSize(){
        // console.log(this.container);
    }
    render(){
        return (
        <div className="container" ref={ref => { this.container = ref } }>
            {this.props.children}
        </div>
        )
    }
}

export default Container;;
