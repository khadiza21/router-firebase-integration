import React from 'react';
import useFirebase from '../../hooks/useFirebae';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>This is Products</h2>
            <h5>{user ? user.displayName : 'ghost'}</h5>
        </div>
    );
};

export default Products;