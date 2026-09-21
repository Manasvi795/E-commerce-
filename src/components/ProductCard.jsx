import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-col rounded-lg border border-stone-200 bg-white p-4 transition hover:shadow-md">
      <div className="flex h-56 items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-w-full object-contain"
        />
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-sm capitalize text-emerald-500">
          {product.category}
        </p>
        <h2 className="mt-1 font-semibold text-stone-900">{product.title}</h2>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-lg font-bold text-stone-900">
            ${product.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
