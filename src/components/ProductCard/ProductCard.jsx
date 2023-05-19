import React from "react";

const ProductCard = ({ img_url, product_name, product_availability, product_price, product_sales }) => {

    const p1 = <p className="product_availability"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
    </svg>в наличии</p>;
    const p2 = <p className="product_availability">нет в наличии</p>

    function calculateDiscountedPrice(price, product_sales) {
        const discount = product_price * product_sales / 100;
        const discountedPrice = price - discount;
        return discountedPrice;
    }
    const discountedPrice = calculateDiscountedPrice(product_price, product_sales);


    if (product_sales > 0) {
        return (
          <div className="productCard">
            <div class="onsale"> <p>-{product_sales}%</p></div>
            <img src={img_url} alt="" />
            <a href="#">{product_name}</a>
            {product_availability ? p1 : p2}
            <p className="productPrice "><span className="price-without-discount">{product_price}сом</span> {discountedPrice} сом</p>
            <button>Купить</button>
          </div>
        );
      } else {
        return (
          <div className="productCard">
            <img src={img_url} alt="" />
            <a href="#">{product_name}</a>
            {product_availability ? p1 : p2}
            <p className="productPrice ">{product_price} сом</p>
            <button>Купить</button>
          </div>
        );
      }
      


}

export default ProductCard