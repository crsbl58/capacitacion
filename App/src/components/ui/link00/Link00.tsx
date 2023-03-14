import React from 'react'
import styles from './link00.module.scss'

const Link00 = ({text}:{text:string}) => {
    return (
        <div className={styles.link00}>
            <a href="url">{text}</a>
            </div>
    )
}

export default Link00