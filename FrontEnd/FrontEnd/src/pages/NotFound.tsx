import React from 'react';
import '../styles/NotFound.css';
import P404 from '../assets/Swayingdoor 404.png';
function NotFound() {
  return (
    <div className="header-notfound">
      <h2 className="h2-notfound">Pagina no Encontrada</h2>
      <img src={P404} alt="" className="Img404" />
      <h4 className="message">Ups, la pagina no ha sido encontrada</h4>
    </div>
  );
}

export default NotFound;
