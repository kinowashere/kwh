import { PureComponent } from 'react';
import { blogPostType } from 'Type/Blog';
import PropTypes from 'prop-types';
import BlogPostCard from 'Component/BlogPostCard';
import { stringify } from 'rebem-classname';

export class Blog extends PureComponent {
  static propTypes = {
    posts: PropTypes.arrayOf(blogPostType).isRequired,
    currentPage: PropTypes.number.isRequired,
    isNextPage: PropTypes.bool.isRequired,
    isPrevPage: PropTypes.bool.isRequired,
    onPageControlClick: PropTypes.func.isRequired
  }

  renderBlogPosts() {
    const {
      posts
    } = this.props;

    return posts.map((post) => (<BlogPostCard key={ post.id } post={ post } />));
  }

  renderPageControls() {
    const {
      currentPage, isNextPage, isPrevPage, onPageControlClick
    } = this.props;

    return (
      <div
        className={ stringify({
          block: 'Blog',
          elem: 'PageControlsContainer'
        }) }
      >
        <button
          onClick={ () => onPageControlClick('prev') }
          type="button"
          disabled={ !isPrevPage }
          className={ stringify({
            block: 'Blog',
            elem: 'PageControlButton',
            mods: {
              isDisabled: !isPrevPage
            }
          }) }
        >
          { '<' }
        </button>
        <span
          className={ stringify({
            block: 'Blog',
            elem: 'PageNumber'
          }) }
        >
          { currentPage }
        </span>
        <button
          onClick={ () => onPageControlClick('next') }
          type="button"
          disabled={ !isNextPage }
          className={ stringify({
            block: 'Blog',
            elem: 'PageControlButton',
            mods: {
              isDisabled: !isNextPage
            }
          }) }
        >
          { '>' }
        </button>
      </div>
    );
  }

  render() {
    return (
      <div
        className={ stringify({
          block: 'Blog',
          elem: 'Container'
        }) }
      >
        <div
          className={ stringify({
            block: 'Blog',
            elem: 'PostsContainer'
          }) }
        >
          { this.renderBlogPosts() }
        </div>
        { this.renderPageControls() }
      </div>
    );
  }
}

export default Blog;
