import PropTypes from "prop-types";

export const HomeFactTextBlock = ({ title, body, color }) => {
    return (
        <div data-speed="1.35" className="HomeFactTextBlock">
            <h2 className={"home-fact--text-block--title " + color}>{title}</h2>
            <p className="home-fact--text-block--body">{body}</p>
        </div>
    )
}

export default HomeFactTextBlock;

HomeFactTextBlock.propsType = {
    title: PropTypes.string,
    body: PropTypes.string,
    color: PropTypes.string
}