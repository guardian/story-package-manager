const express = require('express');
const router = express.Router();

const React = require('react'),
    reactRoutes = rootRequire('public/js/routes/routes');

const createLocation = require('history/lib/createLocation');
const Router = require('react-router');
const RoutingContext = Router.RoutingContext;
const match = Router.match;
const Provider = require('react-redux').Provider;

const configureStore = rootRequire('public/js/configureStore');
// const appConfig = rootRequire('conf/appConfig')
//           .getConfig(process.env.NODE_ENV || 'development');

function errorHandler(err) {
    throw new Error(err);
}

exports.isomorphic = (req, res, next) => {

    const store = configureStore();
    const location = createLocation(req.originalUrl);
    const routes = reactRoutes;

    // store.dispatch({
    //     type: 'RECIEVE_QUIZ_LIST',
    //     quizzes: data.quizzes,
    //     lastKey: data.lastKey,
    //     table: data.table
    // });
    //
    // store.dispatch({
    //     type: 'RECIEVE_USER_INFO',
    //     user: req.guUser
    // });

    match({ routes, location }, (error, redirectLocation, renderProps) => {

        if (redirectLocation) {
            res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        }
        else if (error) {
            res.send(500, error.message);
        }
        else if (renderProps == null) {
            res.send(404, 'Not found');
        }
        else {
            const reactOutput = React.renderToString(
                <Provider store={store}>
                    <RoutingContext {...renderProps}/>
                </Provider>
            );

            res.render('index', {
                reactOutput: reactOutput,
                initialState: JSON.stringify({}),
                additionalConf: JSON.stringify({})
            });
        }
    });

};
