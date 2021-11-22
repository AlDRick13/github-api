import React,{useState} from 'react';
//components
import GithubUser from '../../components/custom/GithubUser/GithubUser'
import UserForm from '../../components/Home/Form/UserForm';
import Loader from "../../components/custom/Loader/Loader";

const HomePage = () => {
    //State
   const [userName, setUserName] = useState("");
   const [userInformation, setUserInformation] = useState(null);
   const [loader, setLoader] = useState(false);

   //funciones
   const handleUserName = ({ value }) => {
    setUserName(value);
  };

  const handleSearchUser =async e =>{
    e.preventDefault();
    setUserInformation(null);
    setLoader(true);
    const API = `https://api.github.com/users/${userName}`;
    const response = await fetch(API);
    const result = await response.json();
    console.log(result);
    setUserInformation(result);
    setLoader(false);
  }
    return (
        <>
        <UserForm
        handleUserName={handleUserName}
        handleSearchUser={handleSearchUser}
        />
        <div className="text-center">
        {userInformation ? (
          <GithubUser
            avatar={userInformation?.avatar_url}
            nick_name={userInformation?.login}
            name={userInformation?.name}
            repos={userInformation?.public_repos}
            followers={userInformation?.followers}
            following={userInformation?.following}
          />
        ) : null}
      </div>

      {loader && <Loader />}
            
        </>
    );
};

export default HomePage;