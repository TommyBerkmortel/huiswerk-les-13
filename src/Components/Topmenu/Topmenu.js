import React from 'react';
import './Topmenu.css'
import {NavLink, useHistory} from "react-router-dom";

function Topmenu({auth, toggleAuth}) {
    const history = useHistory();

    function logoutActions() {
        toggleAuth(!auth)
        history.push('/');
    }

    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    {auth === true && <li>
                        <NavLink to="/blogposts" exact activeClassName="active-link">Blogposts</NavLink>
                    </li>}

                    {auth === false && <li>
                        <NavLink to="/login" activeClassName="active-link">Inloggen</NavLink>
                    </li>}

                    {auth === true && <li>
                        <button
                            type="button"
                            onClick={logoutActions}
                        >
                            Uitloggen
                        </button>
                    </li>}
                </ul>
            </div>
        </nav>
    );
}

export default Topmenu;