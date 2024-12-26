import Modal from "react-modal";
import PropTypes from "prop-types";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const imageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.content}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <button onClick={onClose} className={s.closeButton}>
          X
        </button>
      </div>
    </Modal>
  );
};

imageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }),
};

export default imageModal;
