import React from "react";
import { Nav, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/header.module.css';
import { useState } from 'react';

export default function HeaderPage() {

  const [showNav, setShowNav] = useState(false); // Inicializa el estado del componente

  function handleButtonClick() {
    setShowNav(!showNav); // Invierte el estado del componente al hacer clic en el botón
  }

  const handleOnClick = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");


  }

  return (
    <>
      <Nav className={`navbar navbar-expand-lg navbar-dark d-flex flex-row bd-highlight mb-3 ${styles.navbar}`}>
        <div className="container-xl ">
          <div className={`navbar-brand ${styles["navbar-brand"]}`} >
              
              <span className="ms-3">TYPSA RESERVA</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleButtonClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`} >
            <ul className={`navbar-nav mr-auto ${styles["navbar-nav"]}`}>
              <li className="nav-item active">
                <Link className={`nav-link home ${styles["nav-link"]}`} href="/">
                  Home
                </Link>
              </li>
            </ul>
            <ul className={`navbar-nav mr-auto ${styles["navbar-nav"]}`}>
              <li className="nav-item active">
                <Link className={`nav-link home ${styles["nav-link"]}`} onClick={handleOnClick} href="/">
                  Cerrar Sesion
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </Nav>
    </>
  );
}
