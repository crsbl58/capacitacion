import styles from './ScreenModal00.module.scss';

const ScreenModal00 = ({ children, backgroundColor }: any) => {
  return (
    <div
      style={{ backgroundColor }}
      className={styles.screenModal00}>
      {children}
    </div>
  )
}

export default ScreenModal00;