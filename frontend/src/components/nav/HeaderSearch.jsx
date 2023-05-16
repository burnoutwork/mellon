import {AiOutlineSearch} from "react-icons/ai";
import AccountBg from "../account/AccountBg";
import PropTypes from "prop-types";

export const HeaderSearch = ({avatar}) => {
    return (
        <div className="HeaderSearch">
            <div className="header--search-wrap">
                <div className="header-search--icon"><AiOutlineSearch></AiOutlineSearch></div>
                <input className="header-search--input" type="text" placeholder="Search..."/>
            </div>
            <div className="header--search--avatar">
                <img src={avatar} alt="Avatar"/>
            </div>
        </div>
    )
}

AccountBg.HeaderSearch = {
    avatar: PropTypes.any,
};