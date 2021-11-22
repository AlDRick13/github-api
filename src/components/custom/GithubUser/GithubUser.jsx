import React from 'react';
import {Link, useLocation} from 'react-router-dom';
//css
import "./GithubUser.styles.css"

const GithubUser = ({name, nick_name, followers, repos, following, avatar}) => {

    const {pathname} = useLocation()

    return (
        <div className="text-center card-border pb-3 pt-3 w-2/3 tablet:w-1/4  m-auto mt-20 bg-carne">
        <span className="text-second_orange  text-3xl font-bold">{nick_name}{name?`(${name})`:null}</span>
<hr/>
            <div className="card-header flex justify-between items-center p-10">
        <img src={avatar} alt=":V" className="h-24 w-24" />

      </div>

      <div className="card-body flex flex-col items-center">
        
        {pathname=== "/"? <>
        <p>
          <Link to={`/${nick_name}/repos`}>
            <span className="text-second_orange  text-xl	font-bold	"> Repos: </span>{" "}
            {repos}
          </Link>


        </p>
        <p>
          <Link to={`/${nick_name}/followers`}>
            <span className="text-second_orange  text-xl	font-bold	"> Followers: </span>{" "}
            {followers}
          </Link>
        </p>
        <p>
          <span className="text-second_orange text-xl	font-bold	"> Following: </span>{" "}
          {following}
        </p></> 
        : 
        <p> 
             <a rel="noreferrer" href={`https://github.com/${nick_name}?tab=repositories`} target="_blank">
            <span className="text-second_orange  text-xl	font-bold	"> Click to see repos </span>{" "}
            </a> 
        
      </p>}
      </div>
            
        </div>
    );
};

export default GithubUser;