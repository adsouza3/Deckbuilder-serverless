import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getImageUrl } from 'lib/image_urls';

const PreviousMarket = ({ cards, }) => {
  if (cards.length === 0) {
    return null;
  }

  return <>
    <div className="previous-market">
      Previous Market:
      {cards.map((card, i) => (
        <img 
          className="previous-market-card-img"
          draggable="false"
          key={i}
          src={getImageUrl(card)}
        />
      ))}
    </div>
  </>;
};

PreviousMarket.propTypes = {
  cards: PropTypes.array.isRequired,
};

const mapStateToProps =  ({ present: { board } }) => {
  return {
    cards: board.previousMarket
  };
};

export default connect(mapStateToProps)(PreviousMarket);