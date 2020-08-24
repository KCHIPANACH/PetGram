import React, {useState} from 'react'
import { toast,ToastContainer} from 'react-toastify';

import {useInputValue} from '../../hooks/useInputValue'

import {Img, Input, Form, Title, Contenedor, Cambio,TitleButton} from './style'
import {SubmitButton} from '../../components/SubmitButton'

import iconLogo from '../../assets/pets.png'

export const UserForm = ({onSubmit, title, btnSubmit, titleButtonF, cambioTitle, onClick, error, disabled}) =>{
    const email= useInputValue('')
    const password= useInputValue('') 

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit({email: email.value,password: password.value})
    }

    const notify = (error) => {
        toast.error(`${error}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true, 
            progress: undefined,
          })
    }
    
    return (
        <>
        <Img src={iconLogo} loading="lazy" />
                <Title>{title}</Title>  
                <Form disabled={disabled} onSubmit={handleSubmit}>
                    <Input disabled={disabled} placeholder="Email" type="email" {...email} /> 
                    <Input disabled={disabled} placeholder="Password" type="password" {...password} />
                    <SubmitButton disabled={disabled}> {btnSubmit} </SubmitButton>
                </Form>
                { error &&  notify(error)}
                <ToastContainer />
                <Contenedor>
                    <TitleButton>{titleButtonF}</TitleButton>
                    <Cambio onClick={onClick}>{cambioTitle}</Cambio>
                </Contenedor>            
        </>
    )
} 