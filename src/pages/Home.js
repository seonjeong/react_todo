import React from 'react';
import { Link } from 'react-router-dom';



class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }
    render(){
        return (
            
                <div className="wrap">
                        <div className="main_page">
                            <h1 className="logo"><Link to="/List">
                                <span className="text" ref="text">TO</span>
                                <span className="br"></span>
                                <span className="text">
                                    <span className="do">DO</span>
                                    <span className="read">READ</span>
                                </span>
                                <span className="br"></span>
                                <span className="text">LIST</span>
                            </Link></h1>
                        </div>
                    </div>
        )
    }
}

export default Home;
