import React from 'react'
import styles from './Generic.module.scss'
import conversions from '@/components/conversions';

const Col = ({
    border,
    width,
    height,
    children,
    gap,
    padding = [],
    alignItems = '',
    justifyContent = '',
    margin = []
}: any) => {
    return (
        <div className={styles.col}
            style={{
                border,
                height: `${conversions.toRem(height)}rem`,
                width: `${conversions.toRem(width)}rem`,
                gap: `${conversions.toRem(gap)}rem`,
                alignItems, justifyContent,
                margin: `${conversions.toRem(margin[0])}rem 
            ${conversions.toRem(margin[1])}rem 
            ${conversions.toRem(margin[2])}rem 
            ${conversions.toRem(margin[3])}rem`,
                padding: `${conversions.toRem(padding[0])}rem 
         ${conversions.toRem(padding[1])}rem 
         ${conversions.toRem(padding[2])}rem 
         ${conversions.toRem(padding[3])}rem`
            }}>{children}</div>
    )
}

const Row = ({
    children,
    border,
    height,
    width,
    gap,
    padding = [],
    alignItems = '',
    justifyContent = '',
    margin = []
}: any) => {

    return (
        <div className={styles.row} style={{
            border,
            height: `${conversions.toRem(height)}rem`,
            width: `${conversions.toRem(width)}rem`,
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
        className,
        type
    }: any) => {
    let display;
    if (justifyContent.length > 0 || alignItems.length > 0) {
        display = 'flex';
    }
    return <div className={className}
        style={{
            display,
            width: '100%',
            height: '100%',
            justifyContent,
            alignItems,
            flexDirection,
        }}>
        {children}
    </div>
}

const ContainerGrid = ({
    children,
    templateColumns,
    templateRows,
    justifyContent
}: any
) => {
    return <div className={styles.containerGrid}
        style={{
            justifyContent,
            gridTemplateColumns: templateColumns,
            gridTemplateRows: templateRows,
        }}>
        {children}
    </div>
}

const Grid = ({
    gridArea = [],
    children,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    justifyContent = '',
    alignItems = '',
}: any) => {
    let display;
    if (justifyContent.length > 0 || alignItems.length > 0) {
        display = 'flex';
    }
    return <div
        style={{
            /* gridArea: `${gridArea[0]} / ${gridArea[1]} / ${gridArea[2]} / ${gridArea[3]}`, */
            gridArea:`${gridArea[0]} / ${gridArea[1]} / ${gridArea[2]} / ${gridArea[3]}`,
            
            alignItems,
            justifyContent,
            display
        }}
    >
        {children}
    </div>
}

export { Col, Row, Container, Grid, ContainerGrid }