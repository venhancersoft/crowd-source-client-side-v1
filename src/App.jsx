import React, {Suspense} from 'react';
import Index from '@/markup/Markup';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';
import './css/new-template.css';

import CrowdRegister from '@/markup/Pages/CrowdRegister';
import {useStore} from '@/store/store';
import CrowdLogin from '@/markup/Pages/CrowdLogin';
import CrowdHomePage from '@/markup/Pages/CrowdHomePage';
import CrowdLandingPage from '@/markup/Pages/CrowdLandingPage';


function App() {
    const auth = useStore(state => state.auth);
    if (auth) {
        return (
            <>
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"/>
                            <div className="sk-child sk-bounce2"/>
                            <div className="sk-child sk-bounce3"/>
                        </div>
                    </div>
                }
                >
                    <Index/>
                </Suspense>
            </>
        );

    } else {
        return (
            <div className="vh-100">
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"/>
                            <div className="sk-child sk-bounce2"/>
                            <div className="sk-child sk-bounce3"/>
                        </div>
                    </div>
                }
                >
                    <Switch>
                        <Route path={import.meta.env.BASE_URL} exact component={CrowdLandingPage} />
                        <Route path={import.meta.env.BASE_URL + 'login'} exact component={CrowdLogin}/>
                        <Route path={import.meta.env.BASE_URL + 'register'} exact component={CrowdRegister}/>
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

export default App