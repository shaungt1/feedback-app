import ReactModal from 'react-modal';
import { css } from '@emotion/core'


import React from 'react'

export const Modal = () => {
    return (
        <div css={css``}>
            <ReactModal>
            parentSelector={() => document.querySelector('#root')}>
                   <p>Modal Content.</p>
            </ReactModal>
            
        </div>
    )
}