import styles from './ScreenModal.module.scss';

const ScreenModal = ({ children, backgroundColor }: any) => {
  return (
    <div
      style={{ backgroundColor }}
      className={styles.screenModal00}>
      {children}
    </div>
  )
}

export default ScreenModal;