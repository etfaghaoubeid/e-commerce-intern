import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ProductItem = ({ item, addItem, removeItem }) => {
  const { imageUrl, description, name, price } = item;
  return (
    <Col lg={3} xs={12} md={4} sm={6} className="mb-3">
      <Card width={80} height={400}>
        <Card.Img variant="top" src={imageUrl} width={70} height={300} />
        <Card.Body>
          <h6>{name}</h6>
          <Card.Text>
            {description.slice(0,44)}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
      
          <span className="btn btn-dark" onClick={() => addItem(item)}>
            Add to cart
          </span>
            <span> <strong>${price}</strong></span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(ProductItem);
