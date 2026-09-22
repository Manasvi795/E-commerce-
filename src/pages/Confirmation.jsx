import { Link } from "react-router-dom";
import { FiCheck, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

function Confirmation() {
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <main className="min-h-screen bg-stone-100 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-xl">
        <div className="border border-stone-200 bg-white px-6 py-10 text-center sm:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <FiCheck className="text-3xl text-green-700" />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-stone-900 sm:text-3xl">
            Order Confirmed
          </h1>

          <p className="mt-3 text-sm text-stone-500">
            Thank you for your order.Your order has been placed successfully.
          </p>

          <div className="mt-8 border-y border-stone-200 py-5">
            <div className="flex justify-between text-sm text-stone-600">
              <span>Items</span>
              <span>
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="font-semibold text-stone-900">Total</span>

              <span className="font-bold text-stone-900">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/catalogue"
              className="flex items-center justify-center gap-2 bg-emerald-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-900"
            >
              <FiShoppingBag size={17} />
              Continue Shopping
            </Link>

            <Link
              to="/cart"
              className="px-5 py-3 text-sm font-medium text-stone-600 transition hover:text-emerald-800"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Confirmation;
