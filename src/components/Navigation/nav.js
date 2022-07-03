import React,{useState} from "react";
import './nav.css';
import { FiChevronLeft } from "react-icons/fi";

function Nav() {
    const [stateFilter,setStateFilter] =useState(true);
    const clickFilter=() =>{
        setStateFilter (!stateFilter);
    }

    return(
        <div class="navigation">
            
            <a class="navigation__icon" href="/">
                <svg className="navigation__icon-home" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g id="Group_13202" data-name="Group 13202" transform="translate(3141 24529)">
                        <rect id="Rectangle_6083" data-name="Rectangle 6083" width="16" height="16" transform="translate(-3141 -24529)" fill="none"/>
                        <g id="_01_align_center" data-name="01 align center" transform="translate(-3143.059 -24529.012)">
                        <path id="Path_16272" data-name="Path 16272" d="M13.174,16.012,6.587,9.425a2,2,0,0,1,0-2.83L13.17.012l.943.943L7.53,7.538a.667.667,0,0,0,0,.943l6.587,6.587Z" transform="translate(0)"/>
                        </g>
                    </g>
                </svg>
            </a>

            <div class="navigation-boder"></div>

            {/* <div class="navigation__name"> */}
                <button onClick={clickFilter} className= {'navigation__name' + (stateFilter ? '': ' navigation__name-hidden navigation__name-icon2')}>
                    <svg className="navigation__name-icon1 navigation__name-icon2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <g id="exclamation_6_" data-name="exclamation (6)" transform="translate(0 0)">
                            <path id="Path_16703" data-name="Path 16703" d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM6,11a5,5,0,1,1,5-5A5,5,0,0,1,6,11Z" fill="rgba(0,127,255,0)"/>
                            <path id="Path_16704" data-name="Path 16704" d="M11.5,5a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,1,0v-4A.5.5,0,0,0,11.5,5Z" transform="translate(-5.5 -2.5)" fill="#fff"/>
                            <rect id="Rectangle_8071" data-name="Rectangle 8071" width="1" height="1" rx="0.5" transform="translate(5.5 8.5)" fill="#fff"/>
                        </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <g id="settings-sliders_1_" data-name="settings-sliders (1)" transform="translate(0 0)">
                            <path id="Path_16699" data-name="Path 16699" d="M.583,2.771h1.6a2.175,2.175,0,0,0,4.2,0h7.04a.583.583,0,0,0,0-1.167H6.376a2.175,2.175,0,0,0-4.2,0H.583a.583.583,0,0,0,0,1.167Zm3.694-1.6A1.021,1.021,0,1,1,3.257,2.187,1.021,1.021,0,0,1,4.277,1.167Z" fill="#141414"/>
                            <path id="Path_16700" data-name="Path 16700" d="M13.416,9.854h-1.6a2.174,2.174,0,0,0-4.2,0H.583a.583.583,0,1,0,0,1.167H7.624a2.174,2.174,0,0,0,4.2,0h1.6a.583.583,0,1,0,0-1.167Zm-3.694,1.6a1.021,1.021,0,1,1,1.021-1.021,1.021,1.021,0,0,1-1.021,1.021Z" transform="translate(0 -3.437)" fill="#141414"/>
                            <path id="Path_16701" data-name="Path 16701" d="M13.416,18.1H6.376a2.175,2.175,0,0,0-4.2,0H.583a.583.583,0,1,0,0,1.167h1.6a2.175,2.175,0,0,0,4.2,0h7.04a.583.583,0,1,0,0-1.167Zm-9.139,1.6A1.021,1.021,0,1,1,5.3,18.687,1.021,1.021,0,0,1,4.277,19.708Z" transform="translate(0 -6.875)" fill="#141414"/>
                        </g>
                    </svg>
                    <span className="navigation__name-filter">Bộ lọc</span>
                </button>
            {/* </div> */}
            
        </div>
    )
}

export default Nav;