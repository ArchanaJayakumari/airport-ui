import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'


const product1 = {
    name: "Porter Service",
    description: "Ease your travel while we carry your luggage. Porter service is available to help you with your luggage and make your journey a little more comfortable.",
    image: "images/porter.jpg",
    btn:"Book Now"
};

const product2 = {
    name: "Duty Free",
    description: "Pre-order the duty-free products at your convenience. Our catalogue has a wide range of premium and international brands",
    image: "images/dutyfree.png",
    btn:"Shop Now"
};

function Home() {
    return (
        <div>
            <div className='wrapper'>
                <ProductCardComponent product={product1} width={300} height={360} />
            </div>
                <ProductCardComponent product={product2} width={500} height={340} />
        </div>
        
    )
}

export default Home
