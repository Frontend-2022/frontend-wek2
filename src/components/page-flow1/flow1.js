import React from "react";
import '../Basis/grid.css';
import { Link } from "react-router-dom";
import Nav from '..//Navigation/nav1'; 
import './flow1.css';
import ContentsFlow1 from "./contents-flow1/contentsFlow1";
import CartFlow1 from "./cart-flow1/cartFlow1";
import CreditFlow1 from "./credit-action-flow1/creditFlow1";
import ActionFlow1 from "./credit-action-flow1/actionFlow1";
import HeaderFlow1 from "./header-flow1/headerFlow1";
import HeaderFlow1Fixed from "./header-flow1-fixed/headerFlow1Fixed";
function Flow1() {
    return(
        <div className="flow1">
            <Nav />
            <HeaderFlow1Fixed />
            <div className="grid wide1">
                <HeaderFlow1 />
                
                <div className="contents-flow1">
                    <ContentsFlow1 />
                    <CartFlow1 />
                    <CreditFlow1 />
                    <ActionFlow1 />
                </div>
            </div>                
        </div>
    )
}

export default Flow1;