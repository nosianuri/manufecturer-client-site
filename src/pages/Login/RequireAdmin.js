import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../hooks/UseAdmin';
import Loading from '../Shared/Loading';

const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(user);
    const location = useLocation();

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    if(loading || adminLoading){
        return <Loading></Loading>
    }
    return children;
};

export default RequireAdmin;