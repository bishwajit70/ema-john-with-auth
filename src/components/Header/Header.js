import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut=()=>{
        signOut(auth)
    }

    return (
        <div className='header-area'>
            <div className='header-nav'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    
                    {user ? 
                    <button onClick={handleSignOut} className='bg-indigo-400 ml-5 p-2 '>Sign Out</button> 
                    : <Link to="/login">Login</Link> }
                </div>
            </div>
        </div>

    );
};

export default Header;