import React from 'react'
import {VscAccount} from "react-icons/vsc";
import {TiMessages} from "react-icons/ti";
import {FiSettings, FiUsers} from "react-icons/fi";

const Account = React.lazy(() => import('./pages/Account'))

const routes = [
    { path: "/", name: "Account", element: Account },
    { path: "/account", name: "Account", element: Account, navIcon: VscAccount },
    { path: "/messages", name: "Messages", navIcon: TiMessages },
    { path: "/subscriptions", name: "Subscriptions", navIcon: FiUsers },
    { path: "/settings", name: "Settings", navIcon: FiSettings }


];

export default routes;
