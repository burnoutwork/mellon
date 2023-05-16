import AccountBg from "../components/account/AccountBg";
import bdImage from "../assets/image/account-bd.jpeg";
import "../components/account/account.css";

export const Account = () => {
    return (
        <div className="Account">
            <AccountBg image={bdImage}/>
            <div className="account--main">
                <h1>fd</h1>
            </div>
        </div>
    )
}

export default Account;