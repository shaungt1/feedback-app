import ReactModal from 'react-modal';
import { css } from '@emotion/core'


import React from 'react'

export const Modal = () => {
    return (
        <div css={css``}>
            <ReactModal>
            parentSelector={() => document.querySelector('#root')}
            overlayRef={node => (this.overlayRef = node)}
            contentRef={node => (this.contentRef = node)}
                   <h3>Developed by: Shaun Pritchard</h3>
                   <p> This is a functional component for a reactive rating system which is part of a larger application</p>
            </ReactModal>
            
        </div>
    )
}