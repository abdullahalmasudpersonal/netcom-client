import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faThumbsUp, faComment, faShare, faEllipsisH, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Post.css';

const MyPost = ({ mypost }) => {
    const {_id, post, img, username } = mypost;
    const [myposts, setMyposts] = useState([]);

    const handleMyPostDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://netcom01.herokuapp.com/mypost/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myposts.filter(mypost => mypost._id !== id);
                    setMyposts(remaining);
                })
        }
    }

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
                            <li class="dropdown nav-item">
                                {/* <FontAwesomeIcon className='header-dev3-font-ellipsis' icon={faEllipsisVertical} /> */}
                                <FontAwesomeIcon className='m-0 post-font-ellipsish-detail' icon={faEllipsisH} />
                                <div className='dropdown-content-mypost py-2'>
                                    <li className='dropdown2'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p className='mb-1' onClick={() => handleMyPostDelete(mypost._id)} style={{ color: 'gray', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faTrash} style={{ color: 'gray' }} className='px-1' /> Delete post</p>
                                        </div>
                                    </li>
                                    {/*   <li className='dropdown2'>
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
                                            </li> */}
                                </div>
                            </li>

                            {/*  <FontAwesomeIcon className='m-0 post-font-ellipsish-detail' icon={faEllipsisH} /> */}
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

export default MyPost;