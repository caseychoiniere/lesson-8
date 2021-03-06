import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions';
import CustomButton from '../custom-button/custom-button';
import './collection-item.styles.scss';

const CollectionItem = ({addItem, item}) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    )
};

const mapDispatchToProps = {
    addItem
};

export default connect(null, mapDispatchToProps)(CollectionItem);
