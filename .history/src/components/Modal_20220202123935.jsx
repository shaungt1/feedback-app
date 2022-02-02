import ReactModal from 'react-modal';
import { useState} from 'react'
import React from 'react'
import Card from './shared/Card';


function Modal = ({isOpen, onRequestClose }) => {
    const  [modalIsOpen, setModalIsOpen] = useState(false);

 const   handleOpenModal = (e) => {
        setModalIsOpen({ modalIsOpen: true });
      };

 const  handleCloseModal = (e) => {
        e.preventDefault()
       setModalIsOpen({ showModal: false });
      };


    return (
        <div className="ReactModal__Overlay">
            <button onClick={handleOpenModal}>Trigger Modal</button>
            <Card>
                <ReactModal 
                isOpen={modalIsOpen}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
                >
                <h3>Developed by: Shaun Pritchard</h3>
                <p> This is a functional component for a reactive rating system which is part of a larger application</p>
                <button onClick={handleCloseModal}>Close Modal</button>
                </ReactModal>
            </Card>
        </div>
    )

    
}

export default Modal;