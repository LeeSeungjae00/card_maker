import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './maker.module.css'

export default function Maker({ authService }) {
    const naviagate = useNavigate();
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
                <Editor></Editor>
                <Preview></Preview>
            </div>
            <Footer></Footer>
        </section>
    )
}
