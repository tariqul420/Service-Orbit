import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Components/Common/LoadingSpinner';
import useAuth from '../Hook/useAuth';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-w-screen flex items-center justify-center my-12">
        {/* <ScaleLoader
                    height={60}
                    margin={2}
                    width={5}
                    color="#7C32F4"
                /> */}
        <LoadingSpinner />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return navigate('/login', { state: { from: location.pathname } });
};

PrivateRouter.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateRouter;
