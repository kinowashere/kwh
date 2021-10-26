import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const userType = PropTypes.shape({
  name: PropTypes.string,
  email: PropTypes.string,
  handle: PropTypes.string,
  isAdmin: PropTypes.bool
});
