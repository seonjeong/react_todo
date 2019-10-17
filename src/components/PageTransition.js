import React from 'react';
import { CSSTransition } from 'react-transition-group';

class PageTransition extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            duration: 1000
        }
    }
    render(){
        return(
            <CSSTransition
                in={this.props.match != null}
                timeout={this.state.duration}
                classNames="page"
                appear={true}
                unmountOnExit
            >
                {this.props.children}
            </CSSTransition>
        )
    }
}
export default PageTransition;
