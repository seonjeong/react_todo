import React from 'react';

import { Header } from 'src/components';
import { Container } from 'src/layout';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state={
            detail: {}
        }
        this.test = React.createRef();

        this.state.isPageAnimation = false;

    }
    componentDidMount(){
        console.log(this.props.defaultDetail)
        setTimeout(()=>{
            this.setState({
                detail: this.props.defaultDetail,
                isPageAnimation: true
            });
        },1000);
    }
    render(){
        console.log(this.state.isPageAnimation)
        return (
            <div className="wrap detail_type">
                <Header title="책 제목" />
        		<Container>
                    <div className={`detail_view ${this.state.isPageAnimation ? "view_type" : "list_type"}`} ref={this.detailView}>
                        <section className="detail_column basic_column">
                            <h2 className="hidden">기본 책 정보</h2>
                            <div className="detail_img">
                                <div className="imgbox"><img src="https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg" alt="" /></div>
                            </div>
                            <div className="box_area">
                                <h2 className="detail_title">{this.state.detail.title}</h2>
                                <p className="detail_subtitle">{this.state.detail.subtitle}</p>
                                <div className="detail_stars">
                                    <span className="star"></span><span className="star"></span><span className="star"></span>
                                </div>
                            </div>
                        </section>
                        <section className="detail_column basic_info_column">
                            <h2 className="hidden">상세 책 정보</h2>
                            <div className="box_area">
                                <dl>
                                    <dt>지은이</dt>
                                    <dd>{this.state.detail.author}</dd>
                                </dl>
                                <dl>
                                    <dt>출판사</dt>
                                    <dd>{this.state.detail.company}</dd>
                                </dl>
                                <dl>
                                    <dt>출판연도</dt>
                                    <dd>{this.state.detail.year}</dd>
                                </dl>
                            </div>
                        </section>
                        <section className="detail_column description_column">
                            <div className="box_area">
                                <h2 className="main_title">책 설명</h2>
                                <p className="detail_description">
                                    {this.state.detail.description}
                                </p>
                            </div>
                            <button className="btn_detail_more"><span className="hidden">더보기</span></button>
                        </section>
                        <section className="detail_column my_comment_column">
                            <h2 className="hidden">책 감상</h2>
                            <div className="box_area">
                                <p className="detail_comment">
                                    {this.state.detail.comment}
                                </p>
                            </div>
                        </section>
                    </div>
                </Container>
        	</div>
        )
    }
}

export default Detail;
