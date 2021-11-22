import React from 'react';

const Repos = ({repoName, description, language}) => {
            {/* <h1>{repoName}</h1> */}


    return (
        <div className="text-center card-border p-3 w-2/3 tablet:w-1/4  m-auto mt-20 bg-carne">
            <span className="text-second_orange  text-xl font-bold">{repoName}</span>
            <hr/>
             
                <p> 
                    <span className="text-second_orange text-xl font-bold"> Description: </span>
                    {description}                
            </p>

            <p> 
                    <span className="text-second_orange  text-xl font-bold"> Language:  </span>
                    {language}                 
            </p>
            </div>
                    
    );
};

export default Repos;