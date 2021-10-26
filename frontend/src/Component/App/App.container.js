import { PureComponent } from 'react';
import { isSignedIn, signInUser } from 'Util/Auth';
import { APP_NAME } from 'Config/Environment';
import App from './App.component';

export class AppContainer extends PureComponent {
  state = {
    isUserSignedIn: isSignedIn(),
  };

  containerFunctions = {
    handleUserSignIn: this.handleUserSignIn.bind(this)
  }

  componentDidMount() {
    document.title = APP_NAME;
  }

  handleUserSignIn(token) {
    signInUser(token);
    this.setState({ isUserSignedIn: isSignedIn() });
  }

  containerProps() {
    const { isUserSignedIn } = this.state;
    return { isUserSignedIn };
  }

  render() {
    return (
      <App
        { ...this.containerProps() }
        { ...this.containerFunctions }
      />
    );
  }
}

export default AppContainer;
