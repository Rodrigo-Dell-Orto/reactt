import React from 'react';

const CartWidget = () => {
    return (
        <div style={styles.cart}>
            <span role="img" aria-label="cart">🛒</span>
            <span style={styles.counter}>3</span>
        </div>
    );
};

const styles = {
    cart: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        fontSize: '1.2rem',
    },
    counter: {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '5px 10px',
        fontSize: '0.8rem',
    },
};

export default CartWidget;
