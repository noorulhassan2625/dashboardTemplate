import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import adminLogo from '../components/media/images/DashboardLogo.svg'
import adminIcon from '../components/media/images/DashboardIcon.svg'
import UserlistIcon from '../components/media/images/UserlistIcon.svg'
import doctorsListIcon from '../components/media/images/DoctorsListIcon.svg'
import UnregisteredDoctorsListIcon from '../components/media/images/unregisterDocIcon.svg'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: adminIcon },
    { name: 'Users List', path: '/admin/userlist', icon: UserlistIcon },
    { name: 'Doctors List', path: '/admin/doctorsList', icon: doctorsListIcon },
    { name: 'Pending Doctors Requests', path: '/admin/pendingRequests', icon: doctorsListIcon },
    { name: 'Unregistered Doctors List', path: '/admin/unregisteredDoctorsList', icon: UnregisteredDoctorsListIcon },
  ]

  return (
    <aside
      className={`bg-white text-[#5E5D5D] ${
        isCollapsed ? 'w-16' : 'w-64'
      } flex flex-col transition-width duration-300`}
    >
      <div className='flex items-center justify-between p-4'>
        <span className={`mx-2 ${isCollapsed && 'hidden'}`}>
          <img src={adminLogo} alt='logo' />
        </span>
        <button
          onClick={toggleCollapse}
          style={{ boxShadow: '0px 2px 4px 0px #00000029' }}
          //  className='relative top-[-10px] right-[-25px] bg-white text-[#1f1f1f] text-base rounded-lg p-1 '

          className={`relative top-[-10px] right-[-25px] bg-white text-[#1f1f1f] text-base rounded-lg p-1 ${
            isCollapsed && 'top-[0px] right-[0px] '
          }`}
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      <nav
        // className='flex-grow pr-5'
        className={`flex-grow pr-5 ${isCollapsed && 'pr-1.5'}`}
      >
        <ul>
          {menuItems.map(item => (
            <li
              key={item.name}
              className='relative  font-inter text-sm font-medium'
            >
              <NavLink
                to={item.path}
                // className={({ isActive }) =>
                //   `flex items-center p-3 my-1 transition-color nav-item rounded-e-lg duration-200 hover:bg-[#0065A2] hover:text-white ${
                //     isActive ? 'bg-[#0065A2] text-white' : ''
                //   }`
                // }
                className={({ isActive }) =>
                  `flex items-center p-3 ${
                    isCollapsed && 'pr-0 pl-3'
                  } my-1 transition-color nav-item rounded-e-lg duration-200 hover:bg-[#0065A2] hover:text-white ${
                    isActive ? 'bg-[#0065A2] text-white' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      // className='text-xl icon mr-4'
                      className={`text-xl icon mr-4 ${isCollapsed && 'mr-0'}`}
                      style={{
                        filter: isActive ? 'invert(1) brightness(2)' : 'none'
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={`${item.name} icon`}
                        width='20px'
                      />
                    </span>
                    {!isCollapsed && <span>{item.name}</span>}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
