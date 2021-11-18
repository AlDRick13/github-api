import React from 'react';
import Header from '../components/custom/Header/Header'

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            
        </>
    );
};

export default MainLayout;