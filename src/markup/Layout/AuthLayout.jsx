import React, {useLayoutEffect} from 'react';
import Header2 from '@/markup/Layout/Header';
import Profilesidebar from '@/markup/Element/Profilesidebar';
import Footer from '@/markup/Layout/Footer';
import ProfileIKSidebar from '@/markup/Element/ProfileIKSidebar';
import {useStore} from '@/store/store';

// eslint-disable-next-line react/prop-types
const AuthLayout = ({children}) => {
    const auth = useStore(state => state.auth);
    useLayoutEffect(() => {
        if(!auth){
            location.href = '/login'
        }
    },[auth])
    return <>
        <Header2/>
        <div className="page-content bg-white" style={{minHeight:'calc(100vh - 80px)'}}>
            <div className="content-block">
                <div className="section-full bg-white browse-job p-t50 p-b20">
                    <div className="container">
                        <div className="row">
                            {auth?.type === 1 ? <Profilesidebar/> : <ProfileIKSidebar />}
                            <div className="col-xl-9 col-lg-8 m-b30">
                                <div className="job-bx job-profile">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}

export default AuthLayout;

