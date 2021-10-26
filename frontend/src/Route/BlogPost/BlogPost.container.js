import { PureComponent } from 'react';
import { matchType } from 'Type/Router';
import ApiRequest from 'Util/ApiRequest';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost.component';

export class BlogPostContainer extends PureComponent {
  static propTypes = {
    match: matchType.isRequired,
    // TODO: Make proper type for this?
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired
  }

  state = {
    post: {}
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getBlogPostById(id);
  }

  getBlogPostById(id) {
    new ApiRequest().get('/blog/getById', {
      params: {
        id
      }
    }).then(
      (response) => {
        const {
          status,
          data: post
        } = response;

        const { history } = this.props;

        if (status === 200) {
          this.setState({ post });
        } else {
          history.push('/404');
        }
      }
    );
  }

  containerProps() {
    const { post } = this.state;
    return { post };
  }

  render() {
    return (
      <BlogPost
        { ...this.containerProps() }
      />
    );
  }
}

export default BlogPostContainer;
