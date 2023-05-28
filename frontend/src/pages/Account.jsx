import AccountBg from "../components/account/AccountBg";
import bdImage from "../assets/image/account-bd.jpeg";
import "../components/account/account.css";
import {AccountInfo} from "../components/account/AccountInfo";
import avatarImage from "../assets/image/avatars/1.avif";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {melon} from "../contract/near-interface";


export const Account = () => {
    let { accountId } = useParams();
    let [account, setAccount] = useState();

    useEffect( () => {
        if (accountId) {
            melon.getAccount(accountId).then(setAccount).catch(console.log)
        } else {
            melon.getSelfAccount().then(setAccount)
        }
    }, [])

    return (
        <div className="Account">
            <AccountBg image={bdImage}/>
            <div className="account--main">
                <AccountInfo name={account ? account.accountId : "..."} avatar={avatarImage}/>
            </div>
        </div>
    )
}

export default Account;