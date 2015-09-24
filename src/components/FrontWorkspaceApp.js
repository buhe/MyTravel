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
                <p><a href="http://j.map.baidu.com/M8OJD">嘉峪关地图</a></p>
                <p className='finish'>完成</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>嘉峪关 住一晚 27日</p>
                <p><a href="http://hotels.ctrip.com/hotel/jiayuguan326#ctm_ref=hod_hp_sb_lst">嘉峪关火车站酒店</a></p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>嘉峪关 2015-09-28 08:09</p>
                <p>7527</p>
                <p>5小时34分</p>
                <p>硬座(400)</p>
                <p className='finish'>完成</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>敦煌 2015-09-28 13:43</p>
              </Timeline.Item>
              <Timeline.Item color='red'>
                <p>敦煌 月牙泉 2015-09-28</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>敦煌 住一晚 28日</p>
                <p><a href="http://hotels.ctrip.com/hotel/dunhuang11#ctm_ref=ctr_hp_sb_lst">敦煌酒店预订</a></p>
                <p><a href="http://hotels.ctrip.com/hotel/439448.html#ctm_ref=www_hp_bs_lst">敦煌飞天大酒店</a></p>
                <p><a href="http://j.map.baidu.com/rcAcD">酒店具体位置</a></p>
                <p><a href="http://j.map.baidu.com/d3AcD">敦煌站到酒店没有公交,11公里,联系下是否可以接站</a></p>
                <p>0937-8853999</p>
                <p className='finish'>完成</p>
              </Timeline.Item>
              <Timeline.Item color='red'>
                <p>敦煌 莫高窟 2015-09-29</p>
                <p><a href="http://www.mgk.org.cn/cinema/buyCustom.htm">莫高窟门票预订</a></p>
                <p>12:00</p>
                <p className='finish'>完成</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>敦煌 2015-09-29 19:04</p>
                <p>K9668</p>
                <p>5小时05分</p>
                <p>硬座(292)</p>
                <p className='finish'>完成</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>酒泉 2015-09-30 00:09</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>酒泉 住一晚 29日</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>酒泉 2015-09-30 08:00</p>
                <p>汽车</p>
                <p>5小时</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>额济纳 2015-09-30 13:00</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>额济纳 胡杨林 2015-09-30</p>
                <p>半天</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>额济纳 胡杨林 2015-10-01</p>
                <p>半天</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>额济纳 2015-10-01 11:00</p>
                <p>汽车</p>
                <p>5小时</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>酒泉 2015-10-01 16:00</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>嘉峪关 2015-10-01 17:00</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>嘉峪关 2015-10-01 20:59</p>
                <p>T205</p>
                <p>硬卧(130)</p>
                <p>硬座(73)</p>
                <p className='finish'>完成</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>伊宁 2015-10-02 19:15</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>伊宁 住一晚 2日</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>伊宁 赛木湖 2015-10-03</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>伊宁 附近 住一晚 3日</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>伊宁 附近 草原 2015-10-04</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>伊宁 附近 住一晚 4日</p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>伊宁 附近 待定 2015-10-05</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>伊宁 附近 住一晚 5日</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>伊宁 2015-10-06 10:30</p>
                <p className='finish'>完成</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>上海 2015-10-08 17:46</p>
              </Timeline.Item>
            </Timeline>
          </Panel>
        </div>
    );
  }
});

module.exports = FrontWorkspaceApp;
