"use strict";
var React = require('react');
var ReactDOM=require('react-dom');
var Router = require('react-router');
var routes = require('./routes');


/*Router.run(routes,function(Handler){
    ReactDOM.render(<Handler/>,document.getElementById('app'));

    
});*/

ReactDOM.render(
    <Router>{routes}</Router>, document.getElementById('app')
    ) 