import React from 'react'
import CardEditForm from '../card_edit_form/card_edit_form'
import CardAddForm from '../card_add_form/card_add_form'
import styles from './editor.module.css'

export default function Editor({ cards , addCard }) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Preview</h1>
            {cards.map(card => <CardEditForm key={card.id} card={card}></CardEditForm>)}
            <CardAddForm onAdd={addCard}></CardAddForm>
        </section>
    )
}
