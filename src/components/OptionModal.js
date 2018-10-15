import React from 'react';
import ReactModal from 'react-modal';

const OptionModal = (props) => (
    <ReactModal 
    isOpen={!!props.selectedOption}
    contentLabel="Your selected Option"
    onRequestClose={props.closeModal}
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button onClick={props.closeModal}>Done</button>
    </ReactModal>
    );



export default OptionModal;