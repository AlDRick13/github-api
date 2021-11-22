import React from 'react';
import SvgLoader from './SvgLoader.svg';
//styles
import "./Loader.styles.css"
const Loader = () => {
    return (
        <div className="loader">
            <img src={SvgLoader} alt="loader" />
        </div>
    );
};

export default Loader;