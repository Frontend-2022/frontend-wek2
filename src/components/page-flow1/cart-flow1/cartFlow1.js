import React from "react";
import './cartFlow1.css';


class CartFlow1 extends React.Component {
    render() {
        return(
            <div className="cartflow1"> 
                <div className="textCart"> Giỏ hàng </div>
                <div className="item-header">
                <div className="item-header-icon"> # </div>
                <div className="item-header-text"> Tên hàng </div>
                <div className="item-header-text2"> Mã hàng </div>
                <div className="item-header-text3"> Đơn giá áp dụng </div>
                <div className="item-header-text4"> Số lượng </div>
                <div className="item-header-text5"> Trạng thái hàng </div>
                </div>
                <div className="item">

                </div>
                
                
            </div>
        )
    }
}

export default CartFlow1;