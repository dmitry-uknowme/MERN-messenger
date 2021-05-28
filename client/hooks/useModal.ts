import { useContext } from 'react';
import { IModal, ModalContext } from '../components/Modal/ModalContext';

const useModal = () => useContext<IModal>(ModalContext);

export default useModal;
