import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem-image">
                <img src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="product name" />
            </div>
            <Link to={`/product/${111}`} className="cartitem-name">
                <p>Product Name</p>
            </Link>
            <p className="cartitem-price">$499.99</p>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
          ))
        </select>
            <button
                className="cartitem-deleteBtn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default CartItem;