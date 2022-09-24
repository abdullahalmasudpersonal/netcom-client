import { faCamera, faFlag, faPhotoFilm, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebae.init';
import './Profile.css';

const Profile = () => {
    const [user] = useAuthState(auth);

    return (
        <div className=' profile-bg'>
            <div className='container profile-dev'>
                <img className='profile-my-coverphote' style={{ borderRadius: '0 0 5px 5px' }} width='100%' height='400px' src='https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/281785038_1398485670631787_716119689788446990_n.jpg?stp=dst-jpg_p640x640&_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Cvt5bqBp3q0AX-al74s&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT_Y_mmtoZpeKuNlolD0d-OjfEJxsDNd8Gpf-UbJoUEa3w&oe=632FED5C' alt='' />
                <div className='d-flex'>
                    <div className=''>
                        <img className='profile-my-img' src={user?.photoURL} alt='' />
                    </div>
                    <div>
                        <h2 className='profile-user-name'>{user?.displayName}</h2>
                    </div>
                </div>
                <hr className='profile-hr' />
                <nav class="navbar-expand-lg">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to='/post'>
                                    <a class="nav-link" >Posts <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
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

            {/* <div className='profile-details'>
                <div className='container'>
                    <div class="row pt-3">
                        <div class="col-sm-5">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-7">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <div className='d-flex'>
                                        <img style={{ borderRadius: '50%', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }} width='40px' src='https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-1/82803293_798354907311536_1467528709442371584_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=i9mnDf__YIMAX_6oJSj&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-QrEhVLntmEmPTALrBLQGEsFWr0wxjpceUyPf36oddrQ&oe=6351E634' alt='' />
                                        <input style={{ borderRadius: '50px', border: 'none' }} className='w-100 profile-post-input' placeholder="what's on your mind?" />
                                    </div>
                                    <hr className='' />
                                    <div className='d-flex'>
                                        <div className='profile-post-live-video'>
                                            <FontAwesomeIcon style={{ color: 'red' }} className='' icon={faVideo} />
                                            <span> Live video</span>
                                        </div>
                                        <div className='profile-post-live-video'>
                                            <FontAwesomeIcon style={{ color: 'green' }} className='' icon={faPhotoFilm} />
                                            <span> Photo/Video</span>
                                        </div>
                                        <div className='profile-post-live-video'>
                                            <FontAwesomeIcon style={{ color: 'rgb(113, 189, 255)' }} className='' icon={faFlag} />
                                            <span> Life Event</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div className='d-flex'>
                                        <img style={{ borderRadius: '50%', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }} width='40px' src='https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-1/82803293_798354907311536_1467528709442371584_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=i9mnDf__YIMAX_6oJSj&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-QrEhVLntmEmPTALrBLQGEsFWr0wxjpceUyPf36oddrQ&oe=6351E634' alt='' />
                                        <input style={{ borderRadius: '50px', border: 'none' }} className='w-100 profile-post-input' placeholder="what's on your mind?" />
                                    </div>
                                    <hr className='' />
                                    <div className='d-flex'>
                                        <div className='profile-post-live-video'>
                                            <FontAwesomeIcon style={{ color: 'red' }} className='' icon={faVideo} />
                                            <span> Live video</span>
                                        </div>
                                        <div className='profile-post-live-video'>
                                            <FontAwesomeIcon style={{ color: 'green' }} className='' icon={faPhotoFilm} />
                                            <span> Photo/Video</span>
                                        </div>
                                        <div className='profile-post-live-video'>
                                            <FontAwesomeIcon style={{ color: 'rgb(113, 189, 255)' }} className='' icon={faFlag} />
                                            <span> Life Event</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Profile;