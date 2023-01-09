import { useContext, useEffect, useState } from "react";
import { Product } from "../../models/product-model";
import "./product-card-styles.css";
import { CartContext } from "../../contexts/cart-context";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { cart } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(0);

  function handleAddProductToCart() {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    setProductQuantity(productQuantity + 1);
    if (productIndex > -1) {
      cart[productIndex].quantity += 1;
      cart[productIndex].price = productQuantity * product.price;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  }

  console.log(cart);
  function handleIncrementQuantity() {
    handleAddProductToCart();
  }
  function handleDecrementQuantity() {
    setProductQuantity(() => {
      if (productQuantity <= 0) return 0;

      return productQuantity - 1;
    });
  }

  function renderProductQuantity() {
    if (productQuantity === 0) return product.price;
    return productQuantity * product.price;
  }
  return (
    <div className="container">
      <div className="container page-wrapper">
        <div className="page-inner">
          <div className="column">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src={product.image} alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{product.title}</span>
                    <span className="p-company">{product.category}</span>
                  </div>
                  <div className="a-size">
                    <button onClick={handleIncrementQuantity}>+</button>
                    {productQuantity}
                    <button onClick={handleDecrementQuantity}>-</button>
                  </div>
                </div>
              </div>

              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <a className="cart">
                  <span className="price">
                    R${renderProductQuantity().toFixed(2)}
                  </span>
                  <span className="add-to-cart">
                    <span className="txt" onClick={handleAddProductToCart}>
                      Add in cart
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
