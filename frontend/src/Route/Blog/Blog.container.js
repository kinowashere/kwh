import { PureComponent } from 'react';
import ApiRequest from 'Util/ApiRequest';
import { toast } from 'react-toastify';
import Blog from './Blog.component';

export class BlogContainer extends PureComponent {
  state = {
    posts: [],
    currentPage: 1,
    isNextPage: false,
    isPrevPage: false
  };

  containerFunctions = {
    onPageControlClick: this.onPageControlClick.bind(this)
  }

  componentDidMount() {
    this.getRecentPosts();
  }

  onPageControlClick(direction) {
    const { isPrevPage, isNextPage, currentPage } = this.state;
    if (direction === 'prev' && isPrevPage) {
      this.getRecentPosts(currentPage - 1);
    } else if (direction === 'next' && isNextPage) {
      this.getRecentPosts(currentPage + 1);
    }
  }

  getRecentPosts(page = 1) {
    new ApiRequest().get('/blog/getRecent', {
      params: {
        pageSize: 12,
        page
      }
    }).then(
      (response) => {
        const {
          data: {
            posts,
            current_page: currentPage,
            next_page: isNextPage,
            prev_page: isPrevPage
          },
          status
        } = response;
        if (status !== 200) {
          toast('No blog posts yet... :(');
          return;
        }
        this.setState({
          posts, currentPage, isNextPage, isPrevPage
        });
      }
    );
  }

  containerProps() {
    const {
      posts,
      currentPage,
      isNextPage,
      isPrevPage
    } = this.state;
    return {
      posts,
      currentPage,
      isNextPage,
      isPrevPage
    };
  }

  render() {
    return (
      <Blog
        { ...this.containerProps() }
        { ...this.containerFunctions }
      />
    );
  }
}

export default BlogContainer;
