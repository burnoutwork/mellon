import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const NavItem = ({ isActive = false, path, text, icon }) => {
    return (
        <Link to={path} className="NavItem">
            <div className={isActive ? "nav-item-wrapper nav-item--active": "nav-item-wrapper"}>
                <div className="icon">
                    {icon()}
                </div>
                <p className="nav-item--text">{text}</p>
            </div>
        </Link>
    )
}

NavItem.propTypes = {
    isActive: PropTypes.bool,
    path: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.any
};

