import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
    const token = localStorage.getItem('userToken');
    const userRole = localStorage.getItem('userRole');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (role && userRole !== role) {
        // Role mismatch → redirect to home
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
