import React from 'react'
import Modal from 'react-modal'
import Menu from './Menu'

const ModalMenu = ({ showModal }) => {
    return (
        <Modal 
            isOpen={showModal}
            className='Modal'
            overlayClassName="Overlay"
        >
        <Menu />
    </Modal>
    )
}

export default ModalMenu
