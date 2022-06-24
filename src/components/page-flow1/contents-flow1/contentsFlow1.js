import React from "react";
import './contentsFlow1.css';


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
                    </div>
                    <div className="block1-2"> 
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