import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { stringify } from 'rebem-classname';
import AdminPanel from 'Component/AdminPanel';

export class Admin extends PureComponent {
  static propTypes = {
    isUserSignedIn: PropTypes.bool.isRequired,
    handleFormSubmit: PropTypes.func.isRequired
  }

  renderLoginForm() {
    const { handleFormSubmit } = this.props;
    return (
      <div
        className={ stringify({
          block: 'Admin',
          elem: 'LoginContainer'
        }) }
      >
        <h1>Login</h1>
        <form onSubmit={ (e) => handleFormSubmit(e) }>
          <input
            type="text"
            name="handle"
            placeholder="admin?"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="super secret password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  render() {
    const { isUserSignedIn } = this.props;

    if (!isUserSignedIn) {
      return this.renderLoginForm();
    }

    return (<AdminPanel />);
  }
}

export default Admin;
