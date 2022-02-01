import React from 'react';
import ReactDOM from 'react-dom';

function Modal(props) {


    const onClickClose = () => {
        props.setOpenModal(false);
    }

    return ReactDOM.createPortal(
      <div id="ventana_modal"><div id="subventana_modal"><p className="cerrar" onClick={onClickClose}>X</p>
        {props.children}
        </div></div>,
        document.getElementById("modal")
    );
}

export { Modal };