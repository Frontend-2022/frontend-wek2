import React from "react";
import './headerFlow2.css';
import { Link } from "react-router-dom";


class HeaderFlow2 extends React.Component {
    render() {
        return(
            <div className="header">

                <div className="header__search">
                    <div className="header__search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <g id="Group_17769" data-name="Group 17769" transform="translate(-51 -105)">
                                <rect id="Rectangle_5105" data-name="Rectangle 5105" width="14" height="14" transform="translate(51 105)" fill="none"/>
                                <g id="search-interface-symbol" transform="translate(51 105)">
                                <g id="_x34__4_">
                                    <g id="Group_11619" data-name="Group 11619">
                                    <path id="Path_15839" data-name="Path 15839" d="M13.873,13.238,10.259,9.682A5.717,5.717,0,0,0,11.787,5.8,5.844,5.844,0,0,0,5.9,0,5.844,5.844,0,0,0,.006,5.8a5.844,5.844,0,0,0,5.89,5.8A5.924,5.924,0,0,0,9.6,10.3l3.629,3.571a.458.458,0,0,0,.641,0A.441.441,0,0,0,13.873,13.238ZM5.9,10.7A4.945,4.945,0,0,1,.912,5.8,4.945,4.945,0,0,1,5.9.892,4.945,4.945,0,0,1,10.88,5.8,4.945,4.945,0,0,1,5.9,10.7Z" transform="translate(-0.006 0)" fill="#8f9398"/>
                                    </g>
                                </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <input type="text" className="header__search-input" placeholder="Mã đơn, tên khách hàng, tên người bán" />
                </div>

                <div className="header__nav">
                    {/* <Link to='#' class="header__nav-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <g id="Group_12824" data-name="Group 12824" transform="translate(-13146 1664)">
                                <rect id="Rectangle_5975" data-name="Rectangle 5975" width="14" height="14" transform="translate(13146 -1664)" fill="none"/>
                                <g id="kanban_1_" data-name="kanban (1)" transform="translate(13146 -1662.852)">
                                <path id="Path_16250" data-name="Path 16250" d="M0,191.035H1.5a1.506,1.506,0,0,0,1.5-1.5V188H0Zm.82-2.215H2.187v.711a.684.684,0,0,1-.684.684H.82Z" transform="translate(0 -184.008)" fill="#007fff"/>
                                <path id="Path_16251" data-name="Path 16251" d="M200,191.035h1.531a1.506,1.506,0,0,0,1.5-1.5V188H200Zm.82-2.215h1.395v.711a.684.684,0,0,1-.684.684h-.711Z" transform="translate(-194.531 -184.008)" fill="#007fff"/>
                                <path id="Path_16252" data-name="Path 16252" d="M200,332.035h1.531a1.506,1.506,0,0,0,1.5-1.5V329H200Zm.82-2.215h1.395v.711a.684.684,0,0,1-.684.684h-.711Z" transform="translate(-194.531 -321.152)" fill="#007fff"/>
                                <path id="Path_16253" data-name="Path 16253" d="M10.145,42h-.82v2.347H4.648V42h-.82v2.347H0v.82H3.828V53.7h.82V45.168H9.324V53.7h.82V45.168H14v-.82H10.145Z" transform="translate(0 -42)" fill="#007fff"/>
                                <path id="Path_16254" data-name="Path 16254" d="M401,191.035h1.8a1.232,1.232,0,0,0,1.23-1.23V188H401Zm.82-2.215h1.395v.984a.411.411,0,0,1-.41.41h-.984Z" transform="translate(-390.035 -184.008)" fill="#007fff"/>
                                <path id="Path_16255" data-name="Path 16255" d="M200,68h3.035v.82H200Z" transform="translate(-194.531 -67.289)" fill="#007fff"/>
                                <path id="Path_16256" data-name="Path 16256" d="M401,68h3.035v.82H401Z" transform="translate(-390.035 -67.289)" fill="#007fff"/>
                                <path id="Path_16257" data-name="Path 16257" d="M0,68H3.035v.82H0Z" transform="translate(0 -67.289)" fill="#007fff"/>
                                </g>
                            </g>
                        </svg>
                        <span className="header__nav-card-label">Thẻ</span>
                    </Link>
                    <Link to='#' className="header__nav-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <g id="Group_12825" data-name="Group 12825" transform="translate(-12 -12)">
                                <rect id="Rectangle_5976" data-name="Rectangle 5976" width="14" height="14" transform="translate(12 12)" fill="none"/>
                                <g id="list" transform="translate(12 13.75)">
                                <path id="Path_16112" data-name="Path 16112" d="M6.583,5.167h9.333a.583.583,0,1,0,0-1.167H6.583a.583.583,0,0,0,0,1.167Z" transform="translate(-2.5 -3.417)" fill="#717171"/>
                                <path id="Path_16113" data-name="Path 16113" d="M15.917,11H6.583a.583.583,0,0,0,0,1.167h9.333a.583.583,0,1,0,0-1.167Z" transform="translate(-2.5 -6.333)" fill="#717171"/>
                                <path id="Path_16114" data-name="Path 16114" d="M15.917,18H6.583a.583.583,0,0,0,0,1.167h9.333a.583.583,0,1,0,0-1.167Z" transform="translate(-2.5 -9.25)" fill="#717171"/>
                                <circle id="Ellipse_1597" data-name="Ellipse 1597" cx="1.167" cy="1.167" r="1.167" fill="#717171"/>
                                <circle id="Ellipse_1598" data-name="Ellipse 1598" cx="1.167" cy="1.167" r="1.167" transform="translate(0 4.083)" fill="#717171"/>
                                <circle id="Ellipse_1599" data-name="Ellipse 1599" cx="1.167" cy="1.167" r="1.167" transform="translate(0 8.167)" fill="#717171"/>
                                </g>
                            </g>
                        </svg>
                        <span className="header__nav-card-table">Bảng</span>
                    </Link> */}
                    <div className="but_contain">
                        {/* <div className="icon-setting-add">
                                <Link to='#' className="header__nav-setting">
                                    <div className="header__nav-setting-iconSetting">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.857" height="16" viewBox="0 0 15.857 16">
                                            <g id="_01_align_center" data-name="01 align center" transform="translate(-0.107)">
                                                <path id="Path_16446" data-name="Path 16446" d="M10.036,16h-4V13.658a6,6,0,0,1-1.9-1.1L2.107,13.733l-2-3.467L2.136,9.1a6.067,6.067,0,0,1,0-2.193L.107,5.733l2-3.467L4.136,3.439a6,6,0,0,1,1.9-1.1V0h4V2.342a6,6,0,0,1,1.9,1.1l2.029-1.173,2,3.467L13.936,6.9a6.067,6.067,0,0,1,0,2.193l2.029,1.17-2,3.467-2.029-1.172a6,6,0,0,1-1.9,1.1ZM7.369,14.667H8.7V12.649l.5-.129a4.656,4.656,0,0,0,2.162-1.253l.362-.369,1.749,1.01.667-1.155L12.4,9.745l.137-.5a4.7,4.7,0,0,0,0-2.5l-.137-.5,1.747-1.009-.667-1.155L11.727,5.1l-.362-.366A4.656,4.656,0,0,0,9.2,3.483l-.5-.132V1.333H7.369V3.351l-.5.129A4.656,4.656,0,0,0,4.706,4.733L4.344,5.1,2.6,4.089,1.929,5.244,3.676,6.253l-.137.5a4.7,4.7,0,0,0,0,2.5l.137.5L1.929,10.756,2.6,11.911,4.344,10.9l.362.369a4.656,4.656,0,0,0,2.162,1.25l.5.129Zm.667-4A2.667,2.667,0,1,1,10.7,8,2.667,2.667,0,0,1,8.036,10.667Zm0-4A1.333,1.333,0,1,0,9.369,8,1.333,1.333,0,0,0,8.036,6.667Z" transform="translate(0)" fill="#717171"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="header__nav-setting-iconAdd">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="plus" width="16" height="16" viewBox="0 0 16 16">
                                            <path id="Path_16419" data-name="Path 16419" d="M15.333,7.333H8.667V.667a.667.667,0,0,0-1.333,0V7.333H.667a.667.667,0,0,0,0,1.333H7.333v6.667a.667.667,0,1,0,1.333,0V8.667h6.667a.667.667,0,0,0,0-1.333Z" fill="#a9a9a9"/>
                                        </svg>
                                    </div>
                                </Link>
                        </div> */}
                        <Link to='/flow1'>
                            <div className="btn1_btn2">
                                <button className="header-btn1">Tạo đơn</button>
                                <button className="header-btn2">Lorem ipsum</button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderFlow2;