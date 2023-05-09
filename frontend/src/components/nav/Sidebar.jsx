import "./nav.css";
import routes from "../../routes";
import {NavItem} from "./NavItem";
import React from "react";
import {useLocation} from "react-router-dom";

export const Sidebar = () => {
    const location = useLocation();

    const checkIsCurrentRoute = (path) => {
        return path === location.pathname
    }

    return (
        <div className="Sidebar">
            <div className="sidebar--title">
                <a href="/">Melon</a>
            </div>
            <hr/>
            <div className="sidebar---items">
                {routes.filter(route => "navIcon" in route).map(route => {
                    return <NavItem isActive={checkIsCurrentRoute(route.path)} path={route.path} text={route.name} icon={route.navIcon}/>
                })}
            </div>
        </div>
    )
}