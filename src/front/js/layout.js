import React, { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { BackendURL } from './component/backendURL';
import { PrivateRoutes } from './component/privateRoutes';
import { PublicRoutes } from './component/publicRoutes';
import Home from './pages/home';
import injectContext from './store/appContext';
import Login from './pages/login';

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || '';
    const [user, setUser] = useState({ logged: false });

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == '') return <BackendURL />;

    return (
        <div>
            <Router basename={basename}>
                <div className='main'>
                    <Routes>
                        <Route path='login' element={<PublicRoutes user={user} />}>
                            <Route path='' element={<Login />} />
                        </Route>
                        <Route path='/' element={<PrivateRoutes user={user} />}>
                            <Route path='home' element={<Home />}>
                                {/* Default */}
                            </Route>
                            <Route path='*' element={<Navigate to='home' />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default injectContext(Layout);
