import React, { useState } from "react";
import { Link } from "react-router-dom";
import './headerFlow1.css';


function HeaderFlow1() {

    // function scrolled(event){
    //     console.log(event);
    // }
    
    // window.addEventListener('scroll', scrolled);

    return(
        <div className="header-flow1-index">
        <div className="header-flow1">
            <div className="header-flow1__name">
                <div className="header-flow1__name-info">
                    <div className="header-flow1__name-id">#4859340543695496594</div>
                    <div className="header-flow1__name-compname">Cty TNHH MTV Mặt trời đỏ</div>
                </div>
                <div className="header-flow1__action">
                    <div className="header-flow1__action-btn header-flow1__action-btn--active">
                        Chưa duyệt
                    </div>
                </div>
                <div className="header-flow1__action">
                    <div className="header-flow1__action-btn">
                        Chờ duyệt
                    </div>
                </div>
            </div>
            <div className="header-flow1__button">
                <div className="header-flow1__button-print">
                    <svg className="header-flow1__button-size" xmlns="http://www.w3.org/2000/svg" id="Group_15031" data-name="Group 15031" width="21.334" height="21.333" viewBox="0 0 21.334 21.333">
                    <rect id="Rectangle_7367" data-name="Rectangle 7367" width="21.333" height="21.333" fill="none"/>
                    <g id="_01_align_center" data-name="01 align center" transform="translate(0)">
                        <path id="Path_16415" data-name="Path 16415" d="M21.333,8a2.667,2.667,0,0,0-2.667-2.667H16.889V0H4.444V5.333H2.667A2.667,2.667,0,0,0,0,8V18.667H4.444v2.667H16.889V18.667h4.444ZM6.222,1.778h8.889V5.333H6.222Zm8.889,17.778H6.222V14.222h8.889Zm4.444-2.667H16.889V12.444H4.444v4.444H1.778V8a.889.889,0,0,1,.889-.889h16A.889.889,0,0,1,19.556,8Z" transform="translate(0)" fill="rgba(113,113,113,0.82)"/>
                        <rect id="Rectangle_7366" data-name="Rectangle 7366" width="3.556" height="1.778" transform="translate(13.333 8.889)" fill="rgba(113,113,113,0.82)"/>
                    </g>
                    </svg>
                </div>
                <div className="header-flow1__button-setting">

                    <input type="checkbox" name="" class="check-input-setting" id="input-setting"></input>

                    <label for="input-setting" className="header-flow1__button-click">
                        <svg className="header-flow1__button-size1" xmlns="http://www.w3.org/2000/svg" width="15.857" height="16" viewBox="0 0 15.857 16">
                            <g id="_01_align_center" data-name="01 align center" transform="translate(-0.107)">
                                <path id="Path_16446" data-name="Path 16446" d="M10.036,16h-4V13.658a6,6,0,0,1-1.9-1.1L2.107,13.733l-2-3.467L2.136,9.1a6.067,6.067,0,0,1,0-2.193L.107,5.733l2-3.467L4.136,3.439a6,6,0,0,1,1.9-1.1V0h4V2.342a6,6,0,0,1,1.9,1.1l2.029-1.173,2,3.467L13.936,6.9a6.067,6.067,0,0,1,0,2.193l2.029,1.17-2,3.467-2.029-1.172a6,6,0,0,1-1.9,1.1ZM7.369,14.667H8.7V12.649l.5-.129a4.656,4.656,0,0,0,2.162-1.253l.362-.369,1.749,1.01.667-1.155L12.4,9.745l.137-.5a4.7,4.7,0,0,0,0-2.5l-.137-.5,1.747-1.009-.667-1.155L11.727,5.1l-.362-.366A4.656,4.656,0,0,0,9.2,3.483l-.5-.132V1.333H7.369V3.351l-.5.129A4.656,4.656,0,0,0,4.706,4.733L4.344,5.1,2.6,4.089,1.929,5.244,3.676,6.253l-.137.5a4.7,4.7,0,0,0,0,2.5l.137.5L1.929,10.756,2.6,11.911,4.344,10.9l.362.369a4.656,4.656,0,0,0,2.162,1.25l.5.129Zm.667-4A2.667,2.667,0,1,1,10.7,8,2.667,2.667,0,0,1,8.036,10.667Zm0-4A1.333,1.333,0,1,0,9.369,8,1.333,1.333,0,0,0,8.036,6.667Z" transform="translate(0)" fill="#717171"/>
                            </g>
                        </svg>
                    </label>

                    <label for="input-setting" className="full-screen-setting"></label>

                    <div className="setting-list">
                        <div className="setting-list__update">
                            <h5>Cập nhập trạng thái</h5>
                        </div>
                        <div className="setting-list__name">
                            <h5>Lorem ipsum</h5>
                        </div>
                        <div className="setting-list__reward">
                            <h5>Ghi nhận công nợ</h5>
                            <h5>Thanh toán</h5>
                            <h5>Phát tiền thưởng</h5>
                        </div>
                        <div className="setting-list__collect">
                            <h5>Bỏ ghi công nợ</h5>
                            <h5>Nhập lại kho</h5>
                            <h5>Bỏ ghi thanh toán</h5>
                            <h5>Thu hồi tiền thưởng</h5>
                        </div>
                        <div className="setting-list__del">
                            <h5>Huỷ đơn</h5>
                        </div>
                    </div>
                </div>
                <Link to='/'>
                    <button className="header-flow1__button-done"> Duyệt đơn </button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default HeaderFlow1;