import {Header} from "../components/nav/Header";
import {Sidebar} from "../components/nav/Sidebar";

export const DefaultLayout = () => {
    return (
        <div className="DefaultLayout">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <Sidebar/>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-9 app-content">
                    <Header/>
                </div>
            </div>
        </div>
    )
}