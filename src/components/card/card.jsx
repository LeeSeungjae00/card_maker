import React from 'react'
import stlyes from './card.module.css'

const DEFAULT_IMAGE = '/images/default_logo.png'
export default function Card({ card }) {
    const { name, company, title, email, message, theme, fileURL } = card;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${stlyes.card} ${getStyles(theme)}`}>
            <img className={stlyes.avatar} src={url} alt="profile"></img>
            <div className={stlyes.info}>
                <h1 className={stlyes.name}>{name}</h1>
                <p className={stlyes.company}>{company}</p>
                <p className={stlyes.title}>{title}</p>
                <p className={stlyes.email}>{email}</p>
                <p className={stlyes.message}>{message}</p>
            </div>
        </li>
    )
}


const getStyles = (theme) => {
    switch(theme){
        case 'dark' : 
            return stlyes.dark;
        case 'light' :
            return stlyes.light;
        case 'colorful' :
            return stlyes.colorful;
        default : 
            throw new Error(`unkown theme : ${theme}`)
    }
}