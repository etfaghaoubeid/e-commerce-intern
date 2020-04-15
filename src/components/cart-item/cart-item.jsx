import React from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTrashRestore
} from "@fortawesome/free-solid-svg-icons";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from "../../redux/cart/cart.actions";

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  const { name, quantity } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="btn btn-dark" onClick={() => decreaseQuantity(item)}>
          <FontAwesomeIcon icon={faMinus} />{" "}
        </span>
        <span>
          {" "}
          <strong>{quantity}</strong>{" "}
        </span>
        <span className="btn  btn-dark" onClick={() => increaseQuantity(item)}>
          <FontAwesomeIcon icon={faPlus} />{" "}
        </span>
      </td>
      <td>
        <span onClick={() => removeItem(item)} className="btn btn-danger">
          <FontAwesomeIcon icon={faTrashRestore} />
        </span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  increaseQuantity: item => dispatch(increaseQuantity(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item)),
  removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CartItem);
