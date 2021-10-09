import 'Style/Main.scss';
import { PureComponent } from 'react';
import { stringify } from 'rebem-classname';

export class App extends PureComponent {
  render() {
    return (
      <div
        className={stringify({
          block: 'App',
          elem: 'Wrapper',
        })}
      >
        <h1
          className={stringify({
            block: 'App',
            elem: 'Title',
            mods: { isOn: true },
          })}
        >
          Hello World!
        </h1>
      </div>
    );
  }
}

export default App;
