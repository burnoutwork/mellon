import {Header} from "../components/nav/Header";
import {Sidebar} from "../components/nav/Sidebar";
import routes from "../routes";
import {Navigate, Route, Routes} from "react-router-dom";

export const DefaultLayout = () => {
    return (
        <div className="DefaultLayout">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <Sidebar/>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-9 app-content">
                    <Header/>
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