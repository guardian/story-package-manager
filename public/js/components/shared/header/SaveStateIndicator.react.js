import React from 'react';

import {SAVE_STATUS_CLEAN, SAVE_STATUS_SAVED, SAVE_STATUS_SAVING, SAVE_STATUS_ERROR} from '../../../constants/SaveStateConstants';


export default class HeaderSaveStateIndicator extends React.Component {

    constructor(props) {
        super(props);
    }

    renderSaveStatus() {
        switch (this.props.saveState.state) {
            case SAVE_STATUS_CLEAN:
                return (<div className="save-state save-state--clean">
                            <i className="save-state__icon" />
                            <span className="save-state__time"></span>
                        </div>);

            case SAVE_STATUS_SAVING:
                return (<div className="save-state save-state--saving">
                            <i className="spinner-centre" />
                        </div>);

            case SAVE_STATUS_SAVED:
                return (<div className="save-state save-state--saved">
                            <i className="save-state__icon" />
                            <span className="save-state__note">Saved</span>
                            <span className="save-state__time"></span>
                        </div>);

            case SAVE_STATUS_ERROR:
                return (<div className="save-state save-state--error">
                            <i className="save-state__icon" />
                            <span className="save-state__note">Error</span>
                        </div>);
        }
    }

    render () {

        if (!this.props.saveState) {
            return false;
        }

        return (
            <div className="top-toolbar__item header__editor-indicator">
                {this.renderSaveStatus()}
            </div>
        );


    }
}
