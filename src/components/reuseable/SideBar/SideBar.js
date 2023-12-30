'use client';

import { useSelector } from 'react-redux';
import './SideBar.css';
import { RxDashboard } from 'react-icons/rx';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { BsBoxSeamFill } from 'react-icons/bs';
import { MdOutlinePayment } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import ProductsDropDown from './DropDown/ProductsDropDown/ProductsDropDown';
import { useState } from 'react';

function SideBar() {
  const { status: SideBarStatus } = useSelector((state) => state.SideBar);
  const [selectedDropdown, setSelectedDropdown] = useState('');

  const selectedDropdownHandler = (value) => {
    if (selectedDropdown !== value) {
      setSelectedDropdown(value);
    }
    if (selectedDropdown === value) {
      setSelectedDropdown('');
    }
  };

  return (
    <div
      className={`${
        SideBarStatus ? 'translate-x-0' : '-translate-x-full'
      } sidebar-container transition-all duration-200 ease-linear`}
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

        <div>
          <div
            className="flex items-center justify-between gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#DEE4EE] duration-300 ease-in-out hover:bg-[#333A48] cursor-pointer"
            onClick={() => selectedDropdownHandler('Products')}
          >
            <div className="flex items-center gap-4">
              <BsBoxSeamFill />
              Products
            </div>

            <div
              className={`duration-300 ease-linear ${
                selectedDropdown === 'Products' ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <IoIosArrowDown />
            </div>
          </div>

          {selectedDropdown === 'Products' && (
            <div className="px-4 ">
              <ProductsDropDown />
            </div>
          )}
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
