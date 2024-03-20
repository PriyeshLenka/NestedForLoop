import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { BASE_URI, PATH_CONSTANTS } from './Contants';
import LoginPage from '../Containers/AuthenticationModal/AuthenticationModal';
import LandingPage from '../Containers/LandingPage/LandingPagev1';
import ErrorPage from '../Components/Error/Error';
import UserDashboard from '../Containers/Dashboard/UserDashboard';
import Feeds from '../Containers/Feeds';
import JobDashboard from '../Containers/JobDashboard/JobDashboard'
export const router = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `/`,
        element: <Feeds />,
        errorElement: <ErrorPage />
      },
      {
        path: `/${BASE_URI}/${PATH_CONSTANTS.DASHBOARD}/${PATH_CONSTANTS.USER}`,
        element: <UserDashboard />,
        errorElement: <ErrorPage />
      },
      {
        path: `/${BASE_URI}/auth/jobs`, 
        element: <JobDashboard />,
        errorElement: <ErrorPage />
      },
    ]
  },
  {
    path: `/${BASE_URI}/auth/user/authentication`,
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },  
]);
