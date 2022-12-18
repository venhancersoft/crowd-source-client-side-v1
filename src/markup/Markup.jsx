import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import CrowdHomePage from '@/markup/Pages/CrowdHomePage';
import CrowdError404 from '@/markup/Pages/CrowdError404';
import ScrollToTop from '@/markup/Element/ScrollToTop';
import CrowdOzgecmisim from '@/markup/Pages/CrowdOzgecmisim';
import CrowdTeklifVerdiklerim from '@/markup/Pages/CrowdTeklifVerdiklerim';
import CrowdAyarlar from '@/markup/Pages/CrowdAyarlar';
import CrowdIkProfil from '@/markup/Pages/crowdIkProfil';
import CrowdIkResume from '@/markup/Pages/CrowdIkResume';
import CrowdIkIsYayinlama from '@/markup/Pages/CrowdIkIsYayinlama';
import CrowdIkIsTeklifteBulunanlar from '@/markup/Pages/CrowdIkIsTeklifteBulunanlar';
import CrowdIkAdayPuanlama from '@/markup/Pages/CrowdIkAdayPuanlama';
import CrowdFreelancerOl from '@/markup/Pages/CrowdFreelancerOl';
import CrowdIsAra from '@/markup/Pages/CrowdIsAra';
import CrowdIsDetay from '@/markup/Pages/CrowdIsDetay';
import CrowdIsSurec from '@/markup/Pages/CrowdIsSurec';
import CrowdIkTumIlanlarim from '@/markup/Pages/CrowdIkTumIlanlarim';
import CrowdIkIsSurec from '@/markup/Pages/CrowdIkIsSurec';
import CrowdIkIsDuzenleme from '@/markup/Pages/CrowdIkIsDüzenleme';
import CrowdLandingPage from '@/markup/Pages/CrowdLandingPage';

const Markup = () => {
    return (
        <>
            <div className="page-wraper">
                <Switch>
                    {/*<Route path={import.meta.env.BASE_URL} exact component={CrowdHomePage}/>*/}
                    <Route path={import.meta.env.BASE_URL} exact component={CrowdLandingPage}/>
                    <Route path={import.meta.env.BASE_URL + 'profil'} exact component={CrowdOzgecmisim}/>
                    <Route path={import.meta.env.BASE_URL + 'ozgecmis'} exact component={CrowdOzgecmisim}/>
                    <Route path={import.meta.env.BASE_URL + 'freelancer-ol'} exact component={CrowdFreelancerOl}/>
                    <Route path={import.meta.env.BASE_URL + 'is-ara'} exact component={CrowdIsAra}/>
                    <Route path={import.meta.env.BASE_URL + 'is-detay'} exact component={CrowdIsDetay}/>
                    <Route path={import.meta.env.BASE_URL + 'is-sureci'} exact component={CrowdIsSurec}/>
                    <Route path={import.meta.env.BASE_URL + 'teklif-verdiklerim'} exact component={CrowdTeklifVerdiklerim}/>
                    <Route path={import.meta.env.BASE_URL + 'ayarlar'} exact component={CrowdAyarlar}/>

                    <Route path={import.meta.env.BASE_URL + 'ik-profil'} exact component={CrowdIkProfil}/>
                    <Route path={import.meta.env.BASE_URL + 'ik-cv'} exact component={CrowdIkResume}/>
                    <Route path={import.meta.env.BASE_URL + 'ik-is-yayinlama'} exact component={CrowdIkIsYayinlama}/>
                    <Route path={import.meta.env.BASE_URL + 'ik-ilan-duzenleme'} exact component={CrowdIkIsDuzenleme}/>
                    <Route path={import.meta.env.BASE_URL + 'ik-tum-ilanlarim'} exact component={CrowdIkTumIlanlarim}/>
                    <Route path={import.meta.env.BASE_URL + 'ik-teklifte-bulunanlar'} exact component={CrowdIkIsTeklifteBulunanlar}/>
                    <Route path={import.meta.env.BASE_URL + 'ik-is-sureci'} exact component={CrowdIkIsSurec}/>
                    <Route path={import.meta.env.BASE_URL + 'ik-aday-puanlama'} exact component={CrowdIkAdayPuanlama}/>

                    <Redirect from={'/login'} to={'/'} />
                    {/*<Route path={import.meta.env.BASE_URL + 'register'} exact component={CrowdRegister}/>*/}
                    <Route path={import.meta.env.BASE_URL + '*'} exact component={CrowdError404}/>
                </Switch>
            </div>
            <ScrollToTop/>
        </>
    )


}

export default Markup;