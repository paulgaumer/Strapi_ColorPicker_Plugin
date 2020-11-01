/**
 *
 * CardSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  restaurantDefaultShape,
  restaurantShape,
} from '../../shapes/restaurant';

import H1 from '../H1';
import H4 from '../H4';
import Price from '../Price';
import Rate from '../Rate';

import StyledCardSection from './StyledCardSection';

function CardSection({ restaurant, hasLink, history }) {
  const { category, district, id, name, note, price } = restaurant;
  const categoryColor = category.color ? category.color : '#07DDEF';

  /* istanbul ignore next */
  const goToReviews = () => {
    history.push(`/${id}/reviews`);
    const element = document.getElementById('tab-content');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledCardSection className={hasLink && 'banner'}>
      <div className="left-infos">
        {!hasLink ? <H4>{name}</H4> : <H1>{name}</H1>}
        <p className="description">
          <Price value={price} />
          {category && (
            <span>
              &nbsp;•&nbsp;
              <span
                style={{
                  borderBottom: `3px solid ${categoryColor}`,
                  padding: '2px 3px ',
                }}
              >
                {category.name}
              </span>
            </span>
          )}
          <span>
            &nbsp;•&nbsp;
            {district.includes('_') ? district.replace('_', '') : district}
          </span>
        </p>
      </div>
      <div className="right-infos">
        <Rate value={Math.floor(note)} clickable={false} />
        {hasLink && (
          <div className="link-wrapper">
            <a onClick={goToReviews} className="link" role="navigation">
              <p>See all reviews</p>
            </a>
          </div>
        )}
      </div>
    </StyledCardSection>
  );
}

CardSection.defaultProps = {
  restaurant: restaurantDefaultShape,
  hasLink: false,
};

CardSection.propTypes = {
  restaurant: PropTypes.shape(restaurantShape),
  hasLink: PropTypes.bool,
};

export default CardSection;
