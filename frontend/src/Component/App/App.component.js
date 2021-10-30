import { PureComponent } from 'react';
import { stringify } from 'rebem-classname';
import { Route, Router, Switch } from 'react-router-dom';
import history from 'Util/History';
import Header from 'Component/Header';
import Admin from 'Route/Admin';
import Blog from 'Route/Blog';
import BlogPost from 'Route/BlogPost';
import Cv from 'Route/Cv';
import Home from 'Route/Home';
import NoMatch from 'Route/NoMatch';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

export class App extends PureComponent {
  static propTypes = {
    isUserSignedIn: PropTypes.bool.isRequired,
    handleUserSignIn: PropTypes.func.isRequired
  }

  renderHeader() {
    return (
      <Header />
    );
  }

  renderContent() {
    return (
      <Switch>
        <Route
          path="/"
          component={ () => <Home { ...this.props } /> }
          exact
        />
        <Route
          path="/blog"
          component={ () => <Blog { ...this.props } /> }
          exact
        />
        <Route
          path="/blog/:id?"
          component={ (props) => <BlogPost { ...this.props } { ...props } /> }
        />
        <Route
          path="/cv"
          component={ () => <Cv { ...this.props } /> }
        />
        <Route
          path="/admin"
          component={ () => <Admin { ...this.props } /> }
        />
        <Route
          component={ () => <NoMatch /> }
        />
      </Switch>
    );
  }

  renderFooter() {
    return null;
  }

  render() {
    return (
      <Router history={ history }>
        <div
          className={ stringify({
            block: 'App',
            elem: 'Container'
          }) }
        >
          { this.renderHeader() }
          { this.renderContent() }
          { this.renderFooter() }
          <ToastContainer
            autoClose={ 2000 }
            hideProgressBar={ false }
            newestOnTop={ false }
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Router>
    );
  }
}

export default App;
