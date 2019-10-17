import React from 'react';

import { ButtonArea } from 'src/components';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

class SearchList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchList: [],
            selectedBook: {}
        }

        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(index){
        this.props.selectedBookFn(this.props.searchList[index]);
    }
    render(){
        const { handleSelect } = this;
        return(
            <React.Fragment>
                <CSSTransition
                    in={!!this.props.searchList.length}
                    timeout={1000}
                    classNames="compo"
                    appear={true}
                    unmountOnExit
                    >
                    <div className="selectedBook" style={this.props.style}>
                        <div className="ul_list">
                        <ul>
                            {
                                this.props.searchList.map(function(currentValue,index){
                                    return  (
                                        <li key={index}>
                                            <a to="/Detail" className="book_breif" onClick={()=>{
                                                    handleSelect(index);
                                                }}>
                                                <div className="imgbox"><img src={currentValue.image} alt={currentValue.title} /></div>
                                                <div className="book_info">
                                                    <p className="book_title">{currentValue.title}</p>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    </div>
                </CSSTransition>
            </React.Fragment>
        )
    }
}

export default SearchList;
