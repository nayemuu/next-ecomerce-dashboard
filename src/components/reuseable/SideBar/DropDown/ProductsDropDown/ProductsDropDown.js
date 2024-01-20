import { IoEllipseOutline } from "react-icons/io5";
import { IoEllipse } from "react-icons/io5";

function ProductsDropDown() {
  return (
    <div>
      <div className="block text-left border-t py-3 border-red-200 text-base hover:text-green-600 px-2 cursor-pointer">
        <div className="flex items-center gap-x-2">
          <IoEllipseOutline />
          Product List
        </div>
      </div>

      <div className="block text-left border-t py-3 border-red-200 text-base hover:text-green-600 px-2 cursor-pointer">
        <div className="flex items-center gap-x-2">
          <IoEllipse />
          Add Product
        </div>
      </div>

      <div className="block text-left border-t py-3 border-red-200 text-base hover:text-green-600 px-2 cursor-pointer">
        <div className="flex items-center gap-x-2">
          <IoEllipseOutline />
          Category
        </div>
      </div>

      <div className="block text-left border-t py-3 border-red-200 text-base hover:text-green-600 px-2 cursor-pointer">
        <div className="flex items-center gap-x-2">
          <IoEllipseOutline />
          Sub Category
        </div>
      </div>
    </div>
  );
}

export default ProductsDropDown;
