import React, {useState} from 'react';
import './App.css';
import {
    Switch,
    Route
} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Blogpost from "./Pages/Blogpost/Blogpost";
import BlogOverview from "./Pages/Blog-overview/Blog-overview";
import Topmenu from "./Components/Topmenu/Topmenu";
import PrivateRoute from "./Components/PrivateRout/PrivateRoute";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false );

    return (
        <>
            <Topmenu
                auth={isAuthenticated}
                toggleAuth={toggleIsAuthenticated}
            />

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/login">
                    <Login
                        auth={isAuthenticated}
                        toggleAuth={toggleIsAuthenticated}
                    />
                </Route>

                <PrivateRoute
                    exact path="/blogposts"
                    auth={isAuthenticated}
                >
                    <BlogOverview/>
                </PrivateRoute>

                <PrivateRoute
                    path="/blogposts/:id"
                    auth={isAuthenticated}
                >
                    <Blogpost/>
                </PrivateRoute>
            </Switch>
        </>
    );
}

export default App;
