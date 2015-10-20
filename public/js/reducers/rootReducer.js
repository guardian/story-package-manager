import _ from 'lodash';

// import {CREATE_STATUS_CREATING, CREATE_STATUS_INACTIVE} from '../constants/CreateQuizConstants';
//
// import {REQUEST_QUIZ_CREATE, RECIEVE_QUIZ_CREATE, ERROR_QUIZ_CREATE} from '../actionCreators/createQuiz';
// import {RECIEVE_QUIZ_LIST, ERROR_QUIZ_LIST} from '../actionCreators/listQuiz';
// import {RECIEVE_USER_INFO} from '../actionCreators/user';
// import {RECIEVE_QUIZ_DELETE, ERROR_QUIZ_DELETE} from '../actionCreators/deleteQuiz';
// import {RECIEVE_QUIZ_GET, ERROR_QUIZ_GET} from '../actionCreators/getQuiz';
// import {RECIEVE_QUIZ_UPDATE, REQUEST_QUIZ_UPDATE, ERROR_QUIZ_UPDATE} from '../actionCreators/updateQuiz';
// import {RECIEVE_QUIZ_SEARCH, ERROR_QUIZ_SEARCH} from '../actionCreators/searchQuizzes';
// import {RECIEVE_QUIZ_SEARCH_SUGGEST, ERROR_QUIZ_SEARCH_SUGGEST} from '../actionCreators/suggestQuizzes';
//
// import {SAVE_STATUS_CLEAN, SAVE_STATUS_SAVED, SAVE_STATUS_SAVING, SAVE_STATUS_ERROR} from '../constants/SaveStateConstants';

export default function files(state = {}, action) {
    switch (action.type) {
        // case REQUEST_QUIZ_CREATE:
        //      return Object.assign({}, state, {
        //          createState: CREATE_STATUS_CREATING,
        //          saveState: {state: SAVE_STATUS_SAVING}
        //      });
        //
        // case RECIEVE_QUIZ_CREATE:
        //     return Object.assign({}, state, {
        //         createState: CREATE_STATUS_INACTIVE,
        //         quizzes: state.quizzes.concat([action.quiz]),
        //         saveState: {state: SAVE_STATUS_SAVED}
        //     });
        //
        // case RECIEVE_USER_INFO:
        //     return Object.assign({}, state, {
        //         user: action.user
        //     });
        //
        // case RECIEVE_QUIZ_LIST:
        //     let quizzes = _.cloneDeep(state.quizzes);
        //
        //     //REPLACE OR ADD EACH ITEM
        //     action.quizzes.forEach(function(quiz) {
        //         const existingQuiz = _.find(quizzes, (q) => q.id === quiz.id);
        //
        //         if (existingQuiz) {
        //             quizzes = quizzes.map((q) => {
        //                 return q.id === quiz.id ? quiz : q;
        //             });
        //         } else {
        //             quizzes.push(quiz);
        //         }
        //     });
        //
        //     return Object.assign({}, state, {
        //         lastKey: action.lastKey,
        //         quizzes: quizzes,
        //         table: action.table
        //     });
        //
        // case RECIEVE_QUIZ_DELETE:
        //     return Object.assign({}, state, {
        //         lastKey: action.lastKey,
        //         quizzes: state.quizzes.filter((q) => {return q.id !== action.quiz.id;}),
        //         saveState: {state: SAVE_STATUS_CLEAN}
        //     });
        //
        // case RECIEVE_QUIZ_GET:
        //     const existingQuiz = _.find(state.quizzes, (q) => q.id === action.quiz.id);
        //
        //     if (existingQuiz) {
        //         return Object.assign({}, state, {
        //             quizzes: state.quizzes.map((q) => {
        //                 return q.id === action.quiz.id ? action.quiz : q;
        //             })
        //         });
        //     }
        //
        //     return Object.assign({}, state, {
        //         quizzes: state.quizzes.concat([action.quiz])
        //     });
        //
        // case REQUEST_QUIZ_UPDATE: //This is Request not Recieve as updating optimistically
        //     return Object.assign({}, state, {
        //         quizzes: state.quizzes.map((q) => {
        //             return q.id === action.quiz.id ? action.quiz : q;
        //         }),
        //         saveState: {state: SAVE_STATUS_SAVING}
        //     });
        //
        // case RECIEVE_QUIZ_UPDATE: //This is Request not Recieve as updating optimistically
        //     return Object.assign({}, state, {
        //         saveState: {state: SAVE_STATUS_SAVED}
        //     });
        //
        // case ERROR_QUIZ_LIST:
        //     return Object.assign({}, state, {
        //         saveState: {state: SAVE_STATUS_ERROR, message: action.message}
        //     });
        //
        // case ERROR_QUIZ_CREATE:
        //     return Object.assign({}, state, {
        //         saveState: {state: SAVE_STATUS_ERROR, message: action.message}
        //     });
        //
        // case ERROR_QUIZ_DELETE:
        //     return Object.assign({}, state, {
        //         saveState: {state: SAVE_STATUS_ERROR, message: action.message}
        //     });
        //
        // case ERROR_QUIZ_GET:
        //     return Object.assign({}, state, {
        //         saveState: {state: SAVE_STATUS_ERROR, message: action.message}
        //     });
        //
        // case ERROR_QUIZ_UPDATE:
        //     return Object.assign({}, state, {
        //         saveState: {state: SAVE_STATUS_ERROR, message: action.message}
        //     });
        //
        // case RECIEVE_QUIZ_SEARCH:
        //     return Object.assign({}, state, {
        //         searchResults: action.results
        //     });
        // case ERROR_QUIZ_SEARCH:
        //     // ?
        //
        // case RECIEVE_QUIZ_SEARCH_SUGGEST:
        //     return Object.assign({}, state, {
        //         searchSuggestions: action.results
        //     });
        // case ERROR_QUIZ_SEARCH_SUGGEST:
        //     // ?

        default:
            return state;
    }
}
