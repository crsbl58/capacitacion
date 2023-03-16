import React from 'react'
import styles from './link.module.scss'
import conversions from '@/components/conversions'

const Link = ({
    text,
    fontFamily,
    fontWeight,
    lineHeight,
    color }:
    {
        text: string,
        fontFamily: string,
        fontWeight: string,
        lineHeight: number,
        color: string
    }) => {
    return (
        <div className={styles.link00}

        >
            <a style={{
                fontFamily,
                fontWeight,
                lineHeight: conversions.toRem(lineHeight),
                color
            }} href="url">{text}</a>
        </div>
    )
}

export default Link