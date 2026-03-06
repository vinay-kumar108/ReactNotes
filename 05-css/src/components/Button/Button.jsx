import React from "react"
import Styles from "./Button.module.css"
const Button = () => {
    return (<>
        <div className={Styles.text}>Below is a button
            <button className={Styles.btn}>Click me</button>
        </div>

    </>)
}

export default Button