import React from 'react';
import './Modal.css';

const Modal = (props) => {

    return (
        <div className="backdrop" onClick={() => props.closeModal(false) }>
            <img src={props.selectedImg} alt="enlarged-pic" />
        </div>
    )
}

export default Modal
