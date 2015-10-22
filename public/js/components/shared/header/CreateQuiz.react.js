import React from 'react';
import R from 'ramda';

import Modal from '../lib/Modal.react.js';

import {CREATE_STATUS_INACTIVE, CREATE_STATUS_CREATING, CREATE_STATUS_ERROR} from '../../constants/CreateQuizConstants';

import {createQuiz} from '../../actionCreators/createQuiz';

export default class CreateQuizButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.getButtonText = this.getButtonText.bind(this);
    }

    handleButtonClick (event) {
        const { dispatch } = this.props;
        dispatch(createQuiz(null, {questionCount: 10,
                                   answerCount: 4,
                                   title: this.state.quizTitle}));
        // stop the form from submitting
        return false;
    }

    getButtonText() {
        switch (this.props.createState) {
            case CREATE_STATUS_INACTIVE:
                return 'New quiz';
            case CREATE_STATUS_CREATING:
                return 'Creating...';
            case CREATE_STATUS_ERROR:
                return 'Could not create quiz';
        }
    }

    closeModal() {
        this.setState(R.assoc('isModalOpen', false, this.state));
    }

    openModal() {
        this.setState(R.assoc('isModalOpen', true, this.state));
    }

    inputChange(event) {
        this.setState(R.assoc('quizTitle', event.target.value, this.state));
    }


    render () {
        return (
                <li onClick={this.openModal.bind(this)}
                    className="links__item top-toolbar__item">
                <i className="i-new-quiz" /> {this.getButtonText()}

                <Modal isOpen={this.state.isModalOpen} dismiss={this.closeModal.bind(this)}>
                <div className="modal__content--small">
                    <div className="modal__content--small-header">
                        <h2>Quiz Title</h2>
                    </div>
                    <div className="modal__content--small-input">
                        <form>
                              <input
                                name="title"
                                type="text"
                                onChange={this.inputChange.bind(this)}
                                placeholder="Enter a title for your quiz..." />

                              <button className="btn btn-normal"
                                       onClick={this.handleButtonClick}>
                              Create quiz
                              </button>
                        </form>
                   </div>
                </div>
                </Modal>
                </li>
        );
    }
}
