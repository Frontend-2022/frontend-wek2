import React, { useState } from "react";
import './contentsFlow1.css';


function ContentsFlow1() {
    const [appear, setAppear] = useState(true);
    // const [click, setClicker] = useState(0);
    const [count, setCount] = useState(true);
    const makeappear = () => {
        if (appear) {
            document.getElementById('text1').style.display = 'none';
            document.getElementById('text1-1').style.display = 'block';
        }
        else {
            document.getElementById('text1-1').style.display = 'none';
            document.getElementById('text1').style.display = 'block';
        }
        setAppear(!appear);
    }
    const makeappear1 = (id,e) => {
        console.log(e)
         if (appear ){ // && (click % 2 === 0)
            document.getElementById(id).style.display = 'block';
            // setClicker(click+1);
            //  document.on('click',id,function(e){
            //      e.stopPropagation();
            //  })
        }
        else{ document.getElementById(id).style.display = 'none';
                // setClicker(click+1);
        }
        setAppear(!appear);
    }

    // const makeappear3 = (id) => {
    //     if (appear){
    //         document.getElementById(id).style.display = 'block';
    //     }
    //     else { document.getElementById(id).style.display = 'none';
    //     }
    //     setAppear(!appear);
    // }
    const makeappear2 = (id,id1) => {
        if (!count) {
            document.getElementById(id).style.display = 'block';
            document.getElementById(id1).style.color = '#141414';
        }
        else {
            document.getElementById(id).style.display = 'none';
            document.getElementById(id1).style.color = '#707070';
        }
        setCount(!count);

    }
    const closeModel =()=>{
        document.getElementById('test-hover1').style.display='none';
    }
    return (
        <div className="contentsflow1">
            <div className="category-container">
                <div className="row container-category-position">
                    <div className="list1">
                        <div onClick={()=>makeappear()} id="text1" className="text1">Đơn hàng</div>
                        <div onClick={()=>makeappear()} id="text1-1" className="text1-1">Nội dung</div>
                    </div>
                    <div className="list2">
                        <div className="text2">Vận chuyển</div>
                    </div>
                    <div className="list3">
                        <div className="text10">Chứng từ</div>
                    </div>
                </div>
            </div>
            <div className="detail-container">
                <div className="block1">
                    <div className="block1-1">
                        <div className="block1-1-locate">Nơi nhận:</div>
                        <div className="block1-1-address">
                            <span className="block1-1-address-name1">CH VM 74 Hai Bà Trưng</span>
                            <div className="block1-1-address-dot"></div>
                            <span className="block1-1-address-name2">#75475743434</span>
                        </div>
                        <div className="block1-1-content">Địa chỉ lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</div>
                        <div className="block1-1-name">
                            <span>Nguyễn Văn A</span>
                            <div className="block1-1-name-dot"></div>
                            <span>0126549873</span>
                        </div>
                    </div>
                    <div className="block1-2">
                        <div className="block1-2-locate">Hoá đơn GTGT:</div>
                        <div className="block1-2-address">Xuất đầy đủ</div>

                        <div className="block1-2-name">
                            <div className="block1-2-name-id">32131254534545</div>
                            <div className="block1-2-name-dot"></div>
                            <div className="block1-2-name-content">LOREM IPSUM DOLOR SIT AMET, CONSETETUR</div>
                        </div>
                        <div className="block1-2-content">Địa chỉ lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</div>
                    </div>
                </div>
                <div className="block2">
                    <div className="block2-1">
                        <div className=" block2-1-1">

                            {/* <div onClick={() => makeappear3('test-full-screen')} className="full-screen"></div> */}

                            <div onClick={(e) => makeappear1('test-hover1',e)}  className=" block2-1-1-1 block2-1-1-1-hover" id="blockit">
                                <div className="text3">Người bán</div>
                                <div className="imagegrid">
                                    <div className="image"></div>
                                    <div className="text8">Nguyễn Văn Mười Ba</div>
                                    <div onClick={()=>closeModel()} id="test-hover1" className="test-hover">
                                    <div class="search-container2">
                                        <div className="input-grid">
                                            <input type="text" placeholder="Nhập tên, ID nhân viên" name="search"></input>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Group_13362" data-name="Group 13362" width="14" height="14" viewBox="0 0 14 14">
                                                    <rect id="Rectangle_5105" data-name="Rectangle 5105" width="14" height="14" fill="none" />
                                                    <g id="search-interface-symbol" transform="translate(0)">
                                                        <g id="_x34__4_" transform="translate(0)">
                                                             <g id="Group_11619" data-name="Group 11619">
                                                                <path id="Path_15839" data-name="Path 15839" d="M13.873,13.239,10.259,9.682A5.717,5.717,0,0,0,11.787,5.8,5.844,5.844,0,0,0,5.9,0,5.844,5.844,0,0,0,.006,5.8a5.844,5.844,0,0,0,5.89,5.8A5.924,5.924,0,0,0,9.6,10.3l3.629,3.571a.458.458,0,0,0,.641,0A.441.441,0,0,0,13.873,13.239ZM5.9,10.7A4.945,4.945,0,0,1,.912,5.8,4.945,4.945,0,0,1,5.9.892,4.945,4.945,0,0,1,10.88,5.8,4.945,4.945,0,0,1,5.9,10.7Z" transform="translate(-0.006 0)" fill="#707070" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div  onClick={() => makeappear2('image1','text2')} className="nav_sub2-item2 ">
                                        <div className="nav_sub2-item2-imagegrid">
                                            <div className="nav_sub2-item2-image"></div>
                                            <div id="text2" className="nav_sub2-item-text2">Nguyễn Văn Mười Ba</div>
                                            <div id="image1" className="image1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" /></svg></div>
                                        </div>
                                    </div>

                                    <div onClick={() => makeappear2('image2','text3')} className="nav_sub2-item2 ">
                                        <div className="nav_sub2-item2-imagegrid">
                                            <div className="nav_sub2-item2-image"></div>
                                            <div id="text3" className="nav_sub2-item-text2">Nguyễn Văn Mười Ba</div>
                                            <div id="image2" className="image1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" /></svg></div>
                                        </div>
                                    </div>

                                </div>

                                </div>

                            </div>



                            <div className=" block2-1-1-1">
                                <div className="text3">Ngày đặt</div>
                                <input type="date"></input>
                            </div>

                        </div>

                        <div className="block2-1-1">
                            <div className=" block2-1-1-2">
                                <div className="text3">Ngày giao</div>
                                <input type="date"></input>
                            </div>
                            <div onClick={() => makeappear1('test-hover2')} className=" block2-1-1-2 block2-1-1-2-hover">
                                <div className="text3">Kho bán hàng</div>
                                <div className="text9">Lorem ipsum dolor sit amet,</div>

                                <div id="test-hover2" className="test-hover">
                                    <div class="search-container2">
                                        <div className="input-grid">
                                            <input type="text" placeholder="Nhập tên, ID nhân viên" name="search"></input>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Group_13362" data-name="Group 13362" width="14" height="14" viewBox="0 0 14 14">
                                                    <rect id="Rectangle_5105" data-name="Rectangle 5105" width="14" height="14" fill="none" />
                                                    <g id="search-interface-symbol" transform="translate(0)">
                                                        <g id="_x34__4_" transform="translate(0)">
                                                            <g id="Group_11619" data-name="Group 11619">
                                                                <path id="Path_15839" data-name="Path 15839" d="M13.873,13.239,10.259,9.682A5.717,5.717,0,0,0,11.787,5.8,5.844,5.844,0,0,0,5.9,0,5.844,5.844,0,0,0,.006,5.8a5.844,5.844,0,0,0,5.89,5.8A5.924,5.924,0,0,0,9.6,10.3l3.629,3.571a.458.458,0,0,0,.641,0A.441.441,0,0,0,13.873,13.239ZM5.9,10.7A4.945,4.945,0,0,1,.912,5.8,4.945,4.945,0,0,1,5.9.892,4.945,4.945,0,0,1,10.88,5.8,4.945,4.945,0,0,1,5.9,10.7Z" transform="translate(-0.006 0)" fill="#707070" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="nav_sub-item ">

                                        <div onClick={() => makeappear2('image3','text4')} className="nav_sub-item-imagegrid">
                                            <div id="text4" className="nav_sub-item-text ">
                                                Lorem ipsum dolor sit amet,
                                            </div>
                                            <div id="image3" className="image4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" /></svg></div>
                                        </div>
                                    </div>
                                    <div onClick={() => makeappear2('image4','text5')} className="nav_sub-item ">
                                        <div className="nav_sub-item-imagegrid">
                                            <div id="text5" className="nav_sub-item-text ">
                                                Lorem ipsum dolor sit amet,
                                            </div>
                                            <div id="image4" className="image4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" /></svg></div>
                                        </div>

                                    </div>

                                </div>

                                {/* <div className="nav_sub">
                                    <div class="search-container">
                                        <input type="text" placeholder="Search.." name="search"></input>
                                        <button><svg xmlns="http://www.w3.org/2000/svg" id="Group_13362" data-name="Group 13362" width="14" height="14" viewBox="0 0 14 14">
                                                <rect id="Rectangle_5105" data-name="Rectangle 5105" width="14" height="14" fill="none"/>
                                                <g id="search-interface-symbol" transform="translate(0)">
                                                    <g id="_x34__4_" transform="translate(0)">
                                                    <g id="Group_11619" data-name="Group 11619">
                                                        <path id="Path_15839" data-name="Path 15839" d="M13.873,13.239,10.259,9.682A5.717,5.717,0,0,0,11.787,5.8,5.844,5.844,0,0,0,5.9,0,5.844,5.844,0,0,0,.006,5.8a5.844,5.844,0,0,0,5.89,5.8A5.924,5.924,0,0,0,9.6,10.3l3.629,3.571a.458.458,0,0,0,.641,0A.441.441,0,0,0,13.873,13.239ZM5.9,10.7A4.945,4.945,0,0,1,.912,5.8,4.945,4.945,0,0,1,5.9.892,4.945,4.945,0,0,1,10.88,5.8,4.945,4.945,0,0,1,5.9,10.7Z" transform="translate(-0.006 0)" fill="#707070"/>
                                                    </g>
                                                    </g>
                                                </g>
                                                </svg></button>
                                    </div>
                                    <div className="nav_sub-item ">
                                    <div className="nav_sub-item-imagegrid">
                                    <div className="nav_sub-item-text ">
                                    Lorem ipsum dolor sit amet,
                                    </div>
                                    <div className="image4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"/></svg></div>
                                    </div>
                                    </div>
                                    <div className="nav_sub-item ">
                                    <div className="nav_sub-item-imagegrid">
                                    <div className="nav_sub-item-text ">
                                    Lorem ipsum dolor sit amet,
                                    </div>
                                    <div className="image4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"/></svg></div>
                                    </div>

                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="block2-2">
                        <div className="block2-2-1">

                            <div onClick={() => makeappear1('test-hover3')} className=" block2-2-1-1 block2-2-1-1-hover">
                                <div className="text4">Phương thức vận chuyển</div>
                                <div className="text9">Xe công ty</div>

                                <div id="test-hover3" className="test-hover">

                                    <div class="search-container2">
                                        <div className="input-grid">
                                            <input type="text" placeholder="Nhập tên, ID nhân viên" name="search"></input>
                                            <button><svg xmlns="http://www.w3.org/2000/svg" id="Group_13362" data-name="Group 13362" width="14" height="14" viewBox="0 0 14 14">
                                                <rect id="Rectangle_5105" data-name="Rectangle 5105" width="14" height="14" fill="none" />
                                                <g id="search-interface-symbol" transform="translate(0)">
                                                    <g id="_x34__4_" transform="translate(0)">
                                                        <g id="Group_11619" data-name="Group 11619">
                                                            <path id="Path_15839" data-name="Path 15839" d="M13.873,13.239,10.259,9.682A5.717,5.717,0,0,0,11.787,5.8,5.844,5.844,0,0,0,5.9,0,5.844,5.844,0,0,0,.006,5.8a5.844,5.844,0,0,0,5.89,5.8A5.924,5.924,0,0,0,9.6,10.3l3.629,3.571a.458.458,0,0,0,.641,0A.441.441,0,0,0,13.873,13.239ZM5.9,10.7A4.945,4.945,0,0,1,.912,5.8,4.945,4.945,0,0,1,5.9.892,4.945,4.945,0,0,1,10.88,5.8,4.945,4.945,0,0,1,5.9,10.7Z" transform="translate(-0.006 0)" fill="#707070" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg></button>
                                        </div>
                                    </div>
                                    <div onClick={() => makeappear2('image5','text6')} className="nav_sub-item ">
                                        <div className="nav_sub-item-imagegrid">
                                            <div id='text6' className="nav_sub-item-text ">
                                                Xe công ty
                                            </div>
                                            <div id='image5' className="image3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" /></svg></div>
                                        </div>
                                    </div>
                                    <div onClick={() => makeappear2('image6','text7')} className="nav_sub-item ">
                                        <div className="nav_sub-item-imagegrid">
                                            <div id='text7' className="nav_sub-item-text ">
                                                Xe công ty
                                            </div>
                                            <div id='image6' className="image3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" /></svg></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div onClick={() => makeappear1('test-hover4')} className=" block2-2-1-1 block2-2-1-1-hover2">
                                <div className="text4">Hình thức thanh toán</div>
                                <div className="text9">Thanh toán khi nhận hàng (COD)</div>

                                <div id="test-hover4" className="test-hover">

                                    <div class="search-container2">
                                        <div className="input-grid">
                                            <input type="text" placeholder="Nhập tên, ID nhân viên" name="search"></input>
                                            <button><svg xmlns="http://www.w3.org/2000/svg" id="Group_13362" data-name="Group 13362" width="14" height="14" viewBox="0 0 14 14">
                                                <rect id="Rectangle_5105" data-name="Rectangle 5105" width="14" height="14" fill="none" />
                                                <g id="search-interface-symbol" transform="translate(0)">
                                                    <g id="_x34__4_" transform="translate(0)">
                                                        <g id="Group_11619" data-name="Group 11619">
                                                            <path id="Path_15839" data-name="Path 15839" d="M13.873,13.239,10.259,9.682A5.717,5.717,0,0,0,11.787,5.8,5.844,5.844,0,0,0,5.9,0,5.844,5.844,0,0,0,.006,5.8a5.844,5.844,0,0,0,5.89,5.8A5.924,5.924,0,0,0,9.6,10.3l3.629,3.571a.458.458,0,0,0,.641,0A.441.441,0,0,0,13.873,13.239ZM5.9,10.7A4.945,4.945,0,0,1,.912,5.8,4.945,4.945,0,0,1,5.9.892,4.945,4.945,0,0,1,10.88,5.8,4.945,4.945,0,0,1,5.9,10.7Z" transform="translate(-0.006 0)" fill="#707070" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg></button>
                                        </div>
                                    </div>
                                    <div onClick={() => makeappear2('image7','text8')} className="nav_sub-item ">
                                        <div className="nav_sub-item-imagegrid">
                                            <div id="text8" className="nav_sub-item-text ">
                                                Thanh toán khi nhận hàng (COD)
                                            </div>
                                            <div id="image7" className="image2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" /></svg></div>
                                        </div>
                                    </div>
                                    <div onClick={() => makeappear2('image8','text9')} className="nav_sub-item ">
                                        <div className="nav_sub-item-imagegrid">
                                            <div id="text9" className="nav_sub-item-text ">
                                                Thanh toán khi nhận hàng (COD)
                                            </div>
                                            <div id="image8" className="image2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" /></svg></div>
                                        </div>
                                    </div>

                                </div>

                                {/* <div className="nav_sub">
                                <div class="search-container">
                                    <input type="text" placeholder="Search.." name="search"></input>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" id="Group_13362" data-name="Group 13362" width="14" height="14" viewBox="0 0 14 14">
                                            <rect id="Rectangle_5105" data-name="Rectangle 5105" width="14" height="14" fill="none"/>
                                            <g id="search-interface-symbol" transform="translate(0)">
                                                <g id="_x34__4_" transform="translate(0)">
                                                <g id="Group_11619" data-name="Group 11619">
                                                    <path id="Path_15839" data-name="Path 15839" d="M13.873,13.239,10.259,9.682A5.717,5.717,0,0,0,11.787,5.8,5.844,5.844,0,0,0,5.9,0,5.844,5.844,0,0,0,.006,5.8a5.844,5.844,0,0,0,5.89,5.8A5.924,5.924,0,0,0,9.6,10.3l3.629,3.571a.458.458,0,0,0,.641,0A.441.441,0,0,0,13.873,13.239ZM5.9,10.7A4.945,4.945,0,0,1,.912,5.8,4.945,4.945,0,0,1,5.9.892,4.945,4.945,0,0,1,10.88,5.8,4.945,4.945,0,0,1,5.9,10.7Z" transform="translate(-0.006 0)" fill="#707070"/>
                                                </g>
                                                </g>
                                            </g>
                                            </svg></button>
                                </div>
                                    <div className="nav_sub-item ">
                                    <div className="nav_sub-item-imagegrid">
                                    <div className="nav_sub-item-text ">
                                    Thanh toán khi nhận hàng (COD)
                                    </div>
                                    <div className="image2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"/></svg></div>
                                    </div>
                                    </div>
                                    <div className="nav_sub-item ">
                                    <div className="nav_sub-item-imagegrid">
                                    <div className="nav_sub-item-text ">
                                    Thanh toán khi nhận hàng (COD)
                                    </div>
                                    <div className="image2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"/></svg></div>
                                    </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="block2-2-2">
                            <div className="text5">Chứng từ kế toán</div>
                            <div className="text6">Đồng bộ</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default ContentsFlow1;