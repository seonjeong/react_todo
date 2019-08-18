import React from 'react';

// 라우터
import { BrowserRouter, Route } from 'react-router-dom';

// 컴포넌트 & 컨테이너
import { AsyncHome, AsyncList, AsyncDetail, AsyncForm, AsyncNoMatch } from 'src/pages/index.async';

// 페이지 트렌지션
import { CSSTransition } from 'react-transition-group';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            isPageActive : false,
            list : [],
            selectedIndex: 0
        };

        this.dataList = this.dataList.bind(this);
        this.dataDetail = this.dataDetail.bind(this);

        this.dataAdd = this.dataAdd.bind(this);
        this.listIndex = this.listIndex.bind(this);

    }
    componentDidMount(){
        this.dataList();
        // this.dataDetail(this.state.selectedIndex);
    }
    dataList(){
        const { list } = require('src/api');
        list((data)=>{
            this.setState({
                list: data
            });
        });
    }
    dataDetail(index){
        console.log('App : dataDetail',index);
        const { detail } = require('src/api');
        detail((data)=>{
            console.log('api : callback');
            this.setState({
                detail: data
            });
        },index);

        // this.setState({
        //     detail: {
        //         'img' : '',
        //         'title': 'dataDetail 책 제목9',
        //         'subtitle': 'dataDetail 책 부제목9',
        //         'star': '5',
        //         'author': 'dataDetail 지은이',
        //         'company': 'dataDetail 출판사',
        //         'year': 'dataDetail 2016',
        //         'description': 'dataDetail Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        //         'comment': 'dataDetail Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
        //     }
        // });

    }
    dataAdd(addBook){
        this.setState((preState)=>({
            list: preState.list.concat(addBook)
        }));
    }
    listIndex(param){
        this.setState(()=>({selectedIndex:param}))
        this.dataDetail(param);
    }
    render() {
        const duration = 1000;
        console.log('App : render',this.state.detail);
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
                      <AsyncHome/>
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
            <Route key="/Form" exact path="/Form">
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={duration}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <AsyncForm dataAdd={this.dataAdd}/>
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
                    <AsyncList defaultList={this.state.list} dataDetail={this.dataDetail}/>
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
            <Route key="/NoMatch" component={AsyncNoMatch} />
        </BrowserRouter>
        )
    }
}

export default App;
