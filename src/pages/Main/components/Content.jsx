import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { productData } from "../../../constants/productData";



const Content = () => {

    const products = productData.map((item) => {
        return (
            <ProductCard
                key={item.id}
                img_url={item.img_url}
                product_name={item.product_name}
                product_availability={item.product_availability}
                product_price={item.product_price}
                product_sales={item.product_sales}
            />
        )
    })

    return (
        <>
            <h1>Наши товары</h1>
            <div className="d-flex justify-content-center mt-3">
                {products}
            </div>
        </>
    )
}

export default Content;

