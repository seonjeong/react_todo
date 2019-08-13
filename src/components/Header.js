import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            title: this.props.title || 'To Read List'
        }
    }
    render(){
        return (
            <header className="header">
    			<button type="button" className="btn_header_back"><span className="hidden">뒤로</span></button>
    			<h1 className="page_title">{this.state.title}</h1>
    			<button type="button" className="btn_header_search"><span className="hidden">검색</span></button>
    		</header>
        )
    }
}

export default Header;
