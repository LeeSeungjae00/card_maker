import React, { useRef } from 'react'
import styles from './image_file_input.module.css'

export default function ImageFileInput({imageUploader , name , onFileChange}) {
    const inputRef = useRef();
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    }

    const onChange = async (event) => {
        const uploaded = await imageUploader.upload(event.target.files[0]);
        console.log(uploaded)
        onFileChange({
            name : uploaded.original_filename,
            url : uploaded.url
        })
        
    }
    return (
        <div className = {styles.container}>
            <input ref = {inputRef} className = {styles.input} onChange = {onChange} type="file" accept="image/*" name = "file"/>
            <button className = {styles.button} onClick = {onButtonClick}>{name || 'No file'}</button>
        </div>
    )
}
