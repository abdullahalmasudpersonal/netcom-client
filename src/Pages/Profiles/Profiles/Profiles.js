import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import coverphoto from '../../../Assets/logo/coverphoto.jpeg';
import auth from '../../../firebae.init';
import './Profiles.css';

const Profiles = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='profiles-bg'>
            <div className='container profiles-dev '>
                <img width='100%' height='400px' style={{ borderRadius: '0 0 5px 5px' }} src={coverphoto} alt='' />
                <div className='d-flex'>
                    <div className=''>
                        <img className='profiles-my-img' src={user?.photoURL} alt='' />
                    </div>
                    <div>
                        <h2 className='profiles-user-name'> {user?.displayName} </h2>
                    </div>
                </div>
                <hr className='profiles-hrs' />
                <nav class="navbar-expand-lg mb-2">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to='/profile' style={{ color: 'black' }}>
                                    <a class="nav-link" >Posts <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/profile/about' style={{ color: 'black' }}>
                                    <a class="nav-link" >About <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/profile/about' style={{ color: 'black' }}>
                                    <a class="nav-link" >Friends <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/profile/about' style={{ color: 'black' }}>
                                    <a class="nav-link" >Photos <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/profile/about' style={{ color: 'black' }}>
                                    <a class="nav-link" >Videos <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/profile/about' style={{ color: 'black' }}>
                                    <a class="nav-link" >Checke-ins <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item active dropdown">
                                <Link to='/profile/about'>
                                    <a  style={{ color: 'black' }} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        More
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </Link>
                            </li>

                           {/*  <li class="nav-item active dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
            <Outlet />
        </div>


    );
};

export default Profiles;