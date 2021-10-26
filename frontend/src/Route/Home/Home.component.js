import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { blogPostType } from 'Type/Blog';
import BlogPostCard from 'Component/BlogPostCard';
import { stringify } from 'rebem-classname';

export class Home extends PureComponent {
  static propTypes = {
    posts: PropTypes.arrayOf(blogPostType).isRequired
  }

  renderBlogPosts() {
    const { posts } = this.props;

    if (posts.length === 0) {
      return null;
    }

    return (
      <>
        <h2>Recent Blog Posts</h2>
        <div
          className={ stringify({
            block: 'Home',
            elem: 'PostsContainer'
          }) }
        >
          { posts.map((post) => (<BlogPostCard key={ post.id } post={ post } />)) }
        </div>
      </>
    );
  }

  renderAboutMe() {
    return (
      <div
        className={ stringify({
          block: 'Home',
          elem: 'AboutMeContainer'
        }) }
      >
        <img
          src="https://media.tenor.com/images/9ce092207d888099f3544cf6f9812b36/tenor.gif"
          alt="Wink Wink"
        />
        <div
          className={ stringify({
            block: 'Home',
            elem: 'AboutMeInfoContainer'
          }) }
        >
          <h1>Manuel Trinidad</h1>
          <a href="https://github.com/kinowashere">{ '> GitHub | kinowashere' }</a>
          <a href="https://www.linkedin.com/in/matrin/">{ '> LinkedIn | matrin' }</a>
          <a href="https://www.flickr.com/photos/155618053@N02/albums">{ '> Flickr | manueltrinidad' }</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        className={ stringify({
          block: 'Home',
          elem: 'Container'
        }) }
      >
        { this.renderAboutMe() }
        { this.renderBlogPosts() }
      </div>
    );
  }
}

export default Home;
