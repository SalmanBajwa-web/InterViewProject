import './ProductOne.css'
import React from 'react'

const ProductOne = ({item}) => {
    return (
        <div className="productOne">
            <img src={item.thumbnailUrl} alt="" />
            <h6>
            {item.id}
            </h6>
            <p>
            {item.title.slice(0,40)}
            </p>
        </div>
    )
}

export default ProductOne