import React, { useState } from 'react';

const LOGIN_PATH = 'https://rstyle-server.herokuapp.com/login';

async function sendCredentials(credentials) {
    return fetch(LOGIN_PATH, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }).then(data => data.json())
}

const Login = ({ setToken }) => {
    const [userName, setUserName] = useState("reader");
    const [userPassword, setUserPassword] = useState("admin");
    const [wrongCredentials, setWrongCredentials] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        const token = await sendCredentials({
            userName,
            userPassword
        });

        if (token.allowed) {
            setToken(token.responseToken);
            setWrongCredentials(false);
        } else
            setWrongCredentials(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Логин</label>
                    <input
                        type="text" className="form-control"
                        id="userName"
                        placeholder="Введите логин"
                        onChange={event => setUserName(event.target.value)}
                        defaultValue={userName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userPassword">Пароль</label>
                    <input
                        type="password"
                        className="form-control"
                        id="userPassword"
                        placeholder="Введите пароль"
                        onChange={event => setUserPassword(event.target.value)}
                        defaultValue={userPassword}
                    />
                </div>
                {wrongCredentials ?
                    <div className="alert alert-danger p-1 mb-2" role="alert">
                        Неправильно указаны имя пользователя и/или пароль
                    </div>
                    : null
                }
                <button type="submit" className="btn btn-primary mb-3">Войти</button>
            </form>
        </div>
    );
};

export default Login;