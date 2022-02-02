import ReactModal from 'react-modal';
import { css } from '@emotion/core'


import React from 'react'

export const Modal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div css={css``}>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
         <h3>Developed by: Shaun Pritchard</h3>
          <p> This is a functional component for a reactive rating system which is part of a larger application</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>

         
            
        </div>
    )
}