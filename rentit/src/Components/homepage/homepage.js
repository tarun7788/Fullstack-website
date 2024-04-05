import React from "react";
import Home from "./home/home";
import Strip from "./stripe/strip";
import Triplet from './triplets/triplet';
import Products from "./Products/products";



export default function Homepage(){
    return(
        <>
        <Home/>
        <Strip/>
        <Triplet/>
        <Products/>
        </>
    )
}
