import React from "react";
import { Link } from "react-router-dom";
import './headerFlow1.css';


class HeaderFlow1 extends React.Component {
    render() {
        return(
            <div className="header-flow1">
                <div className="header-flow1__name">
                    <div className="header-flow1__name-info">
                        <span className="header-flow1__name-id">#4859340543695496594</span>
                        <span className="header-flow1__name-compname">Cty TNHH MTV Mặt trời đỏ</span>
                        <span>Chờ duyệt</span>
                        <span>Chưa duyệt</span>
                    </div>
                </div>
                    <Link to='/'>
                        <button className="header-flow1__button"> Duyệt đơn </button>
                    </Link>
            </div>
        )
    }
}

export default HeaderFlow1;