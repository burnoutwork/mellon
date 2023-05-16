import PropTypes from "prop-types";
import AccountBg from "./AccountBg";

export const AccountInfo = ({ avatar, name }) => {
    return (
        <div className="AccountInfo">
            <img src={avatar} alt="Avatar" className="account-info--avatar"/>
            <div className="account-info--name">
                <h4>{name}</h4>
            </div>
        </div>
    )
}

AccountBg.propTypes = {
    avatar: PropTypes.any,
    name: PropTypes.string
};