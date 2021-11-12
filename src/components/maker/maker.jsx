import React, { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './maker.module.css'

export default function Maker({ FileInput ,authService }) {
    const naviagate = useNavigate();
    const [cards, setCards] = useState({
        '1' : {
            id : '1',
            name : 'SJ',
            company : 'none',
            theme : 'dark',
            title : 'web foront end Engineer',
            email : 'seungjae2668@naver.com',
            message : 'go for it',
            fileName : 'none,',
            fileURL : null
        },
        '2' : {
            id : '2',
            name : 'SJ2',
            company : 'none',
            theme : 'light',
            title : 'web foront end Engineer',
            email : 'seungjae2668@naver.com',
            message : 'go for it',
            fileName : 'none,',
            fileURL : null
        },
        '3' : {
            id : '3',
            name : 'SJ3',
            company : 'none',
            theme : 'colorful',
            title : 'web foront end Engineer',
            email : 'seungjae2668@naver.com',
            message : 'go for it',
            fileName : 'none,',
            fileURL : null
        },
    });
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                naviagate('/');
            }
        })
    })

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    }
    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }
    return (
        <section className = {styles.maker}>
            <Header></Header>
            <button onClick={onLogout}></button>
            <div className={styles.container}>
                <Editor FileInput = {FileInput} cards= {cards} addCard = {createOrUpdateCard} updateCard = {createOrUpdateCard} deleteCard = {deleteCard}></Editor>
                <Preview cards = {cards}></Preview>
            </div>
            <Footer></Footer>
        </section>
    )
}
