import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, AddButton } from '../components';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: props.defaultList
        };

        this.handleClick = this.handleClick.bind(this);
        console.log('List : constructor');
    }
    componentDidMount(){
        this.setState((prevState)=>({list:prevState.list}));
        console.log('List : componentDidMount');
    }
    handleClick(index){
        this.props.dataDetail(index);
    }
    render(){
        const handleClick = this.handleClick;
        console.log('List : render');
        return (
        <div className="wrap">
            <div className="page_wrap list_type">
                <Header />
        		<Container>
                    <div className="ul_list">
                        <ul>
                            {
                                this.state.list.map(function(currentValue,index){
                                    return  (
                                        <li key={index}>
                                            <Link to="/Detail" className="book_breif" onClick={()=>{
                                                    handleClick(index);
                                                }}>
                                                <div className="imgbox"><img src={currentValue.img} alt="" /></div>
                                                <div className="book_info">
                                                    <p className="book_title">{currentValue.title}</p>
                                                    <p className="book_subtitle">{currentValue.subtitle}</p>
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
