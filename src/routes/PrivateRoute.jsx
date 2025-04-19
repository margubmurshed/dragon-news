import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) return <div className='w-full min-h-screen h-full flex justify-center items-center'>
        <Loading />
    </div>
    if(user) return children; 
    return <Navigate to="/auth/login" state={location.pathname}/>;
};

export default PrivateRoute;