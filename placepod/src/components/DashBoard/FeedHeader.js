import React from 'react';

const FeedHeader = () => {
  return (
    <div className="ui segment internally celled grid" id="feed-header">
      <div className="row">
        <div className="twelve wide column">
          <h1 className="header">
            <i className="list icon"></i>Opportunities
          </h1>
        </div>
        <div className="four wide column">
          List of Companies Placement Drive
        </div>
      </div>
    </div>
  );
};

export default FeedHeader;
