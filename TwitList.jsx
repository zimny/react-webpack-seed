import React from 'react';

export class TwitList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var hasFeeds = this.props.feeds.length > 0 ? "feeds present" : "feeds not present yet";
    return (
      <div>{hasFeeds}</div>
    );
  }
}

module.exports = TwitList;
