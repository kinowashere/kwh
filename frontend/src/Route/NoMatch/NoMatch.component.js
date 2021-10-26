import { PureComponent } from 'react';
import { stringify } from 'rebem-classname';

export class NoMatch extends PureComponent {
  render() {
    return (
      <h1
        className={ stringify({
          block: 'NoMatch',
          elem: 'Container'
        }) }
      >
        404 Not Found
      </h1>
    );
  }
}

export default NoMatch;
