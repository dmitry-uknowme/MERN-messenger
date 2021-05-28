import { createContext } from 'react';
import { ModalOptions } from '.';

export interface IModal {
	modalStatus: ModalOptions;
	isModalOpen: boolean;
	toggleModal(options: ModalOptions): void;
}

export const ModalContext = createContext({} as IModal);
