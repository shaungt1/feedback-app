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
                   <p>Modal Content.</p>
            </ReactModal>
            
        </div>
    )
}