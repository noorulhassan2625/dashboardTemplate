import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt } from 'react-icons/fa';
import adminIcon from '../components/media/images/DashboardIcon.svg'
import BellIcon from '../components/media/images/bellIcon.svg'
import AdminImg from '../components/media/images/AdminImg.svg'
const TopNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <header className="bg-[#FCFCFD] shadow p-4 flex justify-between items-center border-b-2 border-b-[#F6F6F6]">
      <nav>
        <ul className="flex items-center space-x-4">
          {/* admin icon as the first breadcrumb */}
          <li className="flex items-center">
            <Link to="/admin" className="text-gray-600 ml-3">
              {/* <FaTachometerAlt size={20} /> */}
              <img src={adminIcon} alt="" />
            </Link>
            {pathnames.length > 0 && <span className="ml-2">{'>'}</span>}
          </li>
          {pathnames.map((name, index) => {
            // Skip displaying 'admin' in breadcrumbs
            if (name.toLowerCase() === 'admin') return null;

            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={name} className="flex items-center">
                <Link
                  to={routeTo}
                  className={`text-[#262626] font-inter text-sm ${isLast ? 'font-medium' : ''}`}
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
                {!isLast && <span className="mx-2">{'>'}</span>}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center">
        <span className="mr-4"><img src={BellIcon} alt='Bell Icon'/></span>
        <button>
        <img src={AdminImg} alt='Bell Icon'/>
        </button>
      </div>
    </header>
  );
};

export default TopNavigation;
