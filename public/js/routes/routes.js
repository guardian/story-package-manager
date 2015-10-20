import React        from 'react';
import { Route, IndexRoute } from 'react-router';

import ReactApp     from '../components/ReactApp.react';
import Dashboard    from '../components/Dashboard.react';
// import Quiz         from '../components/Quiz.react';
// import QuizEditor   from '../components/editor/QuizEditor.react';
// import ResultGroups from '../components/editor/ResultGroups.react';
// import QuizParser   from '../components/QuizParser.react';
// import QuizPreview  from '../components/preview/QuizPreview.react';

export default [
    <Route path="/" component={ReactApp}>
        <IndexRoute component={Dashboard}/>
    </Route>
];
