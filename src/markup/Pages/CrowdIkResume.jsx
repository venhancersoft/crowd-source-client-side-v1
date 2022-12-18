import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {Link} from 'react-router-dom';



function CrowdIkResume() {
    return (
        <AuthLayout>
            <ul className="post-job-bx browse-job-grid post-resume row">
                    <li className="col-lg-6 col-md-6">
                        <div className="post-bx">
                            <div className="d-flex m-b20">
                                <div className="job-post-info">
                                    <h5 className="m-b0">
                                        <Link to={'/profil'}>Gencay Doyurucu</Link></h5>
                                    <p className="m-b5 font-13">
                                        <a className="text-primary">Backend Developer</a>
                                    </p>
                                </div>
                            </div>
                            <div className="job-time m-t15 m-b10">
                                <Link to={'#'} className="mr-1"><span>DOTNET</span></Link>
                                <Link to={'#'} className="mr-1"><span>MSSQL</span></Link>
                                <Link to={'#'} className="mr-1"><span>Postgres</span></Link>
                                <Link to={'#'} className="mr-1"><span>Redis</span></Link>
                            </div>
                        </div>
                    </li>
                <li className="col-lg-6 col-md-6">
                    <div className="post-bx">
                        <div className="d-flex m-b20">
                            <div className="job-post-info">
                                <h5 className="m-b0">
                                    <Link to={'/profil'}>Halil Ceyhan</Link></h5>
                                <p className="m-b5 font-13">
                                    <a className="text-primary">Frontend Developer</a>
                                </p>
                            </div>
                        </div>
                        <div className="job-time m-t15 m-b10">
                            <Link to={'#'} className="mr-1"><span>React</span></Link>
                            <Link to={'#'} className="mr-1"><span>Angular</span></Link>
                            <Link to={'#'} className="mr-1"><span>Vue</span></Link>
                            <Link to={'#'} className="mr-1"><span>Svelte</span></Link>
                        </div>
                    </div>
                </li>
            </ul>
        </AuthLayout>
    )
}

export default CrowdIkResume;