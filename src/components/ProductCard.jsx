import React from "react";
import { productData } from "./productData";

const ProductCard = () => {
    return (
        <>
            <div className="justify_content mt50">
                {productData.map((item, index) => (
                    <div className="productCard">
                        <img src={item.img_url} alt="" />
                        <a href="#">{item.product_name}</a>
                        <p className="productPrice ">{item.product_price} сом</p>
                       <p className="product_availability"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>{item.product_availability}</p>
                        <p className="productPrice ">{item.product_price} сом</p>
                        <button>Купить</button>
                    </div>
                ))}
            </div>

        </>
    )
}

export default ProductCard;

