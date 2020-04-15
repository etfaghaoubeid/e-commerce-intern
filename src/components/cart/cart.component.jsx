import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

import CartItem from "../cart-item/cart-item";

const Cart = ({ cartItems }) => {
  return (
    <>
      {cartItems.length >= 1 ? (
        <Table size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </tbody>
        </Table>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </>
  );
};
const mapStateToProps = state => ({
  cartItems: state.cart.items
});

export default connect(mapStateToProps, null)(Cart);
