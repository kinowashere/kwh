import PropTypes from 'prop-types';

export const blogPostType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  date_published: PropTypes.string
});

export const blogPostWithDetailsType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  date_published: PropTypes.string,
  is_public: PropTypes.bool,
  is_draft: PropTypes.bool
});
