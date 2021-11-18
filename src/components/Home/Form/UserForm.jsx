import React from 'react';

//styles
import "./UserForm.styles.css";

const UserForm = ({handleSearchUser, handleUserName}) => {
    return (
        <form
        className="mt-20 m-auto w-5/6 tablet:w-1/2 text-center"
        onSubmit={e => handleSearchUser(e)}>
         <input         
         className="w-2/3 search-input p-4 bg-black text-white"
         placeholder="User Name"
         onChange={({target}) => handleUserName(target)}
         type="text" />
         <input
         value="Search!"
         className="w-1/3 search-input_button p-4 bg-second_orange text-white"
         type="submit" />
       </form>
    );
};

export default UserForm;