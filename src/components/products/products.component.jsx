import React from "react";
import {connect } from "react-redux";
import Row from "react-bootstrap/Row";
import ProductItem from "../product-item/product-item.component";



const Products = ({ items }) => {
    
    return (
        <Row className="mb-3" >
            {items.map((item, idex) => <ProductItem key={idex} item={item} />)}
        </Row>
    )
}
const mapStateToProps = state=>({
    items:state.shop.items

})
export default connect(mapStateToProps, null)(Products);