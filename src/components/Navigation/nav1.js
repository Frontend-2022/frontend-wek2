import React from "react";
import './nav1.css';


class Nav1 extends React.Component {
    render() {
        return(
            <div className="navigation1-fixed">
            <div class="navigation1">
                
                <a class="navigation1__icon" href="/">
                    <svg className="navigation1__icon-size" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g id="Group_13202" data-name="Group 13202" transform="translate(3141 24529)">
                            <rect id="Rectangle_6083" data-name="Rectangle 6083" width="16" height="16" transform="translate(-3141 -24529)" fill="none"/>
                            <g id="_01_align_center" data-name="01 align center" transform="translate(-3143.059 -24529.012)">
                            <path id="Path_16272" data-name="Path 16272" d="M13.174,16.012,6.587,9.425a2,2,0,0,1,0-2.83L13.17.012l.943.943L7.53,7.538a.667.667,0,0,0,0,.943l6.587,6.587Z" transform="translate(0)"/>
                            </g>
                        </g>
                    </svg>
                </a>
                <div class="navigation1-name">Trở về lorem ipsum</div>
                
            </div>
            </div>
        )
    }
}

export default Nav1;