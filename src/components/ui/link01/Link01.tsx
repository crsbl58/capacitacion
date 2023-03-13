import styles from './Link01.module.scss'

const Link01 = ({text}:{text:string}) => {
  return (
    <div className={styles.Link01}>
        <a href="url">{text}</a> 
    </div>
  )
}

export default Link01