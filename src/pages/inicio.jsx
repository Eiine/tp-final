// Inicio.jsx
import React, { useEffect, useState } from "react";

import { obtenerLibros } from "../util/crud";
import styles from "./inicio.module.css"; 
import { Link } from "react-router-dom";

export default function Inicio() {
  const [libros, setLibros] = useState([]); 

  useEffect(() => {
    async function fetchLibros() {
      const data = await obtenerLibros();
      console.log(data);
      
      
      setLibros(data); 
    }
    fetchLibros();
  }, []);

  return (
  <div className={styles.grid}>
    {libros.length > 0 ? (
      libros.map((libro) => (
        <Link
          to={`/detalle/${libro.id}`} 
          key={libro.id}
          className={styles.card} 
        >
          {libro.imagen && (
            <img
              src={libro.imagen}
              alt={libro.nombre}
              className={styles.imagen}
            />
          )}
          <h2 className={styles.titulo}>{libro.nombre}</h2>
          <p className={styles.detalle}>{libro.detalle}</p>
        </Link>
      ))
    ) : (
      <p>Cargando libros.</p>
    )}
  </div>
)};