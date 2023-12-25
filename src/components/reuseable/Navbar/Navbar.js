'use client';
import './Navbar.css';
import { useState } from 'react';
import UserLoggedIn from './Navbar Mini Components/User/UserLoggedIn';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { changeSidebarStatus } from '@/redux/features/SideBar/SideBarSlice';

function Navbar() {
  const { status: SideBarStatus } = useSelector((state) => state.SideBar);
  const dispatch = useDispatch();

  const SideBarHandler = () => {
    dispatch(changeSidebarStatus());
    // console.log('SideBarStatus = ', SideBarStatus);
  };

  return (
    <div className="header">
      <div className="container flex items-center justify-between gap-5 relative">
        <div
          className="text-xl font-bold cursor-pointer hover:text-green-500"
          onClick={() => SideBarHandler()}
        >
          <FiMenu />
        </div>

        <div className="flex items-center gap-5">
          {/* <User /> */}
          <UserLoggedIn />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
