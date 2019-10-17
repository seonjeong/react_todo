import React from 'react';
import { Link } from 'react-router-dom';

import { PageTransition } from 'src/components';

import { Container, Header, AddButton } from '../components';

class List extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            list: []
        }
    }
    handleClick(index){
        this.props.listIndex(index);
    }
    render(){
        const handleClick = this.handleClick;
        const list = this.props.defaultList || this.state.list;
        return (
            
                <div className="wrap">
                    <div className="page_wrap list_type">
                        <Header />
                		<Container>
                            <div className="ul_list">
                                <ul>
                                    {
                                        list.map(function(currentValue,index){
                                            return  (
                                                <li key={index}>
                                                    <Link to="/Detail" className="book_breif" onClick={()=>{
                                                            handleClick(index);
                                                        }}>
                                                        <div className="imgbox"><img src={currentValue.images} alt="" /></div>
                                                        <div className="book_info">
                                                            <p className="book_title">{currentValue.title}</p>
                                                            <div className="book_stars">
                                                                <span className="star"></span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <AddButton />
                        </Container>
                    </div>
                </div>
            
        )
    }
}

export default List
