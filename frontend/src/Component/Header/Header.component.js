import { PureComponent } from 'react';
import { stringify } from 'rebem-classname';
import { Link, NavLink } from 'react-router-dom';

export class Header extends PureComponent {
  render() {
    return (
      <header
        className={ stringify({
          block: 'Header',
          elem: 'Container'
        }) }
      >
        <Link
          to="/"
          className={ stringify({
            block: 'Header',
            elem: 'Title'
          }) }
        >
          KiNO WAS HERE
        </Link>
        <span
          className={ stringify({
            block: 'Header',
            elem: 'LinksContainer'
          }) }
        >
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </span>
      </header>
    );
  }
}

export default Header;
