import React                from 'react';
import { Route, IndexRoute } from 'react-router';

import ReactApp         from '../components/ReactApp.react';
import Dashboard        from '../components/Dashboard.react';
import Package          from '../components/Package.react';
import PackageEditor    from '../components/editor/PackageEditor.react';
// import ResultGroups from '../components/editor/ResultGroups.react';
// import QuizParser   from '../components/QuizParser.react';
// import QuizPreview  from '../components/preview/QuizPreview.react';

export default [
    <Route path="/" component={ReactApp}>

        <Route name="viewPackage" path="/package/:id" component={Package}>
            <IndexRoute component={PackageEditor}/>
        </Route>

        <IndexRoute component={Dashboard}/>
    </Route>
];
