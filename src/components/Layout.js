import React from 'react';

import { Header, Container } from 'src/components';

class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount(){
        console.log(this.header)
        this.setState({
            containerStyle : {
                 minHeight : (window.innerHeight)
            }
        });
    }
    render(){
        const {Content,Button} = this.props
        return(
            <div className="page">
                <div className="wrap">
                    <Header ref={ref=>this.header = ref}/>
                    <Container
                    ref={ ref => this.Conatiner = ref }
                    style={ this.state.containerStyle }>
                        { Content }
                    </Container>
                    { Button }
                </div>
            </div>
        )
    }
}

export default Layout
