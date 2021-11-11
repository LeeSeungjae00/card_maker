import React from 'react'
import CardEditForm from '../card_edit_form/card_edit_form'
import CardAddForm from '../card_add_form/card_add_form'
import styles from './editor.module.css'

export default function Editor({ cards , addCard , updateCard, deleteCard}) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Preview</h1>
            {Object.keys(cards).map(key => 
                <CardEditForm key={key} card={cards[key]} updateCard = {updateCard} deleteCard = {deleteCard}></CardEditForm>)
            }
            <CardAddForm onAdd={addCard}></CardAddForm>
        </section>
    )
}
