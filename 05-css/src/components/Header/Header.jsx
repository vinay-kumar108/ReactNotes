import React from "react"
import Styles from "./Header.module.css"
const Header = () => {
    return (<>
        <div className={Styles.text}>I am Header

            <button className={Styles.btn}>Click header </button>
        </div>

    </>)
}

export default Header