import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    
    const navigate = useNavigate()

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Your two password did not match.')
            return;
        }
        if (password.length <= 6) {
            setError('Password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='form-container w-2/5 mx-auto my-5 text-center border-2 rounded-md box-border'>
                <h2 className='form-title pt-5 text-3xl font-semibold '>Sign Up</h2>
                <form onSubmit={handleCreateUser} className='px-20'>
                    <div className="p-3 input-group grid text-left">
                        <label className='text-2xl pb-2' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='border-2 p-3 rounded' type="email" name="email" id="email" required />
                    </div>
                    <div className="p-3 input-group grid text-left">
                        <label className='text-2xl pb-2' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} className='border-2 p-3 rounded' type="password" name="password" id="password" required />
                    </div>
                    <div className="p-3 input-group grid text-left">
                        <label className='text-2xl pb-2' htmlFor="confirmPassword">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} className='border-2 p-3 rounded' type="password" name="confirmPassword" id="confirmPassword" required />
                    </div>
                    <p className='text-red-600'>{error}</p>
                    <div className="p-3 input-group grid text-left">
                        <input className='text-2xl bg-orange-500 cursor-pointer hover:bg-orange-400 duration-200 ease-linear p-3 rounded' type="submit" value='Sign Up' />
                    </div>
                    <div>
                        <p className='text-center'>Already have an Account? <Link className='text-orange-400' to='/login'>Login</Link></p>
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
        </div>
    );
};

export default SignUp;