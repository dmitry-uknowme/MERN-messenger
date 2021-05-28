import { CSSTransition } from 'react-transition-group';
import useModal from '../../hooks/useModal';
import styles from './index.module.sass';

export interface ModalOptions {
	visible?: boolean;
	title?: string;
	body?: string;
	footer?: string;
}

interface ModalProps {
	children?: React.ReactChildren;
	options?: ModalOptions;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
	const { modalStatus, isModalOpen, toggleModal } = useModal();
	const { title, body, footer } = modalStatus;
	return (
		<div className={styles.modal}>
			<CSSTransition in={isModalOpen} timeout={300} classNames={styles.modal__overlay} unmountOnExit>
				<div className={styles.modal__overlay} onClick={toggleModal}></div>
			</CSSTransition>
			<CSSTransition in={isModalOpen} timeout={500} classNames={styles.modal__window} unmountOnExit>
				<div className={styles.modal__window}>
					<h1 className={styles.modal__header}>{title || 'Modal'}</h1>
					<div className={styles.modal__body}>{children ? <> {children}</> : <p>{body}</p>}</div>
					<div className={styles.modal__footer}>{footer}</div>
				</div>
			</CSSTransition>
		</div>
	);
};

export default Modal;
