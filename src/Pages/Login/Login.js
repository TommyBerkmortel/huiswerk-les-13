import React from 'react';
import {
    useHistory
} from 'react-router-dom';

function Login({auth, toggleAuth}) {
    const history = useHistory();


    function loginActions() {
        toggleAuth(!auth);
        history.push('/blogposts');
    }

    return (
        <>
            <h1>Login pagina</h1>
            <p>Druk op de knop om in te loggen</p>
            <button
                type="button" onClick={loginActions}
            >
                Inloggen
            </button>
        </>
    );
}

export default Login;