import conversions from '../../conversions/index'
import styles from './InputText.module.scss'

const InputText = (
    { width,
        text,
        type }: {
            width: any,
            text: any,
            type: string
        }
) => {
    console.log(`${conversions.toRem(width)}rem`)
    return (
        <div className={styles.inputText}>
            <label>{text}</label>
            <input style={{
                width: `${conversions.toRem(width)}rem`,
            }} type={type} ></input>
        </div>
    )
}

export default InputText;