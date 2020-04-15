import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const CollectionItem = ({ collection, addItem, removeItem }) => {
  const { imageUrl, description, name, price } = collection;
  return (
    <Col lg={3} xs={12} md={4} sm={6}>
      <Card>
        <Card.Img variant="top" src={imageUrl} width={70} height={300} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description} ...
          </Card.Text>
          <cardFooter >
      
          <div
              className="btn btn-dark"
              
            onClick={() => addItem(collection)}>
            Add to cart
          </div>
          <div> <strong>${price}</strong></div>
            </cardFooter>
        </Card.Body>
      </Card>
    </Col>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
  // removeItem:item=>dispatch(removeItem(item))
});
const cardFooter = styled.div`
  display: flex;
  justify-content: center;
  /* align-items:space-between; */
`;

export default connect(null, mapDispatchToProps)(CollectionItem);
