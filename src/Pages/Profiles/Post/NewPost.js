import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faThumbsUp, faComment, faShare, faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebae.init';

const NewPost = ({userPost}) => {
    const [user] = useAuthState(auth);
    const {_id, post, username, img} = userPost;

    return (
        <div>
            <div class="card mb-3">
                <div class="card-body">
                    <div className='d-flex post-post-top-part'>
                        <div>
                            <img style={{ borderRadius: '50%', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }} width='40px' src={img} alt='' />
                            <span className=' m-2'>{username}</span>
                        </div>

                        <div className='d-flex justify-content-end'>
                            <FontAwesomeIcon className='m-0 post-font-ellipsish-detail' icon={faEllipsisH} />
                        </div>
                    </div>
                    <hr className='' />
                    <div className='d-flex'>
                        <div className='profile-post-live-video'><p>{post}</p>
                        </div>
                    </div>

                    <hr className='m-0' />
                    <div className='d-flex justify-content-center'>
                        <div className='post-post-react mt-1 mb-1'>
                            <FontAwesomeIcon style={{ color: '' }} className='' icon={faThumbsUp} />
                            <span> Like</span>
                        </div>
                        <div className='post-post-react'>
                            <FontAwesomeIcon style={{ color: '' }} className='' icon={faComment} />
                            <span> Comment</span>
                        </div>
                        <div className='post-post-react'>
                            <FontAwesomeIcon style={{ color: '' }} className='' icon={faShare} />
                            <span> Share</span>
                        </div>
                    </div>
                    <hr className='m-0' />
                    <div className='d-flex mt-2'>
                        <img style={{ borderRadius: '50%', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }} width='33px' src={img} alt='' />
                        <input style={{ borderRadius: '50px', border: 'none' }} className=' w-100 post-search-input' placeholder="Write your comment..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPost;