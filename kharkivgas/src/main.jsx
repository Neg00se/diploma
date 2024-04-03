import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Mainreg from './registrationpage/Mainreg'
import Mainlogin from './loginPage/Mainlogin'
import UserMainPage from './userInterface/UserMainPage';
import Error from './errorpage/Error';
import WelcomePage from './welcomePage/WelcomePage';
const router=  createBrowserRouter([{
	path: '/',
	element: <WelcomePage/>,
	errorElement: <Error/>
},
{
	path: '/login',
	element: <Mainlogin/>,
	
},
{
	path: '/userprofile',
	element: <UserMainPage/>,
	
},
{
	path: '/registration',
	element: <Mainreg/>,
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Mainlogin/> */}
<RouterProvider router={router} />
  </React.StrictMode>,
)
