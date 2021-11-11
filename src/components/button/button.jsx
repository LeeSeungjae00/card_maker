import React from 'react'
import styles from './button.module.css'

export default function Button({name, onClick}) {
    return (
        <button className = {styles.button} onClick = {onClick}>
            {name}
        </button>
    )
}
