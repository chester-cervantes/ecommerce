import './ProductScreen.css';

const ProductScreen = () => {
    return (
        <div className="productscreen">
            ProductScreen
            <div className="productscreen-left">
                <div className="left-image">
                    <img
                        src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="product name" />

                </div>
                <div className="left-info">
                    <p className="left-name">Product 1</p>
                    <p className="left-description">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
                    <p className="left-price">$499.99</p>
                </div>
            </div>

            <div className="productscreen-right">
                <div className="right-info">
                    <p className="right-name">Product 1</p>
                    <p className="right-price"><span>$499.99</span></p>
                    <p className="right-stock"><span>In stock</span></p>
                    <p className="right-quantity">Quantity
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add to cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;