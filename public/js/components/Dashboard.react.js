import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { connect } from 'react-redux';

import Header from './shared/header.react';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="wrapper">
                <Header user={this.props.user} suppressTitleLink={true}>
                    <ul className="links">
                        <li className="links__item top-toolbar__item--highlight">
                            <Link to="/new">New package</Link>
                        </li>

                    </ul>
                </Header>
                <h1>Latest packages</h1>
            </div>
        );
    }
}
