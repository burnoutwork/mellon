import {Header} from "../components/nav/Header";
import {Sidebar} from "../components/nav/Sidebar";
import routes from "../routes";
import {Navigate, Route, Routes} from "react-router-dom";
import "./default-layout.css";

export const DefaultLayout = () => {
    return (
        <div className="DefaultLayout">
            <Sidebar/>
            <div className="app-view">
                <Header/>
                <div className="app-content">
                    <Routes>
                        {routes.map((route, idx) => {
                            return (
                                route.element && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        name={route.name}
                                        element={<route.element />}
                                    />
                                )
                            )
                        })}
                        <Route path="/" element={<Navigate to="account" replace />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}