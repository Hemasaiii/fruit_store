import React from "react";

const CartDetails = ({ cart, setCart }) => {

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  // convert price to number safely
  const getNumericPrice = (price) => {
    if (typeof price === "string") {
      return parseInt(price.replace(/[^\d]/g, ""));
    }
    return price;
  };

  const totalAmount = cart.reduce((total, item) => {
    const price = getNumericPrice(item.price);
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="cart-details">
      <h2>Cart Details</h2>

      <table>
        <thead>
          <tr>
            <th>Fruit</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => {
            const price = getNumericPrice(item.price);

            return (
              <tr key={item.id}>
                <td>{item.name}</td>

                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                </td>

                <td>Rs.{price}/kg</td>

                <td>₹{price * item.quantity}</td>

                <td>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="3"><b>Total Amount:</b></td>
            <td><b>₹{totalAmount}</b></td>
            <td></td>
          </tr>
        </tfoot>

      </table>
    </div>
  );
};

export default CartDetails;