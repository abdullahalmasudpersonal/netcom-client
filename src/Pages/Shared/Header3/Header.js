import React from 'react';
import './Header.css';
import logo from '../../../Assets/logo/computer-accessories-warehouse-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faEllipsisVertical, faGear, faHome, faMessage, faQuestionCircle, faShop, faSignOut, faStopwatch, faUserAlt, faUserFriends, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import profile from '../../../Assets/logo/profile.png';
import { signOut } from 'firebase/auth';
import auth from '../../../firebae.init';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='sticky-top header-bg'>
            {/*       <nav class="navbar navbar-expand-lg navber-bg px-2"> */}
            <div class=" header">
                {/* <Link to='/'><a class="navbar-brand"> <img src={logo} height='40px' alt='' /></a></Link> */}
                {/*  <button class="navbar-toggler ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}

                <div className='header-dev1'>
                    <h5 className='m-0'>Netcom</h5>
                    <form class="form-inline my-2 my-lg-0">
                        <input style={{ borderRadius: '50px' }} class="form-control mr-sm-2" type="search" placeholder="Netcom Search" aria-label="Search" />
                        {/*   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                </div>

                <div className='header-dev2'>
                    <Link to='/'>
                        <FontAwesomeIcon className='header-dev2-font' icon={faHome} />
                    </Link>
                    <FontAwesomeIcon className='header-dev2-font' icon={faStopwatch} />
                    <FontAwesomeIcon className='header-dev2-font' icon={faUserFriends} />
                    <FontAwesomeIcon className='header-dev2-font' icon={faShop} />
                </div>

                <div className='header-dev3'>
                    <Link style={{ textDecoration: 'none' }} to='/profile'>
                        <div className='header-dev3-font-account' >
                            {
                                user ? <img style={{ width: '28px', borderRadius:'50px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} src={user?.photoURL} alt='' /> : <FontAwesomeIcon className='header-dev3-font-account-font' style={{ fontSize: '19px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} icon={faUserAlt} />
                            }
                            <p className='header-dev3-font-account-user-name' >{user?.displayName.split(' ')[0]}</p>
                        </div>
                    </Link>
                    <FontAwesomeIcon className='header-dev3-font-message' icon={faBars} />
                    <FontAwesomeIcon className='header-dev3-font-message' icon={faMessage} />
                    <FontAwesomeIcon className='header-dev3-font-notification' icon={faBell} />
                    {/* <FontAwesomeIcon className='header-dev3-font-ellipsis' icon={faEllipsisVertical} /> */}
                    {/*   </div>


                <div class="collapse navbar-collapse " id="navbarTogglerDemo02"> */}
                    {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul> */}

                    <div className='d-flex'>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                user ?
                                    <li class="dropdown nav-item">
                                        <FontAwesomeIcon className='header-dev3-font-ellipsis' icon={faEllipsisVertical} />
                                        <div className='dropdown-content py-2'>
                                            <div className='profile profile-img'>
                                                <img src={user?.photoURL} style={{ borderRadius: '50%', cursor: 'pointer' }} width='60px' className='pt-1 ' alt='' />
                                            </div>
                                            <div className='profile profile-displayname'>
                                                <h6 className='fw-bold pt-3'>{user.displayName}</h6>
                                            </div>
                                            <div className='profile profile-displayname'>
                                                <p className='mb-0 px-2'>{user.email}</p>
                                            </div>
                                            <div className='profile  pt-2 pb-2'>
                                                <Link className='dashboard-btn' to='/dashboard'>
                                                    <h6 className='fw-bold profile-view'>View Profile</h6>
                                                </Link>
                                            </div>
                                            <li className='dropdown2'>
                                                <Link to='/register'>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <a style={{ color: 'gray', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faGear} style={{ color: 'gray' }} className='' /> Settings & Privacy</a>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='dropdown2'>
                                                <Link to='/register'>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <a style={{ color: 'gray', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'gray' }} className='' /> Help & Supoort</a>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='dropdown2'>
                                                <Link to='/register'>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <a style={{ color: 'gray', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faMessage} style={{ color: 'gray' }} className='' /> Feedback</a>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='dropdown2'>
                                                <Link to='/register'>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <a style={{ color: 'gray', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faUserPlus} style={{ color: 'gray' }} className='' /> Register</a>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li class="dropdown2">
                                                <Link to='/'>
                                                    <a onClick={handleSignOut} class="nav-link active fw-bold " aria-current="page" href="#"> <FontAwesomeIcon icon={faSignOut} style={{ color: 'gray', fontWeight: 'bold' }} className='pl-1' /> <span className='pl-1' style={{ color: 'gray', fontWeight: 'bold' }}>Logout</span></a>
                                                </Link>
                                            </li>
                                        </div>
                                    </li>
                                    :
                                    <li class="nav-item">
                                        <Link to='/login' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">
                                            <FontAwesomeIcon className='header-dev3-font-ellipsis' icon={faEllipsisVertical} />
                                        </a></Link>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* </nav> */}
        </div>
    );
};

export default Header;