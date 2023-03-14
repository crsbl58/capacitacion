import styles from './Modal00.module.scss';
import ScreenModal00 from '../ScreenModal00/ScreenModal00';

const Modal00 = ({ children, state, title, text }: {
    children: any, state: boolean, title: string, text: string
}) => {
    return (state === true &&
        <ScreenModal00 backgroundColor='rgba(0, 0, 0, .47)'>
            <div className={styles.modal00}>
                <h2>X</h2>
                <h2>{title}</h2>
                <h2>{text}</h2>
                <div>{children}</div>
            </div>
        </ScreenModal00 >
    )
}

export default Modal00