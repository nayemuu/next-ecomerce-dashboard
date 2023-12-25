'use client';

import { useSelector } from 'react-redux';
import './SideBar.css';
import { RxDashboard } from 'react-icons/rx';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { BsBoxSeamFill } from 'react-icons/bs';
import { MdOutlinePayment } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

function SideBar() {
  const { status: SideBarStatus } = useSelector((state) => state.SideBar);

  return (
    <div
      className={`${
        SideBarStatus ? 'translate-x-0' : '-translate-x-full'
      } sidebar-container transition-all duration-300 ease-linear`}
    >
      <div className="mt-5">
        <div className="flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#DEE4EE] duration-300 ease-in-out hover:bg-[#333A48] cursor-pointer">
          <RxDashboard />
          Dashboard
        </div>

        <div className="flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#DEE4EE] duration-300 ease-in-out hover:bg-[#333A48] cursor-pointer">
          <RiShoppingCart2Fill />
          Orders
        </div>

        <div className="flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#DEE4EE] duration-300 ease-in-out hover:bg-[#333A48] cursor-pointer">
          <BsBoxSeamFill />
          Products
        </div>

        <div className="flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#DEE4EE] duration-300 ease-in-out hover:bg-[#333A48] cursor-pointer">
          <MdOutlinePayment />
          Payment
        </div>

        <div className="flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#DEE4EE] duration-300 ease-in-out hover:bg-[#333A48] cursor-pointer">
          <FaUsers />
          Users
        </div>
      </div>
    </div>
  );
}

export default SideBar;
