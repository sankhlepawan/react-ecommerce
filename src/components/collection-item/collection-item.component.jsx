import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart';
import './collection-item.style.scss';


const CollectionItem = ( { item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
       <div className="collection-item">
        <div className="image" style={
            { backgroundImage: `url(${imageUrl})` }
        }>
        </div>
        <div className="collection-footer">
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);