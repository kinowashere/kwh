import { PureComponent } from 'react';
import { stringify } from 'rebem-classname';
import BlogPostVisualizer from 'Component/BlogPostVisualizer';
import { blogPostWithDetailsType } from 'Type/Blog';
import PropTypes from 'prop-types';
import BlogPostEditor from 'Component/BlogPostEditor';

export class BlogPostAdminPanel extends PureComponent {
  static propTypes = {
    allPosts: PropTypes.arrayOf(blogPostWithDetailsType).isRequired,
    post: blogPostWithDetailsType.isRequired,
    handleSelectPost: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
    handleCloseVisualizer: PropTypes.func.isRequired,
    handleEditPost: PropTypes.func.isRequired
  };

  renderAllPostsSidebar() {
    const { allPosts, handleSelectPost } = this.props;
    return (
      <div
        className={ stringify({
          block: 'BlogPostAdminPanel',
          elem: 'PostsSidebarContainer'
        }) }
      >
        { allPosts.map((post) => {
          const {
            title,
            date_published: datePublished,
            id,
            is_public: isPublic,
            is_draft: isDraft
          } = post;
          return (
            <button
              className={ stringify({
                block: 'BlogPostAdminPanel',
                elem: 'PostsSidebarPost'
              }) }
              onClick={ () => handleSelectPost(id) }
              type="button"
              key={ `${id}_sidebar` }
            >
              <span>{ title }</span>
              <span>{ datePublished }</span>
              <span>
                { /* TODO: Make into icon */ }
                { isDraft && 'draft ' }
                { !isPublic && 'private' }
              </span>
            </button>
          );
        }) }
      </div>
    );
  }

  renderEditor() {
    const { post, mode } = this.props;
    if (mode === 'newPost') {
      return (<BlogPostEditor />);
    }

    return (<BlogPostEditor post={ post } />);
  }

  renderVisualizer() {
    const { post, handleCloseVisualizer, handleEditPost } = this.props;
    return (
      <div
        className={ stringify({
          block: 'BlogPostAdminPanel',
          elem: 'VisualizerContainer'
        }) }
      >
        <BlogPostVisualizer post={ post } />
        <div
          className={ stringify({
            block: 'BlogPostAdminPanel',
            elem: 'ControlButtonsContainer'
          }) }
        >
          <button
            type="button"
            onClick={ handleCloseVisualizer }
          >
            Close
          </button>
          <button
            type="button"
            onClick={ handleEditPost }
          >
            Edit
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { mode } = this.props;
    return (
      <div
        className={ stringify({
          block: 'BlogPostAdminPanel',
          elem: 'Container'
        }) }
      >
        { this.renderAllPostsSidebar() }
        { (mode === 'newPost' || mode === 'edit') && this.renderEditor() }
        { mode === 'visualizer' && this.renderVisualizer() }
      </div>
    );
  }
}

export default BlogPostAdminPanel;
