import React from 'react';
import '../styles/SocialBar.css';
const social = [
  {
    path: 'https://www.facebook.com/bdabalcarce',
    name: 'Facebook',
    classname: 'icon facebook',
    iclassname: 'fig fig-facebook',
    spanclassname: 'colorsocialF social-img',
  },
  {
    path: 'https://www.instagram.com/bancodealimentosbalcarce/',
    name: 'Instagram',
    classname: 'icon instagram',
    iclassname: 'fig fig-instagram',
    spanclassname: 'colorsocialI social-img',
  },
  {
    path: 'https://www.linkedin.com/company/banco-de-alimentos-balcarce/',
    name: 'LinkedIn',
    classname: 'icon linkedin',
    iclassname: 'fig fig-linkedin',
    spanclassname: 'colorsocialL social-img',
  },
];

const SocialBar = () => {
  return (
    <div className="social-container absolute">
      {social.map((page, index) => (
        <a
          key={index}
          href={page.path}
          className={page.classname}
          target="_blank"
          rel="noreferrer"
        >
          <span className={page.spanclassname}>
            <i className={page.iclassname}></i>
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
