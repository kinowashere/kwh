import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ApiRequest from 'Util/ApiRequest';
import Security from 'Util/Security';
import Admin from './Admin.component';

export class AdminContainer extends PureComponent {
  static propTypes = {
    isUserSignedIn: PropTypes.bool.isRequired,
    handleUserSignIn: PropTypes.func.isRequired
  }

  containerFunctions = {
    handleFormSubmit: this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(e) {
    const { handleUserSignIn } = this.props;
    const {
      target: {
        elements: {
          handle: {
            value: handle
          },
          password: {
            value: password
          }
        }
      }
    } = e;
    e.preventDefault();
    new ApiRequest().post('/admin/login', {
      handle,
      password
    }).then((response) => {
      const { data: { token }, status } = response;
      if (status !== 200) {
        Security.itsHackingTime();
        return;
      }

      handleUserSignIn(token);
    });
  }

  containerProps() {
    const { isUserSignedIn } = this.props;
    return { isUserSignedIn };
  }

  render() {
    return (
      <Admin
        { ...this.containerProps() }
        { ...this.containerFunctions }
      />
    );
  }
}

export default AdminContainer;
