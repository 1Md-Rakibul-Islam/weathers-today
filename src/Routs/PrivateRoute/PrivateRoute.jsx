// import React from 'react';
// import { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
// import Loading from '../../Pages/Shared/Loading/Loading';

// const PrivateRoute = ({children}) => {
//     const {user, loading} = useContext(AuthContext);
//     const location = useLocation();

//     if(loading){
//         return <Loading></Loading>
//     }
//     if (user) {
//         return children;
//     }
//     return <Navigate to='/login' state={{from: location}} replace></Navigate>

// };

// export default PrivateRoute;

import { useRoutes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ path, element }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};


export default PrivateRoute;
