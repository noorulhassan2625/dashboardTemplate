import React from 'react';
import DashboardBox from '../../../components/dashboardBox';
import TotalUsersIcon from '../../../components/media/images/totalusersIcon.svg'
import allusersicon from '../../../components/media/images/allusersicon.svg'
import DashboardUsersList from '../../../components/dashboardUsersList';
import DashboardDoctorsList from '../../../components/dashboardDoctorsList';
const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold font-inter text-[#262626] mb-6">Dashboard</h2>
     <div className='grid grid-cols-4 gap-4'>

      <DashboardBox
      icon={TotalUsersIcon}
      title={'Total Registered Users'}
      totalData={'25.4k'}
      />

      <DashboardBox
      icon={TotalUsersIcon}
      title={'Total Registered Users'}
      totalData={'25.4k'}
      />

      <DashboardBox
      icon={TotalUsersIcon}
      title={'Total Registered Users'}
      totalData={'25.4k'}
      />

      <DashboardBox
      icon={TotalUsersIcon}
      title={'Total Registered Users'}
      totalData={'25.4k'}
      />
      </div>
      <div className='grid grid-cols-2 gap-4'>
      <DashboardUsersList
       icon={allusersicon}
       title={'New Users'}
      />
      <DashboardDoctorsList
       icon={allusersicon}
       title={'New Doctors'}
      />
     
      </div>
    </div>
  );
};

export default Dashboard;
