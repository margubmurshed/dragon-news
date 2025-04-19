import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userImg from '../assets/user.png'
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='grid grid-cols-3 font-poppins'>
            <div className='place-self-center justify-self-start font-bold text-xl'>{user && user.displayName}</div>
            <div className='place-self-center space-x-3'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className='flex gap-2 items-center place-self-end'>
                <div>
                    <img src={user ? user.photoURL : userImg} alt="user-image" className='w-10 h-10 rounded-full object-cover'/>
                </div>
                {(user) ? (
                    <button className="btn btn-neutral px-11 py-4 rounded-none bg-[#403F3F] border-none" onClick={logOut}>Sign Out</button>
                ): (
                    <Link to="/auth/login"><button className="btn btn-neutral px-11 py-4 rounded-none bg-[#403F3F] border-none">Login</button></Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;