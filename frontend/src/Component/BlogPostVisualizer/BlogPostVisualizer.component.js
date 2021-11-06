import { PureComponent } from 'react';
import { blogPostType } from 'Type/Blog';
import { stringify } from 'rebem-classname';
import ReactMarkdown from 'react-markdown';

export class BlogPostVisualizer extends PureComponent {
  static propTypes = {
    post: blogPostType.isRequired
  }

  render() {
    const {
      post: {
        title,
        content,
        datePublished
      }
    } = this.props;
    return (
      <div
        className={ stringify({
          block: 'BlogPostVisualizer',
          elem: 'Container'
        }) }
      >
        <h1>{ title }</h1>
        <ReactMarkdown>{ content }</ReactMarkdown>
        <span
          className={ stringify({
            block: 'BlogPostVisualizer',
            elem: 'Signature'
          }) }
        >
          KiNO
        </span>
        <span>{ datePublished }</span>
      </div>
    );
  }
}

export default BlogPostVisualizer;
