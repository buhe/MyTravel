'use strict';

describe('FrontWorkspaceApp', () => {
  let React = require('react/addons');
  let FrontWorkspaceApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    FrontWorkspaceApp = require('components/FrontWorkspaceApp.js');
    component = React.createElement(FrontWorkspaceApp);
  });

  it('should create a new instance of FrontWorkspaceApp', () => {
    expect(component).toBeDefined();
  });
});
