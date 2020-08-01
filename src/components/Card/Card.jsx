import React from 'react';

const Card = ({ imgSrc, children }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: 16 }}>
      {imgSrc && (
        <img src={imgSrc} className="card-img-top" alt="..." />
      )}
      {children}
    </div>
  );
}

export default Card;
