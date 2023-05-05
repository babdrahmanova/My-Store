import React from "react";

/* adding inline style */
const ButtonStyles = {
    width: "250px",
    fontSize: "20px"
}

const Button = ({ text, classList }) => <button style={ButtonStyles} className="my-button">{text}</button>

Button.defaultProps = {
    text: "Добавить в корзину",
    classList: "btn btn-primary"
}


export default Button;