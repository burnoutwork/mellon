import React from 'react'
import {VscAccount} from "react-icons/vsc";
import {TiMessages} from "react-icons/ti";
import {FiSettings, FiUsers} from "react-icons/fi";

const Home = React.lazy(() => import('./pages/Home'))


const Account = React.lazy(() => import('./pages/Account'))
const Messenger = React.lazy(() => import('./pages/Messanger'))


const routes = [
    { path: "/", name: "Home", element: Home },
    { path: "/home", name: "Home", element: Home },
    { path: "/account", name: "Account", element: Account, navIcon: VscAccount },
    { path: "/account/:accountId", name: "AccountWithId", element: Account },
    { path: "/messenger", name: "Messenger", element: Messenger, navIcon: TiMessages },
    { path: "/subscriptions", name: "Subscriptions", navIcon: FiUsers },
    { path: "/settings", name: "Settings", navIcon: FiSettings }


];

export default routes;
