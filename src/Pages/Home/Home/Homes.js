import { faFlag, faPhotoFilm, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebae.init';
import NewPost from '../../Profiles/Post/NewPost';

const Homes = () => {
    const [user] = useAuthState(auth);
    const [userPosts, userPetPosts] = useState([]);

    useEffect(() => {
        fetch('https://netcom01.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => userPetPosts(data));
    })

    return (
        <div className='home-bg'>
            <hr className='m-0' />
            <div className='home container'>
                <div className='home-dev mt-4'>
                    <div class="card mb-3">
                        <div class="card-body pb-2">
                            <div className='d-flex'>
                                <img style={{ borderRadius: '50%', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }} width='40px' src={user?.photoURL} alt='' />
                                <input style={{ borderRadius: '50px', border: 'none' }} className=' w-100 post-search-input' placeholder="What's on your mind?" />
                            </div>
                            <hr className='mt-3 mb-1' />
                            <div className='d-flex justify-content-center m-0 p-0'>
                                <div className='post-post-live-video'>
                                    <FontAwesomeIcon style={{ color: 'red' }} className='' icon={faVideo} />
                                    <span> Live video</span>
                                </div>
                                <div className='post-post-live-video'>
                                    <FontAwesomeIcon style={{ color: 'green' }} className='' icon={faPhotoFilm} />
                                    <span> Photo/Video</span>
                                </div>
                                <div className='post-post-live-video'>
                                    <FontAwesomeIcon style={{ color: 'rgb(113, 189, 255)' }} className='' icon={faFlag} />
                                    <span> Life Event</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------------------------------------- */}

                    {
                            userPosts.map(userPost => <NewPost key={userPost._id} userPost={userPost} />)
                        }

                </div>
            </div>
        </div>
    );
};

export default Homes;