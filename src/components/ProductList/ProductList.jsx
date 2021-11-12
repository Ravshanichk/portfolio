import React from "react"
import Product from "../Product/Product"
import './ProductList.css'
import {products} from '../../data.js'

const ProductList =() => {
    return (
        <div className="pl"> 
            <div className="pl-texts">
                <h1 className="pl-title">Products</h1>
                <p className="pl-desc">
                Чего бы пожрать сегодня
                </p>
            </div>
            <div className="pl-list">
                {products.map(product=>{
                    return <Product img={product.img} key={product.id} link={product.link}/>
                })}
            </div>
        </div>
    )
}

export default ProductList
