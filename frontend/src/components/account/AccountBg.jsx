import "./account.css";
import PropTypes from "prop-types";

export const AccountBg = ({image}) => {
    return (
        <div className="AccountBg" style={{backgroundImage: `url(${image})`}}></div>

    )
}

export default AccountBg;

AccountBg.propTypes = {
    image: PropTypes.any
};
