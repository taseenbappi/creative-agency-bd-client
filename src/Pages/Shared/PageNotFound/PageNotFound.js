import React from 'react';
import Navigation from '../Navigation/Navigation';

const PageNotFound = () => {
    const styles = {
        color: "red",
        padding: "50px",
        fontFamily: "Poppins, sans- serif",


    }
    return (
        <>
            <Navigation></Navigation>
            <div className='row d-flex justify-content-center align-items-center ' style={styles}>
                <h1>Page Not Found!!</h1>
            </div>
        </>
    );
};

export default PageNotFound;