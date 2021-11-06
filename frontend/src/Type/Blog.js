import PropTypes from 'prop-types';

export const blogPostType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  datePublished: PropTypes.string
});

export const blogPostWithDetailsType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  datePublished: PropTypes.string,
  isPublic: PropTypes.bool,
  isDraft: PropTypes.bool
});
