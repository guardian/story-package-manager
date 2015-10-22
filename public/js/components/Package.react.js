import React from 'react';
import PackageEditor from '../components/editor/PackageEditor.react';

export default class Package extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
          <div className="container">
            <PackageEditor />
          </div>
        );
    }
}
