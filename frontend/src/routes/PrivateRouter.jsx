import { Route, Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token') ? true : false;
    
    return isAuthenticated ? children : <Navigate to="/login" />;
    }
export default PrivateRouter;