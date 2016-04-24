import React from 'react';
import ReactDOM from 'react-dom';
import Twitter from './Twitter.jsx';

export class Container extends React.Component {
  render() {
    return (
      <div id='innerContainer'>Hello {this.props.name}
        <Twitter/>
      </div>
    );
  }
}

ReactDOM.render(
  <Container name="Dev"/>,
  document.getElementById('container')
);
