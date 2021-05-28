import { useState } from 'react';
import { ModalOptions } from '.';
import { IModal, ModalContext } from './ModalContext';

const ModalProvider = ({ children }) => {
	const [modal, setModal] = useState<ModalOptions>({ visible: false });
	const modalHandler = (options: ModalOptions) => {
		setModal((state) => ({ ...state, visible: !state.visible, ...options }));
	};
	return <ModalContext.Provider value={{ modalStatus: modal, isModalOpen: modal.visible, toggleModal: modalHandler }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
