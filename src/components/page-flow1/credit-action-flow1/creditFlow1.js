import React from "react";
import './creditFlow1.css';


class CreditFlow1 extends React.Component {
    render() {
        return(
            <div className="creditflow1">                
                <div className="discountflow1">
                    <div className="discount-text">Mã giảm giá</div>
                    <div className="discount-code">X37429853409586954-6-054654-654</div>
                    <div className="discount-text1">Cập nhật</div>
                </div>
                <div className="discountapplied">
                <div className="discount-grid">
                <div className="discount-text">Khuyến mãi áp dụng</div>
                <div className="discount-text3">Xem tất cả sự kiện</div>
                </div>
                <div className="discount-grid">
                <div className="discount-text4">Tên sản phẩm Lorem ipsum dolor sit amet, consetetur</div>
                <div className="discount-text5">Mua 3 tặng 3</div>
                </div>
                <div className="discount-grid">
                    <div className="discount-text4">Tên sản phẩm Lorem ipsum dolor sit amet, consetetur</div>
                    <div className="discount-text5">Mua 3 tặng 3</div>
                </div>
                <div className="discount-grid-noborder">
                    <div className="discount-text4">Tên sản phẩm Lorem ipsum dolor sit amet, consetetur</div>
                    <div className="discount-text7">Mua 3 tặng 3</div>
                    <div className="discount-text6">Sửa</div> 
                    <div className="discount-text8">Thêm</div>
                </div>
                </div>
            </div>
        )
    }
}

export default CreditFlow1;