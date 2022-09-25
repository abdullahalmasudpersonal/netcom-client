import { faFlag, faPhotoFilm, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebae.init';
import sendbtn from '../../../Assets/send.png';
import axios from 'axios';

const PutNewPost = () => {
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const posts = {
            email: user.email,
            username: user.displayName,
            img: user.photoURL,
            post: event.target.post.value
        }
        axios.post(`https://netcom01.herokuapp.com/posts`, posts)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success('Successfull your post!');
                    event.target.reset();
                }
            })
    };

    return (
        <div class="card mb-3">
            <div class="card-body pb-2">
                <div className='d-flex'>
                    <div className='col-sm-1 p-0'>
                        <img style={{ borderRadius: '50%', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', }} width='40px' src={user?.photoURL} alt='' />
                    </div>
                    <form onSubmit={handlePlaceOrder} className='d-flex col-sm-11 p-0'>
                        <input className='w-100 post-search-input' placeholder="What's on your mind?" type='text' name='post' required />
                        <button type="submit" className='post-post-submit-post-btn'><img width='25px' src={sendbtn} alt='' /></button>
                    </form>

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
    );
};

export default PutNewPost;