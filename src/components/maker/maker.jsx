import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
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
        <section>
            <Header></Header>
            <button onClick={onLogout}></button>
            <Footer></Footer>
        </section>
    )
}
