import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import coverphoto from '../../../Assets/logo/coverphoto.jpeg';
import auth from '../../../firebae.init';
import './Profiles.css';

const Profiles = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='profile-bg'>
            <div className='container profile-dev'>
                <img width='100%' height='400px' style={{ borderRadius: '0 0 5px 5px' }} src={coverphoto} alt='' />
                <div className='d-flex'>
                    <div className=''>
                        <img className='profile-my-img' src={user?.photoURL}  alt='' />
                    </div>
                    <div>
                        <h2 className='profile-user-name'> {user?.displayName} </h2>
                    </div>
                </div>
                <hr className='profile-hrs' />
                <nav class="navbar-expand-lg">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to='/profile'>
                                    <a class="nav-link" >Posts <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/profile/about'>
                                    <a class="nav-link" >About <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Friends <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Photo <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Video <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#"></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Outlet />
        </div>


    );
};

export default Profiles;

{/* <div className='container-lg py-5'>
            <div className='dashboard'>
                <div className='pr-2'>
                    <div className='dashboard-dev2'>
                        <div className='dashboard-pro-img'>
                            <img width='60px' alt='' />
                        </div>
                        <h6 className='text-center fw-bold'></h6>
                        <ul className='pt-3 px-4'>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Profile</li>
                            </Link>
                            <Link to='/dashboard/address' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Address
                                </li>
                            </Link>
                            {<Link to='/dashboard/add-review' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Add Review</li>
                            </Link>}
                            <Link to='/dashboard/my-order' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            {<Link to='/dashboard/add-product' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Add Product
                                </li>
                            </Link>}
                            {<Link to='/dashboard/manage-product' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Manage Product
                                </li>
                            </Link>}
                            {<Link to='/dashboard/manage-all-orders' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Manage All Orders
                                </li>
                            </Link>}
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Payment History
                                </li>
                            </Link>
                            {<Link to='/dashboard/users' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Make Admin
                                </li>
                            </Link>}
                        </ul>
                    </div>
                </div>
                <Outlet />
            </div>
        </div> */}