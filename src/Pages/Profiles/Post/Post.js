import { faGraduationCap, faHome, faLocation, faHeart, faLocationDot, faClock, faPaperPla } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebae.init';
import './Post.css';
import { toast } from 'react-toastify';
import PutNewPost from './PutNewPost';
import MyPost from './MyPost';

const Post = () => {
    const [user] = useAuthState(auth);
    const [myposts, setMyposts] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://netcom01.herokuapp.com/mypost?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyposts(data));
        }
    }, [user])

    return (
        <div className='post-page'>
            <hr className='m-0' />
            <div className='container' >
                <div class="row pt-3">
                    <div class="col-sm-5 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 style={{ fontWeight: 'bold' }}>Intro</h5>
                                <p class="card-text text-center">Let's always tell the truth & move on.</p>

                                <button className='post-post-edit-bio'>Edit Bio</button>

                                <div className='mt-2 d-flex align-items-center'> <FontAwesomeIcon icon={faGraduationCap} /> <span className='m-2'>
                                    Studied at Govt. Madrasah-e-Alia, Dhaka.</span></div>

                                <div className=' d-flex align-items-center'> <FontAwesomeIcon icon={faGraduationCap} /> <span className='m-2'>
                                    Studied at Islamic Arabic University । IAU । ইসলামি আরবি বিশ্ববিদ্যালয়।</span></div>

                                <div className=' d-flex align-items-center'> <FontAwesomeIcon icon={faHome} /> <span className='m-2'>
                                    Lives in Dhaka, Bangladesh</span></div>

                                <div className=' d-flex align-items-center'> <FontAwesomeIcon icon={faLocationDot} /> <span className='m-2'>
                                    From Bhandaria</span></div>

                                <div className=' d-flex align-items-center'> <FontAwesomeIcon icon={faHeart} /> <span className='m-2'>
                                    Single</span></div>

                                <div className=' d-flex align-items-center'> <FontAwesomeIcon icon={faClock} /> <span className='m-2'>
                                    Joined on November 2016</span></div>

                                <button className='post-post-edit-bio mt-2'>Edit details</button>

                                {/*    <div className=' mt-3'>
                                <p> <span className='mt-2 post-post-hobbis'>
                                      <FontAwesomeIcon icon={faLaptopCode} />  Learning code</span> 
                                    <span className='mt-2 post-post-hobbis'>
                                      <FontAwesomeIcon icon={faLaptopCode} />  Learning code</span>
                                    <span className='mt-2 post-post-hobbis'>
                                      <FontAwesomeIcon icon={faLaptopCode} />  Learning code</span></p>
                                </div> */}

                                <button className='post-post-edit-bio mt-3'>Edit hobbies</button>

                                <button className='post-post-edit-bio mt-3'>Add Featured</button>

                            </div>
                        </div>

                        <div class="card mt-3">
                            <div class="card-body d-flex" style={{ justifyContent: 'space-between' }}>
                                <h5 style={{ fontWeight: 'bold' }}>Photo</h5>
                                <p className='post-post-see-all-photo'>See All Photo</p>
                            </div>
                        </div>

                        <div class="card mt-3">
                            <div class="card-body d-flex" style={{ justifyContent: 'space-between' }}>
                                <h5 style={{ fontWeight: 'bold' }}>Friends</h5>
                                <p className='post-post-see-all-photo'>See All Friends</p>
                            </div>
                        </div>

                        <div class="card mt-3">
                            <div class="card-body d-flex" style={{ justifyContent: 'space-between' }}>
                                <h5 style={{ fontWeight: 'bold' }}>Life Event</h5>
                                <p className='post-post-see-all-photo'>See All Events</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-sm-7">
                        <PutNewPost />
                        {
                            myposts.map(mypost => <MyPost key={mypost._id} mypost={mypost} />)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Post;