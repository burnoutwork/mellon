import {NavItem} from "../nav/NavItem";
import PropTypes from "prop-types";
import HomeFactTextBlock from "./HomeFactTextBlock";
import HomeFactImage from "./HomeFactImage";
import messengerImage from "../../assets/image/facts/messenger.png";

export const HomeFact = ({image, title, subtitle}) => {
    return (
        <div className="HomeFact">
            <HomeFactTextBlock title="All data is stored on the blockchain"
                               body="The social network is written on the Near blockchain, which means only you can manage your data"
                               color="gradient-green-blue"
            />
            <HomeFactImage image={messengerImage}/>
        </div>
    )
}

export default HomeFact;

HomeFact.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.any
};
