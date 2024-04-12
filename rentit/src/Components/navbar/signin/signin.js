import  React from 'react'
import './signin.css';

export default function Signin(){
    return(
        <>
        <FormData >
        <input placeholder='username'/>
        <input placeholder='E-mail'/>
        <input placeholder='password'/>
        <button> Submit</button>
        </FormData>
        </>
    )
}