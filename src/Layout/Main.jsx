import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBAr from '../Components/NavBAr';

const Main = () => {
    return (
        <div>
            <NavBAr></NavBAr>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;