// import React, { useState, useEffect } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import authService from '../appwrite/auth'; 

// const ProtectedRoute = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null); 

//   useEffect(() => {
//     const checkSession = async () => {
//       const user = await authService.getcurrentUser();
//       setIsAuthenticated(!!user);
//     };
//     checkSession();
//   }, []);

//   if (isAuthenticated === null) {
//     return <div>Loading...</div>; 
//   }
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;