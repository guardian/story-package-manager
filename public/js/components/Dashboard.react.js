import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { connect } from 'react-redux';

import Header from './shared/header.react';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    /* <CreateQuizButton createState={this.props.state.createState} dispatch={this.props.dispatch}/> */

    render () {
        return (
            <div className="wrapper">
                <Header user={this.props.user} suppressTitleLink={true}>
                    <ul className="links">
                        <li className="links__item top-toolbar__item--highlight"><i className="i-enter-quiz-text" />
                            <Link to="/parse">Enter quiz text</Link>
                        </li>

                    </ul>
                </Header>
                <h1>React Dashboard</h1>
            </div>
        );
    }
}
