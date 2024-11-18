import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.brand}>Mi E-commerce</h1>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <a href="#home">Inicio</a>
                </li>
                <li style={styles.navItem}>
                    <a href="#productos">Productos</a>
                </li>
                <li style={styles.navItem}>
                    <a href="#contacto">Contacto</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
};


const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "white",
    },
    brand: {
        fontSize: "1.5rem",
    },
    navList: {
        listStyle: "none",
        display: "flex",
        gap: "15px",
        margin: 0,
        padding: 0,
    },
    navItem: {
        textDecoration: "none",
        color: "white",
    },
};

export default NavBar;
