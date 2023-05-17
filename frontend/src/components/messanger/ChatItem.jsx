import PropTypes from "prop-types";
import {NavItem} from "../nav/NavItem";
import "./messanger.css";

export const ChatItem = ({ avatar, accountId, lastMessage }) => {
    return (
        <div className="ChatItem">
            <img src={avatar} alt="Avatar" className="chat-item--avatar"/>
            <div className="chat-item--info">
                <h6 className="chat-item--accountId">{accountId}</h6>
                <p className="chat--item--last-message">{lastMessage}</p>
            </div>
        </div>
    )
}

NavItem.propTypes = {
    lastMessage: PropTypes.string,
    accountId: PropTypes.string,
    avatar: PropTypes.any
};
