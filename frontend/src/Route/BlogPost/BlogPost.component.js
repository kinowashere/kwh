import { PureComponent } from 'react';
import { blogPostType } from 'Type/Blog';
import BlogPostVisualizer from 'Component/BlogPostVisualizer';

export class BlogPost extends PureComponent {
  static propTypes = {
    post: blogPostType.isRequired
  }

  render() {
    const { post } = this.props;
    return (<BlogPostVisualizer post={ post } />);
  }
}

export default BlogPost;
