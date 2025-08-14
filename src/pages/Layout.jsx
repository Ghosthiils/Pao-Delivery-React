import Footer from "../Component/Footer";
import Navbar from "../Component/NavBar";
import { Outlet } from "react-router-dom";
import React from 'react';

function Layout() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
        
    )
}

export default Layout;