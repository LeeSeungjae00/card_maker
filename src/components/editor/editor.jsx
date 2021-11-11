import React from 'react'
import CardEditForm from '../card_edit_form/card_edit_form'
import styles from './editor.module.css'

export default function Editor({ cards }) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Preview</h1>
            {cards.map(card => <CardEditForm card={card}></CardEditForm>)}
        </section>
    )
}
