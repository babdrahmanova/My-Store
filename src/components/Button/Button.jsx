import React from "react";
import {styles} from "./Button.module.css"

const ButtonStyles = {
    width: "250px",
    fontSize: "20px"
}

const Button = ({ text, classList }) => <button style={ButtonStyles} className={styles.myButton}>{text}</button>

Button.defaultProps = {
    text: "Добавить в корзину",
    classList: "btn btn-primary"
}


export default Button;