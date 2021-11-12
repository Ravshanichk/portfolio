import React from "react"
import './Product.css'

const Product = (props) => {
    debugger
    return (
        <div className="p" id={props.id}>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={props.img} alt="" className="p-img"></img>
            </a>
        </div>
    )
}

export default Product
