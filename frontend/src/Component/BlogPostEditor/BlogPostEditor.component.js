import { PureComponent } from 'react';
import { stringify } from 'rebem-classname';
import PropTypes from 'prop-types';
import { blogPostWithDetailsType } from 'Type/Blog';

export class BlogPostEditor extends PureComponent {
  static propTypes = {
    handlePostSubmit: PropTypes.func.isRequired,
    post: blogPostWithDetailsType.isRequired,
    mode: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleDeletePost: PropTypes.func.isRequired
  }

  renderPostOrEditButtons() {
    const { mode, handleDeletePost } = this.props;
    if (mode === 'newPost') {
      return (<button type="submit">Post</button>);
    }

    return (
      <>
        <button type="submit">Edit</button>
        <button type="button" onClick={ handleDeletePost }>Delete</button>
      </>
    );
  }

  render() {
    const {
      handlePostSubmit,
      post: {
        id,
        title,
        content,
        datePublished,
        isDraft,
        isPublic
      },
      handleOnChange
    } = this.props;

    return (
      <form
        onSubmit={ (e) => handlePostSubmit(e) }
        className={ stringify({
          block: 'BlogPostEditor',
          elem: 'FormContainer'
        }) }
      >
        <label htmlFor="content">
          Post
          <textarea
            name="content"
            id="content"
            value={ content }
            onChange={ (e) => handleOnChange(e) }
            required
          />
        </label>
        <div>
          <label htmlFor="title">
            Title
            <input
              type="text"
              name="title"
              id="title"
              value={ title }
              onChange={ (e) => handleOnChange(e) }
              required
            />
          </label>
          <label htmlFor="datePublished">
            Date Published
            <input
              type="date"
              name="datePublished"
              id="datePublished"
              value={ datePublished }
              onChange={ (e) => handleOnChange(e) }
              required
            />
          </label>
          <label htmlFor="isDraft" className={ stringify({ block: 'BlogPostEditor', elem: 'CheckboxLabel' }) }>
            Is Draft?
            <input
              type="checkbox"
              name="isDraft"
              id="isDraft"
              checked={ isDraft }
              onChange={ (e) => handleOnChange(e) }
            />
          </label>
          <label htmlFor="isPublic" className={ stringify({ block: 'BlogPostEditor', elem: 'CheckboxLabel' }) }>
            Is Public?
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              checked={ isPublic }
              onChange={ (e) => handleOnChange(e) }
            />
          </label>
          <input
            type="number"
            value={ id }
            onChange={ (e) => handleOnChange(e) }
            name="id"
            id="id"
            hidden
          />
          { this.renderPostOrEditButtons() }
        </div>
      </form>
    );
  }
}

export default BlogPostEditor;
