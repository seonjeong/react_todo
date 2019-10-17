import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title || 'To Read List',
            height: 0
        }
    }
    componentDidMount(){
        this.setState({
            height: this.header.clientHeight
        })
    }
    render(){
        return (
            <header className="header" ref={ref=> this.header = ref}>
    			<button type="button" className="btn_header_back"><span className="hidden">뒤로</span></button>
    			<h1 className="page_title">{this.state.title}</h1>
    		</header>
        )
    }
}

export default Header;
