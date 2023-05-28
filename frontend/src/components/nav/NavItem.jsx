import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const NavItem = ({ isActive = false, path, text, icon, onClick }) => {
    const nav =  (
        <div className="NavItem">
            <div onClick={onClick} className={isActive ? "nav-item-wrapper nav-item--active": "nav-item-wrapper"}>
                <div className="icon">
                    {icon()}
                </div>
                <p className="nav-item--text">{text}</p>
            </div>
        </div>
    );

    if (path) {
        return (
            <Link to={path}>
                {nav}
            </Link>
        )
    } else {
        return nav
    }
}

NavItem.propTypes = {
    isActive: PropTypes.bool,
    path: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    icon: PropTypes.any
};

