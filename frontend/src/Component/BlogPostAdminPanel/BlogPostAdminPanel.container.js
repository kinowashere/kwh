import { PureComponent } from 'react';
import ApiRequest from 'Util/ApiRequest';
import { toast } from 'react-toastify';
import BlogPostAdminPanel from './BlogPostAdminPanel.component';

export class BlogPostAdminPanelContainer extends PureComponent {
  state = {
    allPosts: [],
    post: {},
    mode: 'newPost'
  }

  containerFunctions = {
    handleSelectPost: this.handleSelectPost.bind(this),
    handleCloseVisualizer: this.handleCloseVisualizer.bind(this),
    handleEditPost: this.handleEditPost.bind(this)
  };

  componentDidMount() {
    this.getAllSidebarPosts();
  }

  handleSelectPost(id) {
    const { allPosts } = this.state;
    const post = allPosts.find(({ id: haystackId }) => id === haystackId);
    this.setState({ post, mode: 'visualizer' });
  }

  handleCloseVisualizer() {
    this.setState({ post: {}, mode: 'newPost' });
  }

  handleEditPost() {
    this.setState({ mode: 'edit' });
  }

  getAllSidebarPosts() {
    new ApiRequest().get('/blog/getAll').then(
      (response) => {
        const { status, data: allPosts } = response;
        if (status === 200) {
          const sortedPosts = this.sortPostsByDate(allPosts);
          this.setState({ allPosts: sortedPosts });
        } else {
          toast('There was a problem retrieving all posts...');
        }
      }
    );
  }

  sortPostsByDate(posts) {
    return posts.sort((
      { date_published: aDate }, { date_published: bDate }
    ) => new Date(aDate).getTime() < new Date(bDate).getTime());
  }

  containerProps() {
    const { allPosts, mode, post } = this.state;
    return { allPosts, mode, post };
  }

  render() {
    return (
      <BlogPostAdminPanel
        { ...this.containerProps() }
        { ...this.containerFunctions }
      />
    );
  }
}

export default BlogPostAdminPanelContainer;
