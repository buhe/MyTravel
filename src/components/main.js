'use strict';

var FrontWorkspaceApp = require('./FrontWorkspaceApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={FrontWorkspaceApp}>
    <Route name="/" handler={FrontWorkspaceApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
