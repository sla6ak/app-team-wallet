import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
    const curentUser = useSelector(state => state.userName);
    return curentUser.length > 0 ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
