import React from 'react'
import ProductCard from '../components/ProductCard';
import ProductCardComponent from '../components/ProductCardComponent'


const product1 = {
    name: "Porter Service",
    description: "Ease your travel while we carry your luggage. Porter service is available to help you with your luggage and make your journey a little more comfortable.",
    image: "images/porter.jpg",
    btn:"Book Now",
    showOffer: false,
    cost: "$30"
};

const product2 = {
    name: "Duty Free",
    description: "Pre-order the duty-free products at your convenience. Our catalogue has a wide range of premium and international brands",
    image: "images/dutyfree.png",
    btn:"Shop Now",
    showOffer: false,
    offer: "Upto 30% cashback on AmEx credit cards",
    cost: "$50"
};

function Home() {
    return (
        <div>
            <div className='wrapper'>
               {/*   <ProductCardComponent product={product1} width={300} height={400} />*/}
               <ProductCard product={product2} width={250} height={400} />
            </div>
              <ProductCard product={product1} width={550} height={310} />
        </div>
        
    )
}

export default Home
