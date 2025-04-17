import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='grid grid-cols-3'>
            <div></div>
            <div className='place-self-center space-x-3'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className='flex gap-2 items-center place-self-end'>
                <div>
                    <img src={userImg} alt="demo-user-image" />
                </div>
                <Link to="/login"><button className="btn btn-neutral px-11 py-4 rounded-none bg-[#403F3F] border-none">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;