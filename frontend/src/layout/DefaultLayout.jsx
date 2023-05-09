import {Header} from "../components/nav/Header";
import {Sidebar} from "../components/nav/Sidebar";

export const DefaultLayout = () => {
    return (
        <div className="DefaultLayout">
            <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9 app-content">
                    <Header/>
                </div>
            </div>
        </div>
    )
}