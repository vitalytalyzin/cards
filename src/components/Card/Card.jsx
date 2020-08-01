import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ img, children }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: 16 }}>
      {img && (
        <img src={`img/${img}`} className="card-img-top" alt="..." />
      )}
      {children}
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Card;

