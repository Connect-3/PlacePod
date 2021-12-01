import React from 'react';

const FeedHeader = ({ heading, content }) => {
  return (
    <div className="ui segment internally celled grid" id="feed-header">
      <div className="row">
        <div className="twelve wide column">
          <h2 className="header">{heading}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedHeader;
