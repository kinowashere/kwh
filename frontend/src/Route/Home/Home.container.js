import { PureComponent } from 'react';
import ApiRequest from 'Util/ApiRequest';
import Home from './Home.component';

export class HomeContainer extends PureComponent {
  state = {
    posts: []
  }

  componentDidMount() {
    this.getRecentPosts();
  }

  getRecentPosts() {
    new ApiRequest().get('/blog/getRecent', { params: { pageSize: 3 } })
      .then((response) => {
        const {
          data: {
            posts
          },
          status
        } = response;
        if (status !== 200) {
          return;
        }
        this.setState({ posts });
      });
  }

  containerProps() {
    const { posts } = this.state;
    return { posts };
  }

  render() {
    return (
      <Home
        { ...this.containerProps() }
      />
    );
  }
}

export default HomeContainer;