import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const matchType = PropTypes.shape({
  isExact: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  params: PropTypes.object,
  path: PropTypes.string,
  url: PropTypes.string
});
