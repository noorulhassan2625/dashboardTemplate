// UsersList.js
import React, { useState } from 'react';
import Table from '../../../components/table';
import DeleteIcon from '../../../components/media/images/DeleteIcon.svg'
const UsersList = () => {
  const [filterText, setFilterText] = useState('');

  const data = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      registrationDate: '2023-01-15',
      image: '', // No image to demonstrate initials
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '234-567-8901',
      registrationDate: '2023-02-20',
      image: 'https://via.placeholder.com/40', // Example image
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '345-678-9012',
      registrationDate: '2023-03-10',
      image: '', // No image to demonstrate initials
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob@example.com',
      phone: '456-789-0123',
      registrationDate: '2023-04-05',
      image: 'https://via.placeholder.com/40', // Example image
    },
  ];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: 'Name',
      selector: row => (
        <div className="flex items-center">
          {row.image ? (
            <img
              src={row.image}
              alt={row.name}
              className="w-8 h-8 rounded-full mr-2"
            />
          ) : (
            <div className="bg-gray-500 w-8 h-8 rounded-full flex items-center justify-center text-white mr-2">
              {row.name
                .split(' ')
                .map(word => word[0])
                .join('')}
            </div>
          )}
          <span>{row.name}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Registration Date',
      selector: row => row.registrationDate,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <button
          onClick={() => handleDelete(row.id)}
        >
         <img src={DeleteIcon} alt='deleteButton'/>
        </button>
      ),
    },
  ];

  const handleDelete = (id) => {
    console.log(`Deleted user with id: ${id}`);
    alert(`Deleted user with id: ${id}`);
    // Add delete functionality here
  };


  return (
    <div>
      <div className='flex'>
      <h2 className="text-3xl text-[#262626] font-inter font-semibold mb-4">Users List</h2>
      <p className='text-[#262626] ml-auto mt-2 text-base font-normal font-inter'>Total Users <span className='text-[#0065A2]'>3456</span></p>
      </div>
      <div   style={{ boxShadow: '0px 1px 2px 0px #1018280D' }}
      className='border-[1px] mt-5 border-[#E8E8E8] rounded-xl bg-white pt-4 px-3 '>
     <div className="relative ">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.33 4.33a1 1 0 11-1.42 1.42l-4.33-4.33zm-4.9-1.32a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search"
          className="pl-10 p-2 border border-gray-300 rounded"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
        />
      </div>
      <Table columns={columns} data={filteredData} />
      </div>
    </div>
  );
};

export default UsersList;
