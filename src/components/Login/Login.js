import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigage = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigage('/shop')
    }

    return (
        <div className='form-container w-2/5 mx-auto my-5 text-center border-2 rounded-md box-border'>
            <h2 className='form-title pt-5 text-3xl font-semibold '>Login</h2>
            <form onSubmit={handleUserSignIn} className='px-20'>
                <div className="p-3 input-group grid text-left">
                    <label className='text-2xl pb-1' htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} className='border-2 p-3 rounded' type="email" name="email" id="email" required />
                </div>
                <div className="p-3 input-group grid text-left">
                    <label className='text-2xl pb-2' htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} className='border-2 p-3 rounded' type="password" name="password" id="password" required />
                </div>

                <p className='text-red-600'>{error?.message}</p>
                {
                    loading && <p className='text-red-600'>Loading ....</p>
                }

                <div className="p-3 input-group grid text-left">
                    <input className='text-2xl bg-orange-500 cursor-pointer hover:bg-orange-400 duration-200 ease-linear p-3 rounded' type="submit" value='Login' />
                </div>
                <div>
                    <p className='text-center'>New to Ema-John? <Link className='text-orange-400' to='/signup'>Create New Account</Link></p>
                </div>
                <div>
                    <p className='text-center py-3'>Or</p>
                </div>
                <div className='p-3 input-group grid text-left cursor-pointer border-2  duration-200 ease-linear mb-5 rounded'>
                    <div className='flex items-center justify-around'>
                        <img className='w-16 h-12' src="https://e7.pngegg.com/pngimages/140/496/png-clipart-google-logo-google-search-google-s-g-suite-google-text-trademark.png" alt="" />
                        <input className='text-2xl cursor-pointer bg-white ' type="submit" value='Continue with Google' />
                    </div>
                </div>

            </form>


        </div>
    );
};

export default Login;
