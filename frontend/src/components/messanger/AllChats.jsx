import {ChatItem} from "./ChatItem";
import avatarImage2 from "../../assets/image/avatars/2.jpeg";
import avatarImage3 from "../../assets/image/avatars/3.png";
import avatarImage4 from "../../assets/image/avatars/4.jpg";
import "./messanger.css";

export const AllChats = () => {
    return (
        <div className="AllChats">
            <ChatItem avatar={avatarImage2} accountId="hellokity.mainnet" lastMessage="Hello!"/>
            <ChatItem avatar={avatarImage3} accountId="worker.mainnet" lastMessage="What is?"/>
            <ChatItem avatar={avatarImage4} accountId="rust.mainnet" lastMessage="This is work"/>

        </div>
    )
}