import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => (
  <ul className={styles.gallery}>
    {images.map((image) => (
      <li key={image.id}>
        <ImageCard image={image} />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
