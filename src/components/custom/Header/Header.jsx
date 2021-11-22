import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header
      className={`h-16 bg-second_orange items-center grid justify-items-center mi-clase `}
    >
      <Link to='/'>
      <span className="text-white text-5xl font-bold tablet:text-3xl">
       Github API by ALDO
      </span>
      </Link>

      
    </header>
    );
};

export default Header;