import React, { useState } from "react";
import './contentsFlow2Col2.css'
import './ContentsFlow2Col3.css'

function ContentsFlow2Col2 (){

        const [stateCol_1,setStateCol_1]=useState(false)
        const toggle=() =>{
            setStateCol_1 (!stateCol_1);
        }
        const [stateCol_2,setStateCol_2] =useState(false);
        const toggle_2=() =>{
            setStateCol_2 (!stateCol_2);
        }
        const [stateCol_3,setStateCol_3] =useState(false);
        const toggle_3=() =>{
            setStateCol_3 (!stateCol_3);
        }


     return(
        <div className="contentsflow2">
        <div className="Cart_Code">
            <div className="Cart">
                <svg xmlns="http://www.w3.org/2000/svg" id="Group_17738" data-name="Group 17738" width="12" height="12" viewBox="0 0 12 12">
                <rect id="Rectangle_8061" data-name="Rectangle 8061" width="12" height="12" fill="none"/>
                <g id="shopping-cart_8_" data-name="shopping-cart (8)" transform="translate(0.147)">
                    <path id="Path_16685" data-name="Path 16685" d="M11.356,2.038A1.5,1.5,0,0,0,10.2,1.5H2.121L2.1,1.324A1.5,1.5,0,0,0,.611,0H.5a.5.5,0,0,0,0,1H.611a.5.5,0,0,1,.5.441L1.8,7.292A2.5,2.5,0,0,0,4.279,9.5H9.5a.5.5,0,0,0,0-1H4.279a1.5,1.5,0,0,1-1.41-1h5.96a2.5,2.5,0,0,0,2.461-2.057l.392-2.177a1.5,1.5,0,0,0-.325-1.228ZM10.7,3.089l-.393,2.177A1.5,1.5,0,0,1,8.829,6.5H2.709l-.47-4H10.2a.5.5,0,0,1,.495.589Z" fill="#fff"/>
                    <circle id="Ellipse_1844" data-name="Ellipse 1844" cx="1" cy="1" r="1" transform="translate(2.5 10)" fill="#fff"/>
                    <circle id="Ellipse_1845" data-name="Ellipse 1845" cx="1" cy="1" r="1" transform="translate(7.5 10)" fill="#fff"/>
                </g>
                </svg>
            </div>
            <div className="Code">#220429-9AF3E1F0</div>
        </div>  {/* Cart_Code */}
        <div className="Content">
        Lorem ipsum dolor sit amet consur sadipscing elitr, sed
        </div>

        <div className="address">
            Tỉnh thành, quận huyện
        </div>

        <div className="Order_Info">
                <div className="Customer_Infor">
                    <div className="Contain_Avt">
                        <img className="Avt" src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/276157024_1666304207047237_8727305944710191128_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8QYHPxL77JsAX9RX-Rq&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_0LxPnvqDYaHBILpbl_KH_QH7ccfSbBZwfvWmJzn2Qlw&oe=62BF1168" alt="" />
                    </div>

                <div className="Name">Quốc Tuấn</div>
                </div>
                <div className="Datetime">16:32, 22/06/2022</div>

            <div className="price-toggle">
                <div className="Price">1.600.000đ</div>
                <div className="toggle">
                    <button onClick={toggle} className= {'toggleCol-1' + (stateCol_1 ? '': ' toggleCloseCol')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <g id="Group_17858" data-name="Group 17858" transform="translate(-361 -3478)">
                            <rect id="Rectangle_8141" data-name="Rectangle 8141" width="14" height="14" transform="translate(361 3478)" fill="none"/>
                            <path id="money-check-edit" d="M14,4.917V5.5a.583.583,0,0,1-1.167,0V4.917a1.752,1.752,0,0,0-1.75-1.75H2.917a1.752,1.752,0,0,0-1.75,1.75V10.75a1.752,1.752,0,0,0,1.75,1.75h1.75a.583.583,0,1,1,0,1.167H2.917A2.92,2.92,0,0,1,0,10.75V4.917A2.92,2.92,0,0,1,2.917,2h8.167A2.92,2.92,0,0,1,14,4.917Zm-.513,2.846a1.75,1.75,0,0,1,0,2.475L9.575,14.15a2.319,2.319,0,0,1-1.65.684H7a.583.583,0,0,1-.583-.583v-.925a2.316,2.316,0,0,1,.684-1.65l3.912-3.912a1.751,1.751,0,0,1,2.474,0ZM12.833,9a.583.583,0,0,0-1-.412L7.925,12.5a1.177,1.177,0,0,0-.342.825v.342h.342a1.159,1.159,0,0,0,.825-.342l3.912-3.912A.579.579,0,0,0,12.833,9ZM5.25,9.583H3.927a.587.587,0,0,1-.506-.292.583.583,0,1,0-1.009.584,1.755,1.755,0,0,0,1.515.874h.156a.583.583,0,0,0,1.167,0A1.752,1.752,0,0,0,7,9,1.611,1.611,0,0,0,5.65,7.406l-1.774-.3A.448.448,0,0,1,3.5,6.667a.584.584,0,0,1,.583-.583H5.407a.587.587,0,0,1,.506.292.583.583,0,1,0,1.009-.584,1.755,1.755,0,0,0-1.515-.875H5.25a.583.583,0,0,0-1.167,0,1.752,1.752,0,0,0-1.75,1.75A1.611,1.611,0,0,0,3.684,8.26l1.774.3A.448.448,0,0,1,5.833,9a.584.584,0,0,1-.583.583Z" transform="translate(361 3476.583)" fill="#fff"/>
                        </g>
                        </svg>

                    </button>
                    <button onClick={toggle_2} className= {'toggleCol-2' + (stateCol_2 ? '': ' toggleCloseCol')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <g id="upload" transform="translate(-0.011 -0.001)">
                            <path id="Path_16719" data-name="Path 16719" d="M112.6,3.326l1.391-1.391L114,8.751a.75.75,0,0,0,.75.75h0a.75.75,0,0,0,.75-.75l-.01-6.807,1.383,1.383a.75.75,0,1,0,1.079-1.042l-.018-.018L116.325.66a2.25,2.25,0,0,0-3.182,0h0l-1.606,1.606A.75.75,0,0,0,112.6,3.326Z" transform="translate(-108.707 0)" fill="#fff"/>
                            <path id="Path_16720" data-name="Path 16720" d="M11.261,309.355a.75.75,0,0,0-.75.75v2.3a.2.2,0,0,1-.2.2H1.715a.2.2,0,0,1-.2-.2v-2.3a.75.75,0,0,0-1.5,0v2.3a1.706,1.706,0,0,0,1.7,1.7h8.591a1.706,1.706,0,0,0,1.7-1.7v-2.3A.75.75,0,0,0,11.261,309.355Z" transform="translate(0 -302.104)" fill="#fff"/>
                        </g>
                        </svg>
                    </button>
                    <div className="double_btn">
                        <button onClick={toggle_3}   className={'toggleCol-3' + (stateCol_3 ? '': ' toggleCloseCol3')}  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                            <path id="data-transfer_1_" data-name="data-transfer (1)" d="M4,0H2A2,2,0,0,0,0,2v.5a2,2,0,0,0,2,2h.5v1h-1a.5.5,0,1,0,0,1h3a.5.5,0,1,0,0-1h-1v-1H4a2,2,0,0,0,2-2V2A2,2,0,0,0,4,0ZM5,2.5a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H4A1,1,0,0,1,5,2Zm5,3H9a2,2,0,0,0-2,2V10a2,2,0,0,0,2,2h1a2,2,0,0,0,2-2V7.5A2,2,0,0,0,10,5.5ZM11,10a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V7.5a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1ZM7,2a.5.5,0,0,1,.5-.5h1A1.5,1.5,0,0,1,10,3V4A.5.5,0,0,1,9,4V3a.5.5,0,0,0-.5-.5h-1A.5.5,0,0,1,7,2ZM6,10a.5.5,0,0,1-.5.5H4A1.5,1.5,0,0,1,2.5,9V8a.5.5,0,1,1,1,0V9a.5.5,0,0,0,.5.5H5.5A.5.5,0,0,1,6,10Zm4,0a.5.5,0,1,1-.5-.5A.5.5,0,0,1,10,10Z" transform="translate(0)" fill="#fff"/>
                            </svg>
                        </button>
                        <button className="btn_org">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                            <path id="data-transfer_1_" data-name="data-transfer (1)" d="M4,0H2A2,2,0,0,0,0,2v.5a2,2,0,0,0,2,2h.5v1h-1a.5.5,0,1,0,0,1h3a.5.5,0,1,0,0-1h-1v-1H4a2,2,0,0,0,2-2V2A2,2,0,0,0,4,0ZM5,2.5a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H4A1,1,0,0,1,5,2Zm5,3H9a2,2,0,0,0-2,2V10a2,2,0,0,0,2,2h1a2,2,0,0,0,2-2V7.5A2,2,0,0,0,10,5.5ZM11,10a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V7.5a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1ZM7,2a.5.5,0,0,1,.5-.5h1A1.5,1.5,0,0,1,10,3V4A.5.5,0,0,1,9,4V3a.5.5,0,0,0-.5-.5h-1A.5.5,0,0,1,7,2ZM6,10a.5.5,0,0,1-.5.5H4A1.5,1.5,0,0,1,2.5,9V8a.5.5,0,1,1,1,0V9a.5.5,0,0,0,.5.5H5.5A.5.5,0,0,1,6,10Zm4,0a.5.5,0,1,1-.5-.5A.5.5,0,0,1,10,10Z" transform="translate(0)" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
 }

 function ContentsFlow2Col3(){
    const [stateCol_1,setStateCol_1]=useState(false)
    const toggle=() =>{
        setStateCol_1 (!stateCol_1);
    }
    const [stateCol_2,setStateCol_2] =useState(false);
    const toggle_2=() =>{
        setStateCol_2 (!stateCol_2);
    }
    const [stateCol_3,setStateCol_3] =useState(false);
    const toggle_3=() =>{
        setStateCol_3 (!stateCol_3);
    }
 return(
    <div className="contentsflow2">
    <div className="Cart_Code">
        <div className="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" id="Group_17738" data-name="Group 17738" width="12" height="12" viewBox="0 0 12 12">
            <rect id="Rectangle_8061" data-name="Rectangle 8061" width="12" height="12" fill="none"/>
            <g id="shopping-cart_8_" data-name="shopping-cart (8)" transform="translate(0.147)">
                <path id="Path_16685" data-name="Path 16685" d="M11.356,2.038A1.5,1.5,0,0,0,10.2,1.5H2.121L2.1,1.324A1.5,1.5,0,0,0,.611,0H.5a.5.5,0,0,0,0,1H.611a.5.5,0,0,1,.5.441L1.8,7.292A2.5,2.5,0,0,0,4.279,9.5H9.5a.5.5,0,0,0,0-1H4.279a1.5,1.5,0,0,1-1.41-1h5.96a2.5,2.5,0,0,0,2.461-2.057l.392-2.177a1.5,1.5,0,0,0-.325-1.228ZM10.7,3.089l-.393,2.177A1.5,1.5,0,0,1,8.829,6.5H2.709l-.47-4H10.2a.5.5,0,0,1,.495.589Z" fill="#fff"/>
                <circle id="Ellipse_1844" data-name="Ellipse 1844" cx="1" cy="1" r="1" transform="translate(2.5 10)" fill="#fff"/>
                <circle id="Ellipse_1845" data-name="Ellipse 1845" cx="1" cy="1" r="1" transform="translate(7.5 10)" fill="#fff"/>
            </g>
            </svg>
        </div>
        <div className="Code">#220429-9AF3E1F0</div>
    </div>  {/* Cart_Code */}
    <div className="Content">
    Lorem ipsum dolor sit amet consur sadipscing elitr, sed
    </div>

    <div className="address">
        Tỉnh thành, quận huyện
    </div>

    <div className="Order_Info">
            <div className="Customer_Infor">
                <div className="Contain_Avt">
                    <img className="Avt" src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/276157024_1666304207047237_8727305944710191128_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8QYHPxL77JsAX9RX-Rq&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_0LxPnvqDYaHBILpbl_KH_QH7ccfSbBZwfvWmJzn2Qlw&oe=62BF1168" alt="" />
                </div>

            <div className="Name">Quốc Tuấn</div>
            </div>
            <div className="Datetime">16:32, 22/06/2022</div>

        <div className="price-toggle">
            <div className="Price">1.600.000đ</div>
            <div className="toggle">
                <button onClick={toggle} className= {'toggleCol3-1' + (stateCol_1 ? '': ' toggleCloseCol3-1')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <g id="Group_17858" data-name="Group 17858" transform="translate(-361 -3478)">
                        <rect id="Rectangle_8141" data-name="Rectangle 8141" width="14" height="14" transform="translate(361 3478)" fill="none"/>
                        <path id="money-check-edit" d="M14,4.917V5.5a.583.583,0,0,1-1.167,0V4.917a1.752,1.752,0,0,0-1.75-1.75H2.917a1.752,1.752,0,0,0-1.75,1.75V10.75a1.752,1.752,0,0,0,1.75,1.75h1.75a.583.583,0,1,1,0,1.167H2.917A2.92,2.92,0,0,1,0,10.75V4.917A2.92,2.92,0,0,1,2.917,2h8.167A2.92,2.92,0,0,1,14,4.917Zm-.513,2.846a1.75,1.75,0,0,1,0,2.475L9.575,14.15a2.319,2.319,0,0,1-1.65.684H7a.583.583,0,0,1-.583-.583v-.925a2.316,2.316,0,0,1,.684-1.65l3.912-3.912a1.751,1.751,0,0,1,2.474,0ZM12.833,9a.583.583,0,0,0-1-.412L7.925,12.5a1.177,1.177,0,0,0-.342.825v.342h.342a1.159,1.159,0,0,0,.825-.342l3.912-3.912A.579.579,0,0,0,12.833,9ZM5.25,9.583H3.927a.587.587,0,0,1-.506-.292.583.583,0,1,0-1.009.584,1.755,1.755,0,0,0,1.515.874h.156a.583.583,0,0,0,1.167,0A1.752,1.752,0,0,0,7,9,1.611,1.611,0,0,0,5.65,7.406l-1.774-.3A.448.448,0,0,1,3.5,6.667a.584.584,0,0,1,.583-.583H5.407a.587.587,0,0,1,.506.292.583.583,0,1,0,1.009-.584,1.755,1.755,0,0,0-1.515-.875H5.25a.583.583,0,0,0-1.167,0,1.752,1.752,0,0,0-1.75,1.75A1.611,1.611,0,0,0,3.684,8.26l1.774.3A.448.448,0,0,1,5.833,9a.584.584,0,0,1-.583.583Z" transform="translate(361 3476.583)" fill="#fff"/>
                    </g>
                    </svg>

                </button>
                <button onClick={toggle_2} className= {'toggleCol3-2' + (stateCol_2 ? '': ' toggleCloseCol3-1')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                    <g id="upload" transform="translate(-0.011 -0.001)">
                        <path id="Path_16719" data-name="Path 16719" d="M112.6,3.326l1.391-1.391L114,8.751a.75.75,0,0,0,.75.75h0a.75.75,0,0,0,.75-.75l-.01-6.807,1.383,1.383a.75.75,0,1,0,1.079-1.042l-.018-.018L116.325.66a2.25,2.25,0,0,0-3.182,0h0l-1.606,1.606A.75.75,0,0,0,112.6,3.326Z" transform="translate(-108.707 0)" fill="#fff"/>
                        <path id="Path_16720" data-name="Path 16720" d="M11.261,309.355a.75.75,0,0,0-.75.75v2.3a.2.2,0,0,1-.2.2H1.715a.2.2,0,0,1-.2-.2v-2.3a.75.75,0,0,0-1.5,0v2.3a1.706,1.706,0,0,0,1.7,1.7h8.591a1.706,1.706,0,0,0,1.7-1.7v-2.3A.75.75,0,0,0,11.261,309.355Z" transform="translate(0 -302.104)" fill="#fff"/>
                    </g>
                    </svg>
                </button>
                <button onClick={toggle_3} className= {'toggleCol3-3' + (stateCol_3 ? '': ' toggleCloseCol3-1')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                    <path id="data-transfer_1_" data-name="data-transfer (1)" d="M4,0H2A2,2,0,0,0,0,2v.5a2,2,0,0,0,2,2h.5v1h-1a.5.5,0,1,0,0,1h3a.5.5,0,1,0,0-1h-1v-1H4a2,2,0,0,0,2-2V2A2,2,0,0,0,4,0ZM5,2.5a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H4A1,1,0,0,1,5,2Zm5,3H9a2,2,0,0,0-2,2V10a2,2,0,0,0,2,2h1a2,2,0,0,0,2-2V7.5A2,2,0,0,0,10,5.5ZM11,10a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V7.5a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1ZM7,2a.5.5,0,0,1,.5-.5h1A1.5,1.5,0,0,1,10,3V4A.5.5,0,0,1,9,4V3a.5.5,0,0,0-.5-.5h-1A.5.5,0,0,1,7,2ZM6,10a.5.5,0,0,1-.5.5H4A1.5,1.5,0,0,1,2.5,9V8a.5.5,0,1,1,1,0V9a.5.5,0,0,0,.5.5H5.5A.5.5,0,0,1,6,10Zm4,0a.5.5,0,1,1-.5-.5A.5.5,0,0,1,10,10Z" transform="translate(0)" fill="#fff"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>

</div>
    );
 }
export {ContentsFlow2Col2 , ContentsFlow2Col3}

// "toggleCol-3_hover"
