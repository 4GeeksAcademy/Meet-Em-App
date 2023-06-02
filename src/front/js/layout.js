import React, { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { BackendURL } from './component/backendURL';
import { PrivateRoutes } from './component/privateRoutes';
import { PublicRoutes } from './component/publicRoutes';
import Aboutus from './pages/aboutus';
import Chat from './pages/chat';
import CreateEvents from './pages/createEvents';
import EditProfile from './pages/editProfile';
import Events from './pages/events';
import { Landing } from './pages/landing';
import Login from './pages/login';
import MyEvents from './pages/myEvents';
import Profile from './pages/profile';
import Search from './pages/search';
import { SignUp } from './pages/signUp';
import injectContext from './store/appContext';

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
                        <Route path='/' element={<Landing />} />
                        <Route path='public' element={<PublicRoutes user={user} />}>
                            <Route path='public/login' element={<Login />} />
                            <Route path='public/signup' element={<SignUp />} />
                            <Route path='public/about-us' element={<Aboutus />} />
                            <Route path='*' element={<Navigate to='/' />} />
                        </Route>
                        <Route path='private' element={<PrivateRoutes user={user} />}>
                            <Route path='private/chat' element={<Chat />} />
                            <Route path='private/edit-profile' element={<EditProfile />} />
                            <Route path='private/profile' element={<Profile />} />
                            <Route path='private/my-events' element={<MyEvents />} />
                            <Route path='private/search' element={<Search />} />
                            <Route path='private/create-events' element={<CreateEvents />} />
                            <Route path='private//' element={<Events />} />
                            <Route path='*' element={<Navigate to='home' />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default injectContext(Layout);
