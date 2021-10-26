import { PureComponent } from 'react';
import ApiRequest from 'Util/ApiRequest';
import { toast } from 'react-toastify';
import history from 'Util/History';
import { blogPostWithDetailsType } from 'Type/Blog';
import BlogPostEditor from './BlogPostEditor.component';

export class BlogPostEditorContainer extends PureComponent {
  static propTypes = {
    post: blogPostWithDetailsType
  };

  static defaultProps = {
    post: {}
  };

  state = {
    post: {
      id: 0,
      title: 'Lorem...',
      content: 'Lorem ipsum...',
      date_published: new Date().toISOString().split('T')[0],
      is_draft: false,
      is_public: true
    },
    mode: 'newPost'
  };

  containerFunctions = {
    handlePostSubmit: this.handlePostSubmit.bind(this),
    handleOnChange: this.handleOnChange.bind(this),
    handleDeletePost: this.handleDeletePost.bind(this)
  };

  componentDidMount() {
    const { post } = this.props;
    const mode = Object.entries(post).length === 0 ? 'newPost' : 'edit';
    if (mode === 'edit') {
      this.setState({ post, mode });
    } else {
      this.setState({ mode });
    }
  }

  handlePostSubmit(e) {
    const { mode } = this.state;
    if (mode === 'newPost') {
      this.createNewPost(e);
    } else {
      this.editPost(e);
    }
  }

  handleDeletePost() {
    const { post: { id } } = this.state;
    new ApiRequest().delete('/blog/delete', { data: { id } })
      .then((response) => {
        const { status } = response;
        if (status === 200) {
          history.push('/admin');
        } else {
          toast('There was an issue...');
        }
      });
  }

  handleOnChange(e) {
    const {
      target: {
        value,
        name,
        type,
        checked
      }
    } = e;
    const parsedValue = type === 'checkbox' ? checked : value;
    const { post } = this.state;
    this.setState({ post: { ...post, [name]: parsedValue } });
  }

  createNewPost(e) {
    const {
      post: {
        title,
        content,
        date_published: datePublished,
        is_draft: isDraft,
        is_public: isPublic
      }
    } = this.state;
    e.preventDefault();
    new ApiRequest().post('/blog/create', {
      title,
      content,
      date_published: datePublished,
      is_draft: isDraft,
      is_public: isPublic
    }).then((response) => {
      const { status, data: { id } } = response;
      if (status === 201) {
        if (!isDraft && isPublic) {
          history.push(`/blog/${id}`);
        } else {
          toast('Posted successfully!');
        }
      } else {
        toast('There was an issue...');
      }
    });
  }

  editPost(e) {
    const {
      post: {
        id,
        title,
        content,
        date_published: datePublished,
        is_draft: isDraft,
        is_public: isPublic
      }
    } = this.state;
    e.preventDefault();
    new ApiRequest().put('/blog/edit', {
      id,
      title,
      content,
      date_published: datePublished,
      is_draft: isDraft,
      is_public: isPublic,
    }).then((response) => {
      const { status } = response;
      if (status === 200) {
        if (!isDraft && isPublic) {
          history.push(`/blog/${id}`);
        } else {
          toast('Posted successfully!');
        }
      } else {
        toast('There was an issue...');
      }
    });
  }

  containerProps() {
    const { post, mode } = this.state;
    return { post, mode };
  }

  render() {
    return (
      <BlogPostEditor
        { ...this.containerFunctions }
        { ...this.containerProps() }
      />
    );
  }
}

export default BlogPostEditorContainer;
