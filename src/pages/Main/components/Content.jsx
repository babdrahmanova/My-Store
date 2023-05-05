import React from "react";
import ProductCard from "../../../components/ProductCard";
import Button from "../../../components/Button/Button";
import { productData } from "../../../components/productData";

const Content = () => {
    return (
        <>
            <ProductCard data={productData} />
           {/*  <Button/>
            <Button text="Send" classList="btn btn-success"/>
            <Button text="Save"/>
 */}
        </>
    )
}

export default Content;

