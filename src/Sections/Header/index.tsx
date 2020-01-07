import React from 'react';
import './index.scss';

import logo from '../../Assets/lqd-coders.png';

import Navbar from './navbar';
import HeaderButtons from './buttons';

const HeaderSection : React.FC = () =>{
    return (
        <div id="header">
            <div className={"logo-div"}>
                <img src={logo}
                    alt={"logo LQDCoder"}
                    className={"top-logo"}
                />
                <HeaderButtons/>
            </div>
            <Navbar/>
        </div>
    );
};

export default HeaderSection;
