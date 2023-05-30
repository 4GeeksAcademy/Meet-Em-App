import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para verificar las credenciales del usuario
        // y redirigirlo a la página principal si el inicio de sesión es exitoso.
    };

    return (
        <div className='container' style={{ backgroundImage: `url(../../loginWallpaper.png)` }}>
            <div className='login-box'>
                <h2 className='my-3'>Iniciar sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className='form-group mb-3'>
                        <label htmlFor='username'>Usuario:</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder='Ingresa tu usuario'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='password'>Contraseña:</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Ingresa tu contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='mb-4'>
                        Iniciar sesión
                    </button>
                    <Link to={'login'} className='pt-4'>
                        ¿Olvidaste tu contraseña?
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
