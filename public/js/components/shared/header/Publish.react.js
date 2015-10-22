import React from 'react';

import {publishQuiz} from '../../actionCreators/publishQuiz.js';
import {isValidQuiz} from '../../utils/quiz-validation';

export default class PublishButton extends React.Component {

    constructor (props) {
        super(props);
    }

    onPublishClick(e) {
        const {dispatch} = this.props;
        if (!isValidQuiz(this.props.quiz)) {
            return;
        }
        dispatch(publishQuiz(this.props.quiz));
    }

    render () {
        return (
            <li className="links__item top-toolbar__item" onClick={this.onPublishClick.bind(this)}><i className="i-publish" />Publish this quiz</li>
        );
    }
}
