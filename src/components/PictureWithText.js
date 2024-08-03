import React from 'react';
import PropTypes from 'prop-types';
import '../components/PictureWithText.css'; // Ensure your CSS is imported

const PictureWithText = ({ imageUrl, title, subtitle1, subtitle2 }) => {
  return (
    <div className="picture-container">
      <img src={imageUrl} alt="Olympic Athletes" className="picture-image" />
      <div className="text-overlay">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle1}</p>
        <p className="subtitle">{subtitle2}</p>
      </div>
    </div>
  );
};

PictureWithText.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle1: PropTypes.string.isRequired,
  subtitle2: PropTypes.string.isRequired,
};

export default PictureWithText;
