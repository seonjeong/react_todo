import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../components';
import { Container } from '../layout';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: props.defaultList
        };
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.props.list !== nextProps.list;
    }
    componentDidMount(){
        this.setState(function(prevState){
            var currentList = prevState.list;
            this.props.defaultList.map(function(currentValue){
                currentList.push(currentValue);
            });
            return {list: currentList};
        });
    }
    render(){
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
                                            <Link to="/Detail" className="book_breif">
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
        		</Container>
            </div>
        </div>

        )
    }
}

export default List
