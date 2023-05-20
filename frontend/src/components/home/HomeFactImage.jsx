import PropTypes from "prop-types";

export const HomeFactImage = ({image}) => {
    return (
        <div className="HomeFactImage">
            <img src={image} alt="Fact image"/>
        </div>
    )
}

export default HomeFactImage;

HomeFactImage.propsType = {
    image: PropTypes.any
}