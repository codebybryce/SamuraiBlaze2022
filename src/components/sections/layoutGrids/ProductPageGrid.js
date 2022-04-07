import React from 'react';
import './productPageGrid.css';



const ProductPageGrid = ( { mainPhoto, additionalPhotos, productTitle, productBrand, productPrice, productDescription } ) => {

    return (

        <div className="product-grid-container">
            <div className="product-grid-main-photo">{mainPhoto}</div>
            <div className="product-grid-flex-additional-photos">{additionalPhotos}</div>

            <div className="product-grid-content-text">
                <div className='max-content'>
                    <h1>{productTitle}</h1>
                    <h2>{productBrand}</h2>
                    <span>${productPrice}</span>
                    <span>{productDescription}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductPageGrid;