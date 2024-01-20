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
import { usePathname } from 'next/navigation';

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

  const pathname = usePathname();
  // console.log('pathname = ', pathname);

  return (
    <div
      className={`${
        SideBarStatus ? 'translate-x-0' : '-translate-x-full'
      } sidebar-container transition-all duration-200 ease-linear`}
    >
      <div className="mt-5 flex flex-col gap-[1px]">
        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
            pathname.includes('/dashboard')
              ? 'bg-[#1B2850] text-white'
              : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
          }`}
        >
          <RxDashboard />
          Dashboard
        </div>
        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
            pathname.includes('/dashboard')
              ? 'bg-[#1B2850] text-white'
              : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
          }`}
        >
          <RiShoppingCart2Fill />
          Orders
        </div>

        <div>
          <div
            className={`flex items-center justify-between gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
              pathname.includes('/products')
                ? 'bg-[#1B2850] text-white'
                : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
            }`}
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

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
            pathname.includes('/dashboard')
              ? 'bg-[#1B2850] text-white'
              : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
          }`}
        >
          <MdOutlinePayment />
          Payment
        </div>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
            pathname.includes('/dashboard')
              ? 'bg-[#1B2850] text-white'
              : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
          }`}
        >
          <FaUsers />
          Users
        </div>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
            pathname.includes('/dashboard')
              ? 'bg-[#1B2850] text-white'
              : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
          }`}
        >
          <FaUsers />
          Users
        </div>
      </div>
    </div>
  );
}

export default SideBar;
