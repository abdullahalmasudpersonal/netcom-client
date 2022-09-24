import { faFlag, faPhotoFilm, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className='profile-details'>
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
              </div>
    );
};

export default Post;