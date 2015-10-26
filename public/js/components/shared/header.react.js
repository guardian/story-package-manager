import React from 'react';
import { Link } from 'react-router';

import SaveStateIndicator from './header/SaveStateIndicator.react';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    userName () {
        if (this.props.user) {
            return this.props.user.firstName + ' ' + this.props.user.lastName;
        }
    }

    renderTitleHoverState() {
        if (this.props.suppressTitleLink) {
            return false;
        }

        return (
            <div className="top-toolbar__title__hover-state">
                <span className="top-toolbar__title__hover-state__subtitle">Back to</span><br />
                <span className="top-toolbar__title__hover-state__title">Dashboard</span>
            </div>
        );
    }

    render () {
        var self = this;

        return (
            <header className="top-toolbar">

                    <Link to="/" className="top-toolbar__title">
                        <div className="top-toolbar__letter">
                            <span className="top-toolbar__letter-text">S</span>
                        </div>
                        <h1 className="top-toolbar__page-title">
                            <span className="top-toolbar__page-title-text">Story package manager</span>
                        </h1>
                        {this.renderTitleHoverState()}
                    </Link>

                <SaveStateIndicator saveState={this.props.saveState}/>

                <div className="header__children">
                    {this.props.children}
                </div>

                <div className="top-toolbar__right-align">
                    <div className="top-toolbar__user top-toolbar__item">
                        <span className="user__name">{self.userName()}<i className="i-down-arrow"/></span>
                    </div>
                </div>
            </header>
        );
    }
}
