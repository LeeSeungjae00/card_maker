import React from 'react'
import Card from '../card/card'
import styles from './preview.module.css'

export default function Preview({cards}) {
    return (
        <section className = {styles.preview}>
            <h1 className = {styles.title}>Card Maker</h1>
            <ul className = {styles.cards}>
                {cards.map(card => <Card card = {card}></Card>)}
            </ul>
        </section>
    )
}
