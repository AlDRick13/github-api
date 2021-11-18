import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import GithubUser from "../../components/custom/GithubUser/GithubUser";
import Loader from "../../components/custom/Loader/Loader";

const Followers = () => {
  //Hooks
  const { user } = useParams();
  //State
  const [followers, setFollowers] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setFollowers([]);
    setLoader(true);
    const handleUserFollowers = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/followers`
      );
      const result = await response.json();
      setFollowers(result);
      console.log(result);
    };
    handleUserFollowers();
    setLoader(false);
  }, [user]);
console.log(user);
  return (
    <div  className="text-center pt-5 pb-5">
      <h2  className="text-second_orange text-3xl font-bold">Followers</h2>

      {followers && followers.length > 0 && !loader ? (
        followers.map(user => (
          <GithubUser
            avatar={user.avatar_url ? user.avatar_url : null}
            repos_url={user?.repos_url}
            nick_name={user?.login}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Followers;
