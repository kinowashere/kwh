import { PureComponent } from 'react';
import { stringify } from 'rebem-classname';
import { Router } from 'react-router-dom';
import history from 'Util/History';
import Header from 'Component/Header';

export class App extends PureComponent {
  renderHeader() {
    return (
      <Header />
    );
  }

  renderContent() {
    return (<h1>Hello world!</h1>);
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
        </div>
      </Router>
    );
  }
}

export default App;
