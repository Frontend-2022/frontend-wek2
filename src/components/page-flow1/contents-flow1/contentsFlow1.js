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
                                </div>
                                <div className=" block2-1-1-1"> 
                                </div>
                            </div>
                            <div className="block2-1-1">
                                <div className=" block2-1-1-2"> 
                                </div>
                                <div className=" block2-1-1-2"> 
                                </div> 
                            </div>
                        </div>
                        <div className="block2-2">
                            <div className="block2-2-1"> 
                                <div className=" block2-2-1-1"> 
                                </div>
                                <div className=" block2-2-1-1"> 
                                </div>
                            </div>
                            <div className="block2-2-2"> 
                            </div>
                        </div>
    
                    </div>

                </div>
            
            </div>
            
            
        )
    }
}

export default ContentsFlow1;