import React from 'react'
import styles from './Generic.module.scss'
import conversions from '@/components/conversions';

const Col = ({ width, children, gap, padding = [], alignItems = '', justifyContent = '' }: any) => {
    return (
        <div className={styles.col} style={{
            width: `${conversions.toRem(width)}rem`,
            gap: `${conversions.toRem(gap)}rem`,
            alignItems, justifyContent,
            padding: `${conversions.toRem(padding[0])}rem 
         ${conversions.toRem(padding[1])}rem 
         ${conversions.toRem(padding[2])}rem 
         ${conversions.toRem(padding[3])}rem`
        }}>{children}</div>
    )
}

const Row = ({
    children,
    gap,
    padding = [],
    alignItems = '',
    justifyContent = '',
    margin = []
}: any) => {

    return (
        <div className={styles.row} style={{
            gap: `${conversions.toRem(gap)}rem`,
            alignItems, justifyContent,
            padding: `${conversions.toRem(padding[0])}rem 
        ${conversions.toRem(padding[1])}rem 
        ${conversions.toRem(padding[2])}rem 
        ${conversions.toRem(padding[3])}rem`,
            margin: `${conversions.toRem(margin[0])}rem 
        ${conversions.toRem(margin[1])}rem 
        ${conversions.toRem(margin[2])}rem 
        ${conversions.toRem(margin[3])}rem`,

        }}>{children}</div>
    )
}

const Container = (
    { children,
        justifyContent = '',
        alignItems = '',
        flexDirection = '',
        padding = [],
        type, className,
        templateColumns,
        templateRows
    }: any) => {
    return <div className={className}
        style={{
            width: '100%',
            height: '100%',
            justifyContent,
            alignItems,
            display: type,
            gridTemplateColumns: templateColumns,
            gridTemplateRows: templateRows,
            flexDirection,
            padding: `${conversions.toRem(padding[0])}rem 
        ${conversions.toRem(padding[1])}rem 
        ${conversions.toRem(padding[2])}rem 
        ${conversions.toRem(padding[3])}rem`,
        }}>
        {children}
    </div>
}

const Grid = ({
    children,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    alignItems,
    justifyContent,
    margin = [],
    padding = [],
    gridAutoRows
}: any) => {
    return <div
        style={{
            gridAutoRows: gridAutoRows,
            padding: `${conversions.toRem(padding[0])}rem 
            ${conversions.toRem(padding[1])}rem 
            ${conversions.toRem(padding[2])}rem 
            ${conversions.toRem(padding[3])}rem`,
            margin: `${conversions.toRem(margin[0])}rem 
            ${conversions.toRem(margin[1])}rem 
            ${conversions.toRem(margin[2])}rem 
            ${conversions.toRem(margin[3])}rem`,
            display: 'grid',
            gridColumnStart: columnStart,
            gridColumnEnd: columnEnd,
            gridRowStart: rowStart,
            gridRowEnd: rowEnd,
            alignItems,
            justifyContent
        }}
    >
        {children}
    </div>
}

export { Col, Row, Container, Grid }