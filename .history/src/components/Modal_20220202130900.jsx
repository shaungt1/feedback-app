import React from 'react';
import ReactDOM from 'react-dom';
import Button from './shared/Button';
import Card from './shared/Card';



const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <Card>
    <div className="modal-overlay modal-content"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
            <Button>
          <button type="button btn" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
          </Button>
        </div>
        <h3>Developer: Shaun Pritchard</h3>
        <p>
          This component app is part of a bigger application dev.
        </p>
      </div>
    </div>
    </Card>
  </React.Fragment>, document.body
) : null;

export default Modal;