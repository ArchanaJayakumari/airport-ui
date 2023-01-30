import React from 'react'
import '../assets/styles/ProductCard.css'

function ProductCardComponent({product, width, height}) {
    return (
        <div className="card" style={{ width: `${width}px`, height: `${height}px` }}>
        <img src={product.image} className="card__image" alt={product.name} />
            <div className="card__body">
                <h2 className="card__title">{product.name}</h2>
                <p className="card__description">{product.description}</p>
            </div>
            <button className="card__btn">{product.btn}</button>
        </div>
    )
}

export default ProductCardComponent
