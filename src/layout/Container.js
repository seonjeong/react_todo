import React from 'react';

class Container extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className="container">
            <div className="container_wrap">
                <div className="contents_wrap">
                    <div className="contents">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Container;;
