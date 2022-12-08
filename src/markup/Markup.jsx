import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '@/markup/Pages/Homepage1';
import Homepage2 from '@/markup/Pages/Homepage2';

import CrowdProfil from '@/markup/Pages/CrowdProfil';
import Jobmyresume from '@/markup/Pages/Jobmyresume';
import Jobsappliedjob from '@/markup/Pages/Jobsappliedjob';
import Jobsalert from '@/markup/Pages/Jobsalert';
import Jobsavedjobs from '@/markup/Pages/Jobsavedjobs';
import Jobcvmanager from '@/markup/Pages/Jobcvmanager';
import Changepasswordpage from '@/markup/Pages/Changepasswordpage';

import Companyprofile from '@/markup/Pages/Companyprofile';
import Companyresume from '@/markup/Pages/Companyresume';
import Componypostjobs from '@/markup/Pages/Componypostjobs';
import Companymanage from '@/markup/Pages/Companymanage';
import Companytransactions from '@/markup/Pages/Companytransactions';
import Browsecandidates from '@/markup/Pages/Browsecandidates';


import Aboutus from '@/markup/Pages/Aboutus';
import Jobdetail from '@/markup/Pages/Jobdetail';
import Companies from '@/markup/Pages/Companies';
import Freejobalerts from '@/markup/Pages/Freejobalerts';
import Browsejoblist from '@/markup/Pages/Browsejoblist';
import Browsejobgrid from '@/markup/Pages/Browsejobgrid';
import Browsejobfilterlist from '@/markup/Pages/Browsejobfilterlist';
import Browsejobfiltergrid from '@/markup/Pages/Browsejobfiltergrid';

import Categoryalljob from '@/markup/Pages/Categoryalljob';
import Categorycompanyjob from '@/markup/Pages/Categorycompanyjob';
import Categorydesignationsjob from '@/markup/Pages/Categorydesignationsjob';
import Categoryjobs from '@/markup/Pages/Categoryjobs';
import Categorylocationjobs from '@/markup/Pages/Categorylocationjobs';
import Categoryskilljobs from '@/markup/Pages/Categoryskilljobs';

import Portfoliogrid2 from '@/markup/Pages/Portfoliogrid2';

import Loginpage1 from '@/markup/Pages/Loginpage1';

import Register1 from '@/markup/Pages/Register1';

import Error404 from '@/markup/Pages/Error404';

import Contact from '@/markup/Pages/Contact';


import Blogclassic from '@/markup/Pages/Blogclassic';
import Blogclassicsidebar from '@/markup/Pages/Blogclassicsidebar';
import Blogdetailgrid from '@/markup/Pages/Blogdetailgrid';
import Blogdetailgridsidebar from '@/markup/Pages/Blogdetailgridsidebar';
import Blogleftimg from '@/markup/Pages/Blogleftimg';
import Blogdetail from '@/markup/Pages/Blogdetail';
import ScrollToTop from '@/markup/Element/ScrollToTop';
import CrowdOzgecmisim from '@/markup/Pages/CrowdOzgecmisim';
import CrowdMulakat from '@/markup/Pages/CrowdMulakat';
import CrowdTeklifVerdiklerim from '@/markup/Pages/CrowdTeklifVerdiklerim';
import CrowdBankaBilgilerim from '@/markup/Pages/CrowdBankaBilgilerim';
import CrowdKaydettiImIsler from '@/markup/Pages/CrowdKaydettigimIsler';
import CrowdIsAlarmlar from '@/markup/Pages/CrowdIsAlarmlari';
import CrowdAyarlar from '@/markup/Pages/CrowdAyarlar';
import CrowdIkProfil from '@/markup/Pages/crowdIkProfil';
import CrowdIkResume from '@/markup/Pages/CrowdIkResume';
import CrowdIkIsYayinlama from '@/markup/Pages/CrowdIkIsYayinlama';
import CrowdIkIsTeklifteBulunanlar from '@/markup/Pages/CrowdIkIsTeklifteBulunanlar';
import CrowdIkAdayPuanlama from '@/markup/Pages/CrowdIkAdayPuanlama';
import CrowdIkIsAdayOnerme from '@/markup/Pages/CrowdIkIsAdayOnerme';
import Homepage3 from '@/markup/Pages/Homepage3';

const Markup = () => {
    return (
        <>
            <div className="page-wraper">
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/home2' exact component={Homepage2}/>
                    <Route path='/home3' exact component={Homepage3}/>

                    <Route path='/profil' exact component={CrowdProfil}/>
                    <Route path='/ozgecmis' exact component={CrowdOzgecmisim}/>
                    <Route path='/mulakat' exact component={CrowdMulakat}/>
                    <Route path='/teklif-verdiklerim' exact component={CrowdTeklifVerdiklerim}/>
                    <Route path='/banka-bilgilerim' exact component={CrowdBankaBilgilerim}/>
                    <Route path='/kaydettigim-isler' exact component={CrowdKaydettiImIsler}/>
                    <Route path='/is-alarmlari' exact component={CrowdIsAlarmlar}/>
                    <Route path='/ayarlar' exact component={CrowdAyarlar}/>


                    <Route path='/ik-profil' exact component={CrowdIkProfil}/>
                    <Route path='/ik-cv' exact component={CrowdIkResume}/>
                    <Route path='/ik-is-yayinlama' exact component={CrowdIkIsYayinlama}/>
                    <Route path='/ik-teklifte-bulunanlar' exact component={CrowdIkIsTeklifteBulunanlar}/>
                    <Route path='/ik-aday-puanlama' exact component={CrowdIkAdayPuanlama}/>
                    <Route path='/ik-aday-onerme' exact component={CrowdIkIsAdayOnerme}/>


                    <Route path='/jobs-my-resume' exact component={Jobmyresume}/>
                    <Route path='/jobs-applied-job' exact component={Jobsappliedjob}/>
                    <Route path='/jobs-alerts' exact component={Jobsalert}/>
                    <Route path='/jobs-saved-jobs' exact component={Jobsavedjobs}/>
                    <Route path='/jobs-cv-manager' exact component={Jobcvmanager}/>
                    <Route path='/jobs-change-password' exact component={Changepasswordpage}/>

                    <Route path='/company-profile' exact component={Companyprofile}/>
                    <Route path='/company-resume' exact component={Companyresume}/>
                    <Route path='/company-post-jobs' exact component={Componypostjobs}/>
                    <Route path='/company-manage-job' exact component={Companymanage}/>
                    <Route path='/company-transactions' exact component={Companytransactions}/>
                    <Route path='/browse-candidates' exact component={Browsecandidates}/>

                    <Route path='/about-us' exact component={Aboutus}/>
                    <Route path='/job-detail' exact component={Jobdetail}/>
                    <Route path='/companies' exact component={Companies}/>
                    <Route path='/free-job-alerts' exact component={Freejobalerts}/>
                    <Route path='/browse-job-list' exact component={Browsejoblist}/>
                    <Route path='/browse-job-grid' exact component={Browsejobgrid}/>
                    <Route path='/browse-job-filter-list' exact component={Browsejobfilterlist}/>
                    <Route path='/browse-job-filter-grid' exact component={Browsejobfiltergrid}/>

                    <Route path='/category-all-jobs' exact component={Categoryalljob}/>
                    <Route path='/category-company-jobs' exact component={Categorycompanyjob}/>
                    <Route path='/category-designations-jobs' exact component={Categorydesignationsjob}/>
                    <Route path='/category-jobs' exact component={Categoryjobs}/>
                    <Route path='/category-location-jobs' exact component={Categorylocationjobs}/>
                    <Route path='/category-skill-jobs' exact component={Categoryskilljobs}/>
                    <Route path='/portfolio-grid-2' exact component={Portfoliogrid2}/>

                    <Route path='/login' exact component={Loginpage1}/>
                    <Route path='/register' exact component={Register1}/>

                    <Route path='/contact' exact component={Contact}/>
                    <Route path='/blog-classic' exact component={Blogclassic}/>
                    <Route path='/blog-classic-sidebar' exact component={Blogclassicsidebar}/>
                    <Route path='/blog-detailed-grid' exact component={Blogdetailgrid}/>
                    <Route path='/blog-detailed-grid-sidebar' exact component={Blogdetailgridsidebar}/>
                    <Route path='/blog-left-img' exact component={Blogleftimg}/>
                    <Route path='/blog-details' exact component={Blogdetail}/>
                    <Route path='/*' exact component={Error404}/>
                </Switch>
            </div>
            <ScrollToTop/>
        </>
    )


}

export default Markup;