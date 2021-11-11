import React, { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './maker.module.css'

export default function Maker({ authService }) {
    const naviagate = useNavigate();
    const [cards, setCards] = useState([
        {
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
        {
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
        {
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
    ]);
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
    return (
        <section className = {styles.maker}>
            <Header></Header>
            <button onClick={onLogout}></button>
            <div className={styles.container}>
                <Editor cards= {cards}></Editor>
                <Preview cards = {cards}></Preview>
            </div>
            <Footer></Footer>
        </section>
    )
}
