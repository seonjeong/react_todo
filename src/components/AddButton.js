import React from 'react';
import {Link} from 'react-router-dom';

class AddButton extends React.Component {
    render(){
        return(
            <Link to="/Form" className="btn_float_action">
                <span className="hidden">읽은 책 목록 추가</span>
            </Link>
        )
    }
}
export default AddButton;
