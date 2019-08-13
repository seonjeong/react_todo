import React from 'react';

// 라우터
import { BrowserRouter, Route } from 'react-router-dom';

// 컴포넌트 & 컨테이너

// import { AsyncHome, AsyncList, AsyncDetail, AsyncNoMatch } from '../pages/index.async';
import { AsyncHome ,AsyncList, AsyncDetail} from 'src/pages/index.async';
import { Home } from 'src/pages/index';

// 페이지 트렌지션
import { CSSTransition } from 'react-transition-group';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            isPageActive : false,
            list : [],
            test: {}
        };

        this.dataList = this.dataList.bind(this);
        this.dataDetail = this.dataDetail.bind(this);

    }
    componentDidMount(){
        // this.dataList();
        // this.dataDetail();
    }
    dataList(){
        const { list } = require('src/api');
        list((data)=>{
            this.setState({
                list: data
            });
        });
    }
    dataDetail(){
        const { detail } = require('src/api');
        detail((data)=>{
            this.setState({
                detail: data
            });
        });
    }
    render() {
        const duration = 1000;
        return (
        <BrowserRouter>
            <Route key="/" exact path="/">
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={duration}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Home/>
                    </div>
                  </CSSTransition>
                )}
            </Route>
            <Route key="/Home" exact path="/Home">
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={duration}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <AsyncHome/>
                    </div>
                  </CSSTransition>
                )}
            </Route>
            <Route key="/List" exact path="/List">
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={duration}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <AsyncList defaultList={this.state.list}/>
                  </div>
                </CSSTransition>
              )}
            </Route>
            <Route key="/Detail" exact path="/Detail">
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={duration}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <AsyncDetail defaultDetail={this.state.detail}/>
                  </div>
                </CSSTransition>
              )}
            </Route>
            <Route key="/NoMatch" exact path="/Detail">
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={duration}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <AsyncDetail defaultDetail={this.state.detail}/>
                  </div>
                </CSSTransition>
              )}
            </Route>
        </BrowserRouter>
        )
    }
}

export default App;
