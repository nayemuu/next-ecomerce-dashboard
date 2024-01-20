import Navigate from '@/helpers/Navigate';
import { usePathname } from 'next/navigation';
import { IoEllipseOutline } from 'react-icons/io5';
import { IoEllipse } from 'react-icons/io5';

function ProductsDropDown() {
  const pathname = usePathname();

  return (
    <div>
      <div
        className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
          pathname.includes('/productlist') && 'text-green-600'
        }`}
      >
        <Navigate href="/products/productlist">
          <div className="flex items-center gap-x-2">
            {pathname.includes('/productlist') ? (
              <IoEllipse />
            ) : (
              <IoEllipseOutline />
            )}
            Product List
          </div>
        </Navigate>
      </div>

      <div
        className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
          pathname.includes('/add-product') && 'text-green-600'
        }`}
      >
        <div className="flex items-center gap-x-2">
          {pathname.includes('/add-product') ? (
            <IoEllipse />
          ) : (
            <IoEllipseOutline />
          )}
          Add Product
        </div>
      </div>

      <div className="block text-left border-t py-3 border-red-200 text-base hover:text-[#2792d0] px-2 cursor-pointer">
        <div className="flex items-center gap-x-2">
          {pathname.includes('/catrgory') ? (
            <IoEllipse />
          ) : (
            <IoEllipseOutline />
          )}
          Category
        </div>
      </div>

      <div className="block text-left border-t py-3 border-red-200 text-base hover:text-[#2792d0] px-2 cursor-pointer">
        <div className="flex items-center gap-x-2">
          {pathname.includes('/sub-catrgory') ? (
            <IoEllipse />
          ) : (
            <IoEllipseOutline />
          )}
          Sub Category
        </div>
      </div>
    </div>
  );
}

export default ProductsDropDown;
