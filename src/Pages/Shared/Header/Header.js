import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShop, faStopwatch, faUserAlt, faUserFriends, faMessage, faBell, faEllipsis, faEllipsisVertical, faSignOut } from '@fortawesome/free-solid-svg-icons';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-bg'>
      <div className='header'>

        <div className='header-dev1'>
          <h5 className='m-0'>Netcom</h5>
          <form class="form-inline my-2 my-lg-0">
            <input style={{ borderRadius: '50px' }} class="form-control mr-sm-2" type="search" placeholder="Netcom Search" aria-label="Search" />
            {/*   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </form>
        </div>

        <div className='header-dev2' style={{fontColor:'gray'}}>
          <FontAwesomeIcon style={{fontColor:'black'}} className='header-dev2-font' icon={faHome} />
          <FontAwesomeIcon style={{fontColor:'black'}} className='header-dev2-font' icon={faStopwatch} />
          <FontAwesomeIcon style={{fontColor:'black'}} className='header-dev2-font' icon={faUserFriends} />
          <FontAwesomeIcon style={{fontColor:'black'}} className='header-dev2-font' icon={faShop} />
        </div>

        <div className='header-dev3'>
          <div className='header-dev3-font-account'>
            <FontAwesomeIcon className='header-dev3-font-account-font' style={{ fontSize: '19px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} icon={faUserAlt} />
            <p className='header-dev3-font-account-user-name'>Tanvir</p>
          </div>
          <FontAwesomeIcon className='header-dev3-font-message' icon={faMessage} />
          <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" />
          <FontAwesomeIcon className='header-dev3-font-notification' icon={faBell} />
          <FontAwesomeIcon className='header-dev3-font-ellipsis' icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
  );
};

export default Header;