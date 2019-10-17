import React from 'react';

// 라우터
import { BrowserRouter as Router, Route } from 'react-router-dom';

// page 컴포넌트
import { Home, List, Detail, Form, NoMatch, Test } from 'src/pages/index';

import { PageTransition } from 'src/components';
import { CSSTransition } from 'react-transition-group';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            list : [],
            detail: {},
            selectedIndex: 0
        };

        this.dataList = this.dataList.bind(this);
        this.dataDetail = this.dataDetail.bind(this);
        this.dataAdd = this.dataAdd.bind(this);

        this.listIndex = this.listIndex.bind(this);

    }
    componentDidMount(){
        this.dataList();
    }
    dataList(){
        const { list } = require('src/api');
        list((data)=>{
            this.setState({
                list: data
            });
        });
    } 
    dataDetail(callback){
        const { detail } = require('src/api');
        callback = callback.bind(this);
        detail((data)=>{
            callback(data);
        },this.state.selectedIndex);
        console.log(this.state)
    }
    dataAdd(addBook){
        console.log('dataAdd',addBook);
        this.setState({
            list: this.state.list.concat(addBook)
        });
    }
    listIndex(param){
        this.setState({selectedIndex:param});
    }
    render(){
        return (
        <Router>
            <Route key="/" exact path="/">
                {
                    (props) => (
                        <CSSTransition
                            in={props.match != null}
                            timeout={1000}
                            classNames="page"
                            appear={true}
                            unmountOnExit
                        >
                            <Home />
                        </CSSTransition>
                    )
                }
            </Route>
            <Route key="/Home" exact path="/Home">
                {
                    (props) => (
                        <CSSTransition
                            in={props.match != null}
                            timeout={1000}
                            classNames="page"
                            appear={true}
                            unmountOnExit
                        >
                            <Home />
                        </CSSTransition>
                    )
                }
                </Route>
            <Route key="/Form" exact path="/Form">
                {
                    (props) => (
                        <CSSTransition
                            in={props.match != null}
                            timeout={1000}
                            classNames="page"
                            appear={true}
                            unmountOnExit
                        >
                            <Form dataAdd={this.dataAdd} {...props} />
                        </CSSTransition>
                    )
                }
            </Route>
            <Route key="/List" exact path="/List">
                {
                    (props) => (
                        <CSSTransition
                            in={props.match != null}
                            timeout={1000}
                            classNames="page"
                            appear={true}
                            unmountOnExit
                        >
                            <List
                                dataList={this.dataList}
                                defaultList={this.state.list}
                                listIndex={this.listIndex}
                            />
                        </CSSTransition>
                    )
                }
            </Route>
            <Route key="/Detail" exact path="/Detail">
                {
                    (props) => (
                        <CSSTransition
                            in={props.match != null}
                            timeout={1000}
                            classNames="page"
                            appear={true}
                            unmountOnExit
                        >
                            <Detail
                                dataDetail={this.dataDetail}
                                defaultDetail={this.state.detail}
                                {...props}
                            />
                        </CSSTransition>
                    )
                }
            </Route>

        </Router>
        )
    }
}

export default App;
