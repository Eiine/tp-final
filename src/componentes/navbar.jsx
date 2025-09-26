// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Mi Empresa</div>
        <ul className={styles.links}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/creacion">Creación</Link></li>
         <li><Link to="/Editar">Editar</Link></li>
          
        </ul>
      </div>
    </nav>
  );
}
