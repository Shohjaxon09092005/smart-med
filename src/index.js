import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import SplashScreen from './pages/SplashScreen';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const appRouter = createBrowserRouter([{
  element: <App />,
  path: "/",
  errorElement: <ErrorPage />,
  children: [{

    path: "/",
    element: <SplashScreen />

  },
  {
    path:"/signUp",
    element:<SignUp/>
  },
  {
    path:"/signIn",
    element:<SignIn/>
  },
  ],

},

]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

