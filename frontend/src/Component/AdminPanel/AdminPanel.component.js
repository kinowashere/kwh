import { PureComponent } from 'react';
import { stringify } from 'rebem-classname';
import BlogPostAdminPanel from 'Component/BlogPostAdminPanel';

export class AdminPanel extends PureComponent {
  render() {
    return (
      <div
        className={ stringify({
          block: 'AdminPanel',
          elem: 'Container'
        }) }
      >
        <BlogPostAdminPanel />
      </div>
    );
  }
}

export default AdminPanel;
