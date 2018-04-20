import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../data/Constants';

import './Video.css';

function Video({
  source,
  type
}) {
  if (type === CONSTANTS.VIDEO.TYPE.YOUTUBE) {
    return (
      <div className="video">
        <iframe
          title="recipe video"
          type="text/html"
          width="320"
          height="180"
          src={`${CONSTANTS.YOUTUBE_EMBED_URL}/${source}`}
          frameBorder="0"
        />
      </div>
    );
  }

  // TODO for non youtube videos
  return null;
}

Video.propTypes = {
  source: PropTypes.string.isRequired,
  type: PropTypes.number
};

Video.defaultProps = {
  type: CONSTANTS.VIDEO.TYPE.YOUTUBE
};

export default Video;
