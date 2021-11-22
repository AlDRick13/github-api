import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

//components
import Repos from '../../components/Repos/Repos';
const ReposPage = () => {
    //hooks
    const { user } = useParams();
    //state
    const [userRepos, setUserRepos] = useState([]);

    useEffect(() => {
        const handleUserRepos = async () => {
            const response = await fetch(`https://api.github.com/users/${user}/repos`);
            const result = await response.json();
            console.log(result);
            setUserRepos(result);

        }
        handleUserRepos()
    }, [])

    return (
        <div  className="text-center pt-5 pb-5">
            <span  className="text-second_orange text-5xl font-bold">Repos</span>
            {userRepos.map(repo =>(
                <Repos key={repo.id} repoName={repo?.name} description={repo?.description} language={repo?.language} />
            ))}
        </div>
    );
};

export default ReposPage;