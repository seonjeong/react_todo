import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Header, Button, ButtonArea } from '../components';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            addBook: {}
        }

        this.handleAddList = this.handleAddList.bind(this);
    }
    handleAddList(e){
        const addBook = {
            img: 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
            title: this.title.value || 'test title',
            subtitle : this.subtitle.value || 'test subtitle',
            author : this.author.value || 'test author',
            company : this.company.value || 'test company',
            year : this.year.value || 'test year',
            description : this.description.value || 'test description',
            comment : this.comment.value || 'test comment'
        };
        this.props.dataAdd(addBook);
    }
    render(){
        return(
            <div className="wrap">
                <Header />
                <Container>
                    <form >
                        <div className="form_list">
                            <dl className="form_box">
                                <dt>이미지</dt>
                                <dd>
                                    <div className="ui_input">
                                        <input type="file" ref={ref => this.img = ref}/>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="form_box">
                                <dt>제목</dt>
                                <dd>
                                    <div className="ui_input">
                                        <input type="text" ref={ref => this.title = ref}/>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="form_box">
                                <dt>부제목</dt>
                                <dd>
                                    <div className="ui_input">
                                        <input type="text" ref={ref => this.subtitle = ref}/>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="form_box">
                                <dt>지은이</dt>
                                <dd>
                                    <div className="ui_input">
                                        <input type="text" ref={ref => this.author = ref}/>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="form_box">
                                <dt>출판사</dt>
                                <dd>
                                    <div className="ui_input">
                                        <input type="text" ref={ref => this.company = ref}/>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="form_box">
                                <dt>출판연도</dt>
                                <dd>
                                    <div className="ui_input">
                                        <input type="text" ref={ref => this.year = ref}/>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="form_box">
                                <dt>책설명</dt>
                                <dd>
                                    <div className="ui_textarea">
                                        <textarea name="" id="" cols="30" rows="10" ref={ref => this.description = ref}></textarea>
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
