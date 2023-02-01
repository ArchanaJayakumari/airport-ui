import React, { useState} from 'react'
import '../assets/styles/ProductCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaRegHeart} from 'react-icons/fa';
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import {RxHamburgerMenu} from 'react-icons/rx';
import {BsBookmarkStar} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ProductCard({product, width, height}) {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    return (
        <div className="product-card" style={{ width: `${width}px`, height: `${height}px` }}>
            <div className='card-container'>
                <h5 className="pcard-title">{product.name}</h5>
                <FaRegHeart className="card-favourites"/>
                <div className='image-container'>
                    <img src={product.image} className="card-image" alt={product.name} />
                </div>
                <div className="pcard-body">
                    <p className="card-description">{product.description}</p>
                </div>
                <MdOutlineAddShoppingCart className="card-cart" onClick={handleShow} />
                <Modal className="overlay" size="lg" aria-labelledby="contained-modal-title-vcenter" centered  show={modalShow} onHide={handleClose}>
                    
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                {product.name}
                            </Modal.Title>
                        </Modal.Header>
                        {/* <div style={{ backgroundImage: `url(${product.image})`}}> </div>*/}
                        <Modal.Body>
                                <p>{product.description}</p>
                                <h4>{product.cost}</h4>
                                <h5>{product.offer}</h5>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" className="btn-primary" onClick={handleClose}>
                                Add to Cart
                            </Button>
                            <Button variant="primary" className="btn-warning" onClick={handleClose}>
                                Move to Wishlist
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                </Modal>
                <BsBookmarkStar className='card-wishlist'/>
                <RxHamburgerMenu className="card-more"/>
            </div>
        </div>
    )
}

export default ProductCard