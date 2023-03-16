import styles from './Modal.module.scss';
import ScreenModal from '../ScreenModal/ScreenModal';

const Modal = ({ children, title, text }: {
    children: any, title: string, text: string
}) => {
    return <ScreenModal backgroundColor='rgba(0, 0, 0, .47)'>
        <div className={styles.modal00}>
            <h2>X</h2>
            <h2>{title}</h2>
            <h2>{text}</h2>
            <div>{children}</div>
        </div>
    </ScreenModal >


}

export default Modal;