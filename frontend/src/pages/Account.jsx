import AccountBg from "../components/account/AccountBg";
import bdImage from "../assets/image/account-bd.jpeg";
import "../components/account/account.css";
import {AccountInfo} from "../components/account/AccountInfo";
import avatarImage from "../assets/image/avatars/1.avif";


export const Account = () => {
    return (
        <div className="Account">
            <AccountBg image={bdImage}/>
            <div className="account--main">
                <AccountInfo name="admin.mainnet" avatar={avatarImage}/>
            </div>
        </div>
    )
}

export default Account;