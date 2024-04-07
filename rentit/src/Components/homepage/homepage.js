import React from "react";
import Home from "./home/home";
import Strip from "./stripe/strip";
import Triplet from './triplets/triplet';
import Product1 from "./Products/products1";
import Product2 from "./Products/product2";
import Product3 from "./Products/product3";
import Product4 from "./Products/product4";
import Window from "./window/window";




export default function Homepage(){
    return(
        <>
        <Home/>
        <Strip/>
        <Triplet/>
        <Product1/>
        <Window/>
        <Product2/>
        <Product3/>
        <Product4/>
        </>
    )
}
