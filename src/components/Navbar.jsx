import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IoCart } from "react-icons/io5";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/catalogue" className="text-xl font-bold text-emerald-900">
          E-Commerce
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link to="/catalogue" className="text-gray-700 hover:text-black">
            HOME
          </Link>
          <Link to="/cart" className="relative text-gray-700 hover:text-black">
            <IoCart size={20} />
            {cartCount > 0 && (
              <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
