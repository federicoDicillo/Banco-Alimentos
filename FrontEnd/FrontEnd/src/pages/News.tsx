import React, { Fragment } from 'react';
import '../styles/News.css';
import ImgA from '../assets/6.jpeg';
import ImgB from '../assets/3.jpeg';
import ImgC from '../assets/5.jpg';
import ImgD from '../assets/10.jpg';
import ImgE from '../assets/7.jpg';
import ImgF from '../assets/8.jpeg';
import FooterComponent from '../components/container/FooterComponent';

const News = () => {
  return (
    <Fragment>
      <div className="container container-news">
        <h1 className="col-12 text-center headerh1">Novedades</h1>

        <div className="row  ">
          <div className="col-lg-6  col-sm-12 col-xs-12">
            <img className="img-news" src={ImgA} alt="" />
            <h4 className="header-h4">
              Rescatan y reparten mas de 50.000 kilos
              <br />
              por mes de verduras y frutas
            </h4>
            <p className="p-new">
              Banco de Alimentos de Balcarce, Tandil y Mar del Plata armaron un
              centro de recuperación y suman al INTA para un trabajo en
              conjunto.
              <br />{' '}
              <a
                href="https://www.lanacion.com.ar/economia/campo/rescatan-y-reparten-mas-de-50000-kilos-por-mes-de-verduras-y-frutas-para-ayudar-nid11032021/"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más
              </a>{' '}
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12">
            <img className="img-news" src={ImgB} alt="" />
            <h4 className="header-h4">
              Se logró desde Balcarce el mayor rescate <br />
              de alimentos de la historia de Argentina
            </h4>
            <p className="p-new">
              El Banco de Alimentos anunció que luego de cinco meses de trabajo
              junto a McCain y muchos voluntarios, lograron el mayor rescate de
              la historia
              <br />
              <a
                href=" https://www.minutobalcarce.com.ar/balcarce-solidario-desde-el-banco-de-alimentos-ya-distribuyeron-25-millones-de-kilos-de-papas-a-todo-el-pais/"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más{' '}
              </a>{' '}
            </p>
          </div>
        </div>

        <div className="row ">
          <div className="col">
            <img className="img-news" src={ImgC} alt="" />
            <h4 className="header-h4">
              El INTA se une al Banco de Alimentos <br />
              de Balcarce
            </h4>
            <p className="p-new">
              El INTA firmó un acuerdo con el Banco de Alimentos de Balcarce
              para rescatar frutas y verduras que se desechan por diferentes
              defectos.
              <br />
              <a
                href=" https://www.minutobalcarce.com.ar/balcarce-solidario-desde-el-banco-de-alimentos-ya-distribuyeron-25-millones-de-kilos-de-papas-a-todo-el-pais/"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más
              </a>{' '}
            </p>
          </div>
          <div className="col">
            <img className="img-news" src={ImgD} alt="" />
            <h4 className="header-h4">
              Ya se distribuyeron más de 2,5 millones <br />
              de kilos de papas a todo el país.
            </h4>
            <p className="p-new">
              “Hoy sobra papa, hoy hay gente que la necesita”.
              <br />
              <a
                href=" https://www.minutobalcarce.com.ar/balcarce-solidario-desde-el-banco-de-alimentos-ya-distribuyeron-25-millones-de-kilos-de-papas-a-todo-el-pais/"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6  col-sm-12 col-xs-12">
            <img className="img-news" src={ImgE} alt="" />
            <h4 className="header-h4">
              Volkswagen Group Argentina, BASF <br />y Banco de Alimentos
              Balcarce se unen
            </h4>
            <p className="p-new">
              La alianza permitió distribuir alimentos con gran valor
              nutricional a mas de 25.000 personas en situación de
              vulnerabilidad social en gran parte del país.
              <br />{' '}
              <a
                href="https://noticias.autocosmos.com.ar/2021/05/06/volkswagen-argentina-basf-y-banco-de-alimentos-balcarce-se-unen-para-la-recuperacion-de-alimentos"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más
              </a>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img className="img-news" src={ImgF} alt="" />
            <h4 className="header-h4">
              Cómo buscan recuperar los 16 millones <br />
              de toneladas que se desperdician por año
            </h4>
            <p className="p-new">
              La alianza de agricultores y mercados concentrados de productos es
              una de las acciones que impulsan.
              <br />
              <a
                href=" https://www.lanacion.com.ar/sociedad/bancos-de-alimentos-como-buscan-recuperar-los-16-millones-de-toneladas-que-se-desperdician-por-ano-nid04072022/"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-participate">
        <FooterComponent />
      </div>
    </Fragment>
  );
};

export default News;
