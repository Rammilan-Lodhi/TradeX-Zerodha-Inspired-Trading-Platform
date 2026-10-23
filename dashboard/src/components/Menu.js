import React, { useState } from 'react';
import { FRONTEND_URL } from '../config';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  // const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  // const handleProfileClick = (index) => {
  //   setIsProfileDropdownOpen(!isProfileDropdownOpen);
  // };
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');

    window.location.replace(`${FRONTEND_URL}`);
  };

  const menuClass = 'menu';
  const activeMenuClass = 'menu selected';

  return (
    <div className='menu-container'>
      <img src='logo.png' alt='Logo' style={{ width: '50px' }} />
      <div className='menus'>
        <ul>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/'
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/orders'
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/holdings'
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/positions'
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/funds'
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/apps'
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className='profile'>
          <div className='avatar'>ZU</div>

          <button
            type='button'
            className='btn'
            onClick={handleLogout}
            style={{
              backgroundColor: '#efa158',
              color: '#222',
              border: 'none',
              borderRadius: '5px',
              padding: '12px 20px',
              fontSize: '16px',
              fontWeight: '400',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e8e8e800';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
