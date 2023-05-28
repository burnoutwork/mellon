import "./nav.css";
import routes from "../../routes";
import {NavItem} from "./NavItem";
import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {RiLogoutBoxRLine} from "react-icons/ri";
import Wallet from "../../contract/near-wallet";

export const Sidebar = () => {
    const location = useLocation();
    let navigate = useNavigate();

    const checkIsCurrentRoute = (path) => {
        return path === location.pathname
    }

    const logout = () => {
        Wallet.signOut();
        navigate("/")
    };

    return (
        <div className="Sidebar">
            <div className="sidebar--title">
                <a href="/">Melon</a>
            </div>
            <hr/>
            <div className="sidebar---items">
                {routes.filter(route => "navIcon" in route).map(route => {
                    return <NavItem isActive={checkIsCurrentRoute(route.path)} path={route.path} text={route.name}
                                    icon={route.navIcon}/>
                })}
            </div>
            <div className="sidebar--items-bottom">
                <NavItem text="Logount" icon={RiLogoutBoxRLine} onClick={logout}/>
            </div>
        </div>
    )
}