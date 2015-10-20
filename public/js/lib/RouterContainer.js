// RouterContainer.js

//This is a store for the router so it can be required in actions without causing a dependency loop.
//See https://github.com/rackt/react-router/blob/0.13.x/docs/guides/flux.md
var _router = null;

export default {
    set: (router) => {
        _router = router;
    },

    get: () => {
        return _router;
    }
};
