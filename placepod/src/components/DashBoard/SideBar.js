import React from 'react';

const SideBar = ()=>{
    return (
        <div className="ui items">
            <div className="item">
                <div className="ui tiny image">
                    <i className="deaf icon"></i>
                </div>
                <div className="middle aligned ">
                    <a className="header">PlacePod</a>
                </div>
            </div>
            <div className="ui middle aligned selection list">
                <div className="item">
                    <img className="ui avatar image" alt="img" src="/images/avatar/small/helen.jpg" />
                    <div className="content">
                        <div className="header">helen</div>
                    </div>
                </div>
                <div className="item">
                    <img className="ui avatar image" alt="img" src="/images/avatar/small/helen.jpg" />
                    <div className="content">
                        <div className="header">helen</div>
                    </div>
                </div>
                <div className="item">
                    <i className="deaf icon"></i>
                    <div className="content">
                        <div className="header">helen</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar