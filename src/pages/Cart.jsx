import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  FiPlus,
  FiMinus,
  FiTrash2,
  FiArrowRight,
  FiShoppingBag,
} from "react-icons/fi";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-stone-100 px-4 py-12">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center border border-stone-200 bg-white px-6 py-16 text-center">
          <FiShoppingBag className="text-5xl text-stone-400" />
          <h1 className="mt-5 text-2xl font-semibold text-stone-900">
            Your cart is empty
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Add some products to your cart before checking out.
          </p>
          <Link
            to="/catalogue"
            className="mt-6 bg-emerald-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-900"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 border-b border-stone-200 pb-6">
          <p className="text-sm font-medium text-emerald-800">Shopping Cart</p>
          <h1 className="mt-1 text-2xl font-bold text-stone-900 sm:text-3xl">
            Your Cart
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Review your items before placing your order.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border border-stone-200 bg-white p-4 sm:p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center bg-stone-100 p-3 sm:h-28 sm:w-28">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-xs capitalize text-emerald-800">
                          {item.category}
                        </p>

                        <h2 className="mt-1 text-sm font-semibold text-stone-900 sm:text-base">
                          {item.title}
                        </h2>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="h-fit p-2 text-stone-400 transition hover:bg-red-50 hover:text-red-600"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="font-semibold text-stone-900">
                        ${item.price.toFixed(2)}
                      </span>
                      <div className="flex items-center border border-stone-200">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          disabled={item.quantity === 1}
                          className="p-2 text-stone-600 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <FiMinus size={15} />
                        </button>

                        <span className="min-w-10 text-center text-sm font-medium text-stone-900">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="p-2 text-stone-600 transition hover:bg-stone-100"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-fit border border-stone-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-stone-900">
              Order Summary
            </h2>
            <div className="mt-5 space-y-3 border-b border-stone-200 pb-5 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-stone-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="flex justify-between pt-5">
              <span className="font-semibold text-stone-900">Total</span>

              <span className="text-xl font-bold text-stone-900">
                ${total.toFixed(2)}
              </span>
            </div>

            <Link
              to="/confirmation"
              className="mt-6 flex items-center justify-center gap-2 bg-emerald-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-900"
            >
              Checkout
              <FiArrowRight size={17} />
            </Link>

            <Link
              to="/catalogue"
              className="mt-3 block text-center text-sm font-medium text-stone-600 hover:text-emerald-800"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
