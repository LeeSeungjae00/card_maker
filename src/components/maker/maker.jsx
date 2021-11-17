import React, { useEffect , useState } from 'react'
import { useNavigate , useLocation } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './maker.module.css'

export default function Maker({ FileInput ,authService , cardRepository }) {
    const historyState = useLocation().state;
    const naviagate = useNavigate();
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id)
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        if (!userId) {
            return;
        }
        
        cardRepository.syncCard(userId, data => { console.log(data); setCards(data)})
    },[userId,cardRepository])

    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid)
            }else{
                naviagate('/');
            }
        })
    },[authService,naviagate])

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    }
    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    }
    return (
        <section className = {styles.maker}>
            <Header></Header>
            <button className = {styles.logout} onClick={onLogout}></button>
            <div className={styles.container}>
                <Editor FileInput = {FileInput} cards= {cards} addCard = {createOrUpdateCard} updateCard = {createOrUpdateCard} deleteCard = {deleteCard}></Editor>
                <Preview cards = {cards}></Preview>
            </div>
            <Footer></Footer>
        </section>
    )
}
