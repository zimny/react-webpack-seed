import React from 'react';
import TwitList from './TwitList.jsx';

export class Twitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {feeds: []}
    this.getFeeds = this.getFeeds.bind(this);
    this.emptyFeeds = this.emptyFeeds.bind(this);
  }
  getFeeds(){
    this.setState({feeds: [{title: "my title"}]});
  }
  emptyFeeds(){
    this.setState({feeds: []});
  }
  render() {
    var feeds = this.state.feeds;
    console.log("render for Twitter called");
    return <div><button onClick={this.getFeeds}>get feeds</button><br/>
  <button onClick={this.emptyFeeds}>empty feeds</button><TwitList feeds={feeds}/></div>;
  }
};

module.exports = Twitter;
