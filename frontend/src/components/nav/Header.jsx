import "./nav.css";
import {useLocation} from "react-router-dom";
import routes from "../../routes";
import React from "react";
import {HeaderSearch} from "./HeaderSearch";
import avatarImage from "../../assets/image/avatars/1.avif";


export const Header = () => {
    const location = useLocation();

    const findCurrentRoute = () => {
        return routes.find(route => route.path === location.pathname).name
    }


    return (
        <header className="Header">
            <div className="header--page-info">
                <p className="header--page-info--title">{findCurrentRoute()}</p>
            </div>
            <HeaderSearch avatar={avatarImage}/>
        </header>
    )
}
