'use strict';

var React = require('react/addons');
//var ReactTransitionGroup = React.addons.TransitionGroup;
require('normalize.css');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/npm.js');
var Panel = require('react-bootstrap').Panel;
import {Timeline} from 'antd';

// CSS
require('normalize.css');
require('../styles/main.css');

//var imageURL = require('../images/yeoman.png');

var FrontWorkspaceApp = React.createClass({
  render: function () {
    return (
        <div className="main">
          <Panel header='中秋 + 国庆旅游'>
            <Timeline>
              <Timeline.Item color="green">
                上海 2015-09-26-12-05
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>嘉峪关 2015-09-27-18-05</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>嘉峪关 住一晚 27 ~ 28日</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>嘉峪关 2015-09-28-08-00</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>敦煌 2015-09-28-13-00</p>
              </Timeline.Item>
              <Timeline.Item color='red'>
                <p>敦煌 莫高窟 2015-09-28-15-00</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>敦煌 住一晚 28 ~ 29日</p>
              </Timeline.Item>
              <Timeline.Item color='red'>
                <p>敦煌 月牙泉 2015-09-29-08-00</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>敦煌 2015-09-29-19-00</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>酒泉 2015-09-30-00-00</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>酒泉 住一晚 29 ~ 30日</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>酒泉 2015-09-30-08-00</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>额济纳 2015-09-30-13-00</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>额济纳 胡杨林 2015-09-30</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>额济纳 胡杨林 2015-10-01</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>额济纳 2015-10-01-11-00</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>酒泉 2015-10-01-16-00</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>嘉峪关 2015-10-01-17-00</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>嘉峪关 2015-10-01-20-59</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>伊宁 2015-10-02-19-15</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>伊宁 住一晚 2 ~ 3</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>伊宁 赛木湖 2015-10-03</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>伊宁 草原 2015-10-04</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>伊宁 2015-10-05-10-30</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>上海 2015-10-07-17-30</p>
              </Timeline.Item>
            </Timeline>
          </Panel>
        </div>
    );
  }
});

module.exports = FrontWorkspaceApp;
