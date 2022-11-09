import React, { Fragment } from 'react';
import Gratitud from '../assets/Rectangle 602.png';
import FooterComponent from '../components/container/FooterComponent';
const Gratitude = () => {
  return (
    <div>
      <img src={Gratitud} alt="" className="gratitud-img" />
      <Fragment>
        <FooterComponent />
      </Fragment>
    </div>
  );
};

export default Gratitude;
