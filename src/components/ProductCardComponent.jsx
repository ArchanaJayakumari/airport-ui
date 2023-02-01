import React from 'react'
import '../assets/styles/ProductCard1.css'

function ProductCardComponent({product, width, height}) {
    return (
        <div className="card1" style={{ width: `${width}px`, height: `${height}px` }}>
            <div className='image-container1'>
                {product.showOffer && <div className="overlay-text1">{product.offer}</div>}
                <img src={product.image} className="card-image1" alt={product.name} />
            </div>
            <div className="card-body1">
                <h2 className="card-title1">{product.name}</h2>
                <p className="card-description1">{product.description}</p>
            </div>
            <button className="card-btn1">{product.btn}</button>
        </div>
    )
}

export default ProductCardComponent
