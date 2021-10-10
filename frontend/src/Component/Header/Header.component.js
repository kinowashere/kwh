import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Header extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { content, onClick } = this.props;
    return (
      <button type="submit" onClick={ onClick }>
        { content }
      </button>
    );
  }
}

export default Header;
