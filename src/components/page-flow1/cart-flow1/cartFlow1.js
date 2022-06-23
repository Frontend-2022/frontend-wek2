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
                <div className="item-no">1</div>
                <div className="item-img"></div>
                <div className="item-text">Lorem ipsum dolor sit amet, consetetur
                <div className="item-subtext"></div>
                </div>
                <div className="item-code">#342389457544</div>
                <div className="item-unitprice">15.900đ/chai</div>
                <div className="item-quantity">25</div>
                <div className="item-unit">chai</div>
                <div className="item-state">
                <div className="item-state-text">Đủ hàng</div>
                </div>
                </div>
                <div className="item">
                <div className="item-no">1</div>
                <div className="item-img"></div>
                <div className="item-text">Lorem ipsum dolor sit amet, consetetur
                <div className="item-subtext">Không xuất hóa đơn</div>
                </div>
                <div className="item-code">#342389457544</div>
                <div className="item-unitprice">15.900đ/chai</div>
                <div className="item-quantity">25</div>
                <div className="item-unit">chai</div>
                <div className="item-state">
                <div className="item-state-text">Đủ hàng</div>
                </div>
                </div>
                <div className="item">
                <div className="item-no">1</div>
                <div className="item-img"></div>
                <div className="item-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                <div className="item-subtext-trigger">Không xuất hóa đơn</div>
                </div>
                <div className="item-code">#342389457544</div>
                <div className="item-unitprice">15.900đ/chai</div>
                <div className="item-quantity">25</div>
                <div className="item-unit">chai</div>
                <div className="item-state">
                <div className="item-state-text">Thiếu hàng</div>
                </div>
                </div>
                
                
            </div>
        )
    }
}

export default CartFlow1;