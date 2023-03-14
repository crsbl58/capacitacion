import React from 'react'
import styles from './Generic.module.scss'

const Col = ({ children, gap }: any) => {

    return (
        <div className={styles.col} style={{ gap }}>{children}</div>
    )
}

const Row = ({ children, gap }: any) => {

    return (
        <div className={styles.row} style={{ gap }}>{children}</div>
    )
}

export { Col, Row }