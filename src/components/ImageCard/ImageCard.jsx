import PropTypes from "prop-types";
import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => (
  <div className={s.card}>
    <img src={image.urls.small} alt={image.alt_description} />
  </div>
);

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
};

export default ImageCard;
