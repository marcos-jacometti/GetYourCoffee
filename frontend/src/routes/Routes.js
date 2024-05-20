import React from "react";
import Home from "../pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCard from "../pages/shopping";

const AppRoutes = () => {
    return( 
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shopping" element={<ShoppingCard />}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;