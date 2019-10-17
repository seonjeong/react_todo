import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Header, Button, ButtonArea, SearchList, PageTransition } from 'src/components';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            addBook: {},
            searchText: '',
            searchList: [],
            selectedBook: {
                title: '',
                author: '',
                publisher: '',
                pubdate: '',
                description: '',
                comment: ''
            }
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleAddList = this.handleAddList.bind(this);
        this.selectedBookFn = this.selectedBookFn.bind(this);
    }
    handleSearch(e){
        const { search } = require('src/api');
        var value = this.search.value;
        search((data)=>{
            this.setState({searchList: data.items});
        },value);
        const headerHeight = 44
        this.state.searchListStyle = {
             height: window.innerHeight - this.searchInput.clientHeight -20 -5- headerHeight
        }
    }
    handleAddList(e){
        const addBook = {
            image: this.image.src,
            title: this.title.value || 'test title',
            author : this.author.value || 'test author',
            publisher : this.company.value || 'test company',
            pubdate : this.year.value || 'test year',
            description : this.description.value || 'test description',
            comment : this.comment.value || 'test comment'
        };
        console.log('handleAddList');
        const { form } = require('src/api');
        
        form(()=>{
            console.log('form - callback');
        },addBook);
        console.log(addBook);
        // this.props.dataAdd(addBook);
    }
    selectedBookFn(data){
        this.setState({
            selectedBook: data
        });

        this.state.searchListStyle = {
             height: 0
        }
    }
    render(){
        return(
                <div className="wrap">
                        <Header />
                        <Container>
                            <div className="search">
                                <form ref={ref => this.searchInput = ref}>
                                    <div className="form_list">
                                        <dl className="form_box">
                                            <dt>검색</dt>
                                            <dd>
                                                <div className="ui_input">
                                                    <input type="search" ref={ref => this.search = ref}/>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <ButtonArea>
                                        <button type="button"
                                            className="btn_normal primary_type"
                                            onClick={this.handleSearch}
                                            >검색하기</button>
                                    </ButtonArea>
                                </form>

                                    <SearchList
                                        ref = { ref => this.searchList = ref }
                                        style = { this.state.searchListStyle }
                                        selectedBookFn = { this.selectedBookFn }
                                        searchList = { this.state.searchList }
                                         />
                            </div>
                            <form>
                                <div className="form_list">
                                    <dl className="form_box">
                                        <dt>이미지</dt>
                                        <dd>
                                            <div className="ui_input">
                                                <img ref={ref=>this.image = ref}
                                                src={this.state.selectedBook.image}
                                                alt=""
                                                />
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl className="form_box">
                                        <dt>제목</dt>
                                        <dd>
                                            <div className="ui_input">
                                                <input type="text" ref={ref => this.title = ref} readOnly value={this.state.selectedBook.title.replace(/(<([^>]+)>)/ig,"")}/>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl className="form_box">
                                        <dt>지은이</dt>
                                        <dd>
                                            <div className="ui_input">
                                                <input type="text" ref={ref => this.author = ref} readOnly value={this.state.selectedBook.author}/>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl className="form_box">
                                        <dt>책감상</dt>
                                        <dd>
                                            <div className="ui_textarea">
                                                <textarea name="" id="" cols="30" rows="10" ref={ref => this.comment = ref}></textarea>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl className="form_box">
                                        <dt>지은이</dt>
                                        <dd>
                                            <div className="ui_input">
                                                <input type="text" ref={ref => this.author = ref} readOnly value={this.state.selectedBook.author}/>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl className="form_box">
                                        <dt>출판사</dt>
                                        <dd>
                                            <div className="ui_input">
                                                <input type="text" ref={ref => this.company = ref} readOnly value={this.state.selectedBook.publisher}/>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl className="form_box">
                                        <dt>출판연도</dt>
                                        <dd>
                                            <div className="ui_input">
                                                <input type="text" ref={ref => this.year = ref} readOnly value={this.state.selectedBook.pubdate}/>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl className="form_box">
                                        <dt>책설명</dt>
                                        <dd>
                                            <div className="ui_textarea">
                                                <textarea name="" id="" cols="30" rows="10" ref={ref => this.description = ref} readOnly value={this.state.selectedBook.description.replace(/(<([^>]+)>)/ig,"")}></textarea>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </form>
                        </Container>
                        <ButtonArea>
                            <Link className="btn_normal primary_type" onClick={this.handleAddList} to="/List">추가하기</Link>
                        </ButtonArea>
                    </div>
        )
    }
}
export default Form;
