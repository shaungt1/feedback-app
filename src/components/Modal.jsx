import React from 'react';
import ReactDOM from 'react-dom';

import Card from './shared/Card';



const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <Card>
    <div className="modal-overlay modal-content"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
       
          <button type="button " className="modal-close-button " data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span className="modal-close-button" aria-hidden="true">&times;</span>
          </button>
    
        </div>
        <h3>Developer: Shaun Pritchard</h3>
        <p>
          This component app is part of a bigger application dev. It is a simple modal component that can be used to display information to the user.
        </p>
        <code>This application runs with with JSON Server "server -s run" for persistance at port 5000</code>
      </div>
    </div>
    </Card>
  </React.Fragment>, document.body
) : null;

export default Modal;