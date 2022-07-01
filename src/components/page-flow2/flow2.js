import React from "react";
import '../Basis/grid.css';
// import { Link } from "react-router-dom";
import Nav from '../Navigation/nav';
import './flow2.css';
import ContentsFlow2 from "./contents-flow2/contentsFlow2";
import HeaderFlow2 from "./header-flow2/headerFlow2";
// import ContentsFlow2Col2 from "./contents-flow2/contentsFlow2Col2"
import {ContentsFlow2Col2 , ContentsFlow2Col3} from './contents-flow2/contentsFlow2Col2'
function Flow2 (){
        return(
            <div className="flow2">
                <Nav />
                <div className="grid wide">

                    <HeaderFlow2 />

                    <div className="container">
                        <div className="container__category">
                            <div className="row no-gutters container__category-position">
                                <div className="col l-2-4">
                                    <div className="container__category-list">
                                        <span>Chờ duyệt</span>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className="container__category-list container__category-list--active">
                                        <span>Đóng gói</span>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className="container__category-list container__category-list--active">
                                        <span>Vận chuyển</span>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className="container__category-list">
                                        <span>Trả hàng</span>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className="container__category-list">
                                        <span>Huỷ đơn</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row sm-gutter container-flow2-1">

                            <div className="col l-3">
                                <div className="container__list-title">
                                    <span className="container__title-name">CHỜ ĐÓNG GÓI</span>
                                    <span className="container__title-number">8 đơn</span>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="container__list-title">
                                    <span className="container__title-name">CHỨNG TỪ</span>
                                    <span className="container__title-number">2 đơn</span>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="container__list-title">
                                    <span className="container__title-name">SOẠN HÀNG</span>
                                    <span className="container__title-number">1 đơn</span>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="container__list-title">
                                    <span className="container__title-name">ĐÃ ĐÓNG GÓI</span>
                                    <span className="container__title-number">1 đơn</span>
                                </div>
                            </div>

                        </div>

                        <div className="row sm-gutter container-flow2-2">

                            <div className="col l-3">
                                <div className="container__list">
                                    <ContentsFlow2 />
                                    <ContentsFlow2 />
                                    <ContentsFlow2 />
                                    <ContentsFlow2 />
                                    <ContentsFlow2 />
                                    <ContentsFlow2 />
                                    <ContentsFlow2 />
                                    <ContentsFlow2 />
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="container__list">

                                    <ContentsFlow2Col2 />
                                    <ContentsFlow2Col3 />
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="container__list">
                                <ContentsFlow2Col3 />
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="container__list">
                                <ContentsFlow2Col3 />
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </div>
        )
    }


export default Flow2;
