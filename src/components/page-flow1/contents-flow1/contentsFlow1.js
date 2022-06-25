import React from "react";
import './contentsFlow1.css';
import { BiWifi0 } from "react-icons/bi";

// function myFunction() {
//     document.getElementById("list").style.display = 'block';
// }

class ContentsFlow1 extends React.Component {
    
    render() {
        return(
            <div className="contentsflow1">
                <div className="category-container">
                    <div id="list" className="row container-category-position">
                        <div className="list1">
                            <div className="text1">Đơn hàng</div>
                        </div>
                        <div className="list2">
                            <div className="text2">Vận chuyển</div>
                        </div>
                        <div className="list3">
                            <div className="text1">Chứng từ</div>
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
                                <div className=" block2-1-1-1"> 
                                <div className="text3">Người bán</div>
                                <div className="imagegrid">
                                <div className="image"></div>
                                <div className="text8">Nguyễn Văn Mười Ba</div>
                                </div>
                                </div>
                                <div className=" block2-1-1-1"> 
                                <div className="text3">Ngày đặt</div>
                                <div className="text7">dd/mm/yyyy</div>
                                <input type="date"></input>
                                </div>
                            </div>
                            <div className="block2-1-1">
                                <div className=" block2-1-1-2"> 
                                <div className="text3">Ngày giao</div>
                                <div className="text7">dd/mm/yyyy</div>
                                <input type="date"></input>
                                </div>
                                <div className=" block2-1-1-2">
                                <div className="text3">Kho bán hàng</div> 
                                <div className="text9">Lorem ipsum dolor sit amet,</div>
                                </div> 
                            </div>
                        </div>
                        <div className="block2-2">
                            <div className="block2-2-1"> 
                                <div className=" block2-2-1-1"> 
                                <div className="text4">Phương thức vận chuyển</div>
                                <div className="text9">Xe công ty
                                <div className="nav_sub">
                                    <div className="nav_sub-item ">
                                     Our Company
                                    </div>
                                </div></div>
                                </div>
                                <div className=" block2-2-1-1"> 
                                <div className="text4">Hình thức thanh toán</div>
                                <div className="text9">Thanh toán khi nhận hàng (COD)</div>
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
}

export default ContentsFlow1;