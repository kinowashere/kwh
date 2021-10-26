import { PureComponent } from 'react';
import { blogPostType } from 'Type/Blog';
import { stringify } from 'rebem-classname';
import { Link } from 'react-router-dom';

export class BlogPostCard extends PureComponent {
  static propTypes = {
    post: blogPostType.isRequired
  }

  render() {
    const {
      post: {
        id,
        title,
        content,
        date_published: datePublished
      }
    } = this.props;
    return (
      <Link
        className={ stringify({
          block: 'BlogPostCard',
          elem: 'Container'
        }) }
        to={ `/blog/${id}` }
      >
        <div>
          <div
            className={ stringify({
              block: 'BlogPostCard',
              elem: 'Title'
            }) }
          >
            { title }
          </div>
          <div
            className={ stringify({
              block: 'BlogPostCard',
              elem: 'Content'
            }) }
          >
            { content }
          </div>
        </div>
        <div
          className={ stringify({
            block: 'BlogPostCard',
            elem: 'Date'
          }) }
        >
          { datePublished }
        </div>
      </Link>
    );
  }
}

export default BlogPostCard;
