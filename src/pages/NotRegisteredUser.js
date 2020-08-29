import React, {useState, useContext} from 'react';
import {Context} from '../Context'
import {UserForm} from '../components/UserForm'
import {RegisterMutation} from '../container/RegisterMutation'
import {LoginMutation} from '../container/LoginMutation'

export default ()=>{

    const {activeAutth,isRegister, activeRegister, disableRegister} = useContext(Context)

                return(
                    <>
                    {
                        (isRegister) ?
                        <RegisterMutation>
                            {
                                (register, {data, loading, error})=>{
                                    const onSubmit= ({email, password})=>{
                                        const input = {email, password}
                                        const variables = {input}
                                        register({variables}).then(({data}) =>{
                                            const {signup} = data
                                            activeAutth(signup)
                                        })
                                    }
                                    const errorMsg = error && error 
                                    return <UserForm  disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Registrate en petgram y se parte de este mundo" btnSubmit="Registrate" titleButtonF="¿Ya tienes una cuenta?" cambioTitle="Inicia sesión" onClick={disableRegister} />
                                }
                            }
                        </RegisterMutation>
                        :
                        <LoginMutation>
                            {
                                (login, {data, loading, error})=>{
                                    const onSubmit= ({email, password})=>{
                                        const input = {email, password}
                                        const variables = {input}
                                        login({variables}).then(({data}) =>{
                                            const {login} = data
                                            activeAutth(login)
                                        })
                                    }
                                    const errorMsg = error && error 
                                    return <UserForm  disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Inicia sesión en petgram y se parte de este mundo" btnSubmit="Inicia Sesión" titleButtonF="¿No tienes una cuenta?" cambioTitle="Registrate" onClick={activeRegister} />
                                }
                            }
                        </LoginMutation>                        
                    }
                    </>
                )
}