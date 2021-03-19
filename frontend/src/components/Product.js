import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <img
                src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Product Name" />

            <div className="product-info">
                <p className="info-name">Produt 1</p>
                <p className="info-description">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
            </div>
            <p className="info-price">$499.99</p>
            <Link to={`/product/${1111}`} className="info-button">View</Link>
        </div>
    )
}

export default Product;