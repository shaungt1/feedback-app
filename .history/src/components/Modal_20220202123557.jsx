import ReactModal from 'react-modal';
import { css } from '@emotion/core'


import React from 'react'
import Card from './shared/Card';

export const Modal = ({}) => {
    const  [modalIsOpen, setModalIsOpen] = useState(false);

 const   handleOpenModal = (e) => {
        setModalIsOpen({ modalIsOpen: true });
      };

 const  handleCloseModal = (e) => {
        e.preventDefault()
       setModalIsOpen({ showModal: false });
      };


    return (
        <div css={css``}>
            <button onClick={handleOpenModal}>Trigger Modal</button>
            <Card>
                <ReactModal 
                isOpen={this.state.showModal}
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