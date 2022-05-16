import React from 'react';

// type WaitingLogoPropsType = {
//     isFetching: boolean
// }

const WaitingLogo = () => {
    return (
        <div style={{textAlign:'center'}}>
            <img style={{width: '200px' , height: '200px' }} src="https://flevix.com/wp-content/uploads/2020/01/Circle-Loading.svg" alt="loading"/>
            <p style={{fontWeight:'bold', fontSize: '25px', paddingBottom: '0px'}}>Loading, please wait</p>
        </div>
    );
};

export default WaitingLogo;