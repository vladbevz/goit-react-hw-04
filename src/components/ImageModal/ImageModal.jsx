import React, {useEffect} from 'react';
import Modal from 'react-modal';
import './ImageModal.css'

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',


  },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        maxWidth: '90vw',
        maxHeight: '90vh',
        width: 'auto',
        height: '100%',
        padding: '0'
  },
};

Modal.setAppElement('#root');

export default function ImageModal({ image, isOpen, onClose }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [onClose]);
    
     
      const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
    
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <button className='btn' onClick={onClose}>Close</button>
      <img className='img' src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
}