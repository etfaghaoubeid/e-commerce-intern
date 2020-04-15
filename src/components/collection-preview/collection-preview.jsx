import React from "react";
import {connect } from "react-redux";
import Row from "react-bootstrap/Row";
import CollectionItem from "../collection-item/collection-item";


const CollectionPreview = ({ items }) => {
    
    return (
        <Row className="mb-3" >
            {items.map((collection, idex) => <CollectionItem key={idex} collection={collection} />)}
        </Row>
    )
}
const mapStateToProps = state=>({
    items:state.shop.items

})
export default connect(mapStateToProps, null)(CollectionPreview);