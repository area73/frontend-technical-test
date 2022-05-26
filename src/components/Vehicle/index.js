import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export default function Vehicle({
  id, price, description, media
}) {
  return (
    <div className="vehicle">
      <picture className="vehicle__picture">
        <source srcSet={media[0].url} media="(min-width: 800px)" />
        <img src={media[1].url} alt={id} className="vehicle__image" />
      </picture>
      <h2 className="vehicle__name">{id}</h2>
      <div className="vehicle__price">
        From
        {' '}
        {price}
      </div>
      <div className="vehicle__description">{description}</div>
    </div>
  );
}

Vehicle.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  media: PropTypes.array.isRequired
};
