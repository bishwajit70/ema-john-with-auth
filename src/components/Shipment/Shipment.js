import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    const handleShippingInfo = event => {
        event.preventDefault()

        const shipping = { name, address, phone, email }
        console.log(shipping)

    }




    return (

        <div className='form-container w-2/5 mx-auto my-5 text-center border-2 rounded-md box-border'>
            <h2 className='form-title pt-5 text-3xl font-semibold '>Shipping Information</h2>
            <form onSubmit={handleShippingInfo} className='px-20'>
                <div className="p-3 input-group grid text-left">
                    <label className='text-2xl pb-2' htmlFor="name">Your Name</label>
                    <input onBlur={handleNameBlur} className='border-2 p-3 rounded' type="text" name="name" id="name" required />
                </div>

                <div className="p-3 input-group grid text-left">
                    <label className='text-2xl pb-2' htmlFor="email">Your Email</label>
                    <input value={user?.email} readOnly className='border-2 p-3 rounded' type="email" name="email" id="email" required />
                </div>


                <div className="p-3 input-group grid text-left">
                    <label className='text-2xl pb-2' htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlur} className='border-2 p-3 rounded' type="text" name="address" id="address" required />
                </div>
                <div className="p-3 input-group grid text-left">
                    <label className='text-2xl pb-2' htmlFor="phone">Phone Number</label>
                    <input onBlur={handlePhoneBlur} className='border-2 p-3 rounded' type="tel" name="phone" id="phone" required />
                </div>
                <p className='text-red-600'>{error}</p>
                <div className="p-3 input-group grid text-left">
                    <input className='text-2xl bg-orange-500 cursor-pointer hover:bg-orange-400 duration-200 ease-linear p-3 rounded' type="submit" value='Add Shipping' />
                </div>




            </form>
        </div>
    );
};

export default Shipment;