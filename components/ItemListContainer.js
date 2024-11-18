import React from "react";


const ItemListContainer = ({ greeting }) => {
    return (
        <div style={styles.container}>
            <h2>{greeting}</h2>
        </div>
    );
};


const styles = {
    container: {
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        textAlign: "center",
        marginTop: "20px",
    },
};

export default ItemListContainer;
