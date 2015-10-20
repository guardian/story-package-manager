const express = require('express');
const router = express.Router();


const React = require('react'),
    reactRoutes = rootRequire('public/js/routes/routes'),
    dynamo = require('../util/dynamo');

import createLocation from 'history/lib/createLocation';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';

const configureStore = rootRequire('public/js/configureStore');
const appConfig = rootRequire('conf/appConfig')
          .getConfig(process.env.NODE_ENV || 'development');

function errorHandler(err) {
    throw new Error(err);
}

/* GET home page. */
router.get('/', function(req, res, next) {

    const reactOutput = React.renderToString(
        <Provider store={store}>
            {() => <RoutingContext {...renderProps}/> }
        </Provider>
    );

    res.render('index', {
        reactOutput: reactOutput,
        initialState: JSON.stringify({}),
        additionalConf: JSON.stringify({})
    });
});

module.exports = router;
