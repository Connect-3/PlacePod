import React from "react";
import Login from "./Login";
import Description from "./Description";
const IntroPage = ()=>{
    return (
        <div className="ui grid" id="intro">
            <div className="six wide column"><Description/></div>
            <div className="ten wide column"><Login /></div>
            <div></div>
        </div>
    )
}

export default IntroPage;
