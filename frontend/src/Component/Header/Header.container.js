import { PureComponent } from 'react';
// eslint-disable-next-line import/no-named-as-default-member
import Header from './Header.component';

export class HeaderContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Oni-on'
    };
  }

  onClick() {
    const { content } = this.state;
    this.setState({ content: content === 'Oni-on' ? 'Oni-off' : 'Oni-on' });
  }

  containerFunctions() {
    return {
      onClick: this.onClick.bind(this)
    };
  }

  containerProps() {
    const { content } = this.state;
    return { content };
  }

  render() {
    return (
      <Header
        { ...this.containerProps() }
        { ...this.containerFunctions() }
      />
    );
  }
}

export default HeaderContainer;
