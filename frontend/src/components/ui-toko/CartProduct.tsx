import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdDeleteOutline, MdLocalOffer } from "react-icons/md";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface CartItem {
  id: string;
  name: string;
  color: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  quantity: number;
  seller: string;
  buyerPercentage?: number;
}

const CartProduct = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Mouse Gaming Wireless Silent Click Rechargeable Battery F1 INPHIC",
      color: "Black",
      price: 99900,
      originalPrice: 296667,
      discount: 66,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
      quantity: 1,
      seller: "RELTON",
      buyerPercentage: 99,
    },
  ]);

  const [selectAll, setSelectAll] = useState(true);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    new Set(["1"])
  );

  const formatPrice = (price: number) => {
    return `Rp${price.toLocaleString("id-ID")}`;
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(items.map((item) => item.id)));
    }
    setSelectAll(!selectAll);
  };

  const toggleItem = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
    setSelectAll(newSelected.size === items.length);
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
    const newSelected = new Set(selectedItems);
    newSelected.delete(id);
    setSelectedItems(newSelected);
  };

  const totalPrice = items.reduce((sum, item) => {
    if (selectedItems.has(item.id)) {
      return sum + item.price * item.quantity;
    }
    return sum;
  }, 0);

  const totalDiscount = items.reduce((sum, item) => {
    if (selectedItems.has(item.id)) {
      return sum + (item.originalPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);

  const selectedCount = selectedItems.size;

  return (
    <>
      {/* Navigasi - Hidden on mobile */}
      <div className="hidden lg:block">
        <Navigation />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-700">
              <IoChevronBack className="w-6 h-6" />
            </a>
            <h1 className="text-lg font-semibold">Keranjang</h1>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 lg:mt-26 lg:p-8 pb-32 lg:pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop title */}
          <h1 className="hidden lg:block text-[26px] font-semibold mb-6">
            Keranjang
          </h1>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-4">
              {/* Select All - Desktop */}
              <div className="hidden lg:block bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleSelectAll}
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                        selectAll
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectAll && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                    <span className="font-medium">
                      Pilih Semua{" "}
                      <span className="text-gray-500">({items.length})</span>
                    </span>
                  </div>
                  <button className="text-green-600 hover:text-green-700 font-medium">
                    Hapus
                  </button>
                </div>
              </div>

              {/* Mobile: Product count and delete */}
              <div className="lg:hidden bg-white px-4 py-3 mt-16 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {items.length} produk terpilih
                </span>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  Hapus
                </button>
              </div>

              {/* Cart Items */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white lg:rounded-lg lg:shadow-sm overflow-hidden"
                >
                  {/* Seller Header */}
                  <div className="flex items-center gap-3 p-4 border-b">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                        selectedItems.has(item.id)
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedItems.has(item.id) && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked
                        className="w-4 h-4 text-purple-600"
                        readOnly
                      />
                      <span className="font-medium">{item.seller}</span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <div className="flex gap-3 lg:gap-4">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`w-6 h-6 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
                          selectedItems.has(item.id)
                            ? "bg-green-500 border-green-500"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedItems.has(item.id) && (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </button>

                      {/* Product Image */}
                      <div className="relative w-20 h-20 lg:w-24 lg:h-24 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium mb-1 line-clamp-2">
                          {item.name}
                        </h3>

                        {/* Mobile: Color dropdown */}
                        <div className="lg:hidden mb-2">
                          <button className="flex items-center gap-1 text-sm text-gray-700">
                            {item.color}
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Desktop: Color text */}
                        <p className="hidden lg:block text-sm text-gray-500 mb-3">
                          {item.color}
                        </p>

                        {/* Mobile: Buyer percentage */}
                        {item.buyerPercentage && (
                          <div className="lg:hidden flex items-center gap-1 mb-2">
                            <span className="text-orange-500 text-lg">👍</span>
                            <span className="text-sm text-orange-500 font-medium">
                              {item.buyerPercentage}% pembeli merasa puas!
                            </span>
                          </div>
                        )}

                        {/* Price section */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-0">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-base lg:text-lg font-bold">
                                {formatPrice(item.price)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs lg:text-sm text-gray-400 line-through">
                                {formatPrice(item.originalPrice)}
                              </span>
                              <span className="text-xs lg:text-sm text-red-500 font-semibold">
                                {item.discount}%
                              </span>
                            </div>
                          </div>

                          {/* Desktop: Action buttons and quantity */}
                          <div className="hidden lg:flex items-center gap-4">
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                              <AiOutlineHeart className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <MdDeleteOutline className="w-5 h-5" />
                            </button>

                            <div className="flex items-center border rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              >
                                −
                              </button>
                              <span className="px-4 py-1 border-x min-w-12 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Mobile: Quantity controls only */}
                          <div className="lg:hidden flex items-center border rounded-lg self-end">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-3 py-1.5 text-green-600 hover:bg-gray-50 transition-colors"
                            >
                              −
                            </button>
                            <span className="px-4 py-1.5 border-x min-w-12 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-3 py-1.5 text-green-600 hover:bg-gray-50 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop Summary Section */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Ringkasan belanja</h2>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-600">Total</span>
                  <span className="text-2xl font-bold">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                <button className="w-full flex items-center justify-between p-4 mb-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <MdLocalOffer className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Lagi belum ada promo, nih
                    </span>
                  </div>
                  <IoChevronForward className="w-5 h-5 text-gray-400" />
                </button>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Beli ({selectedCount})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleSelectAll}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  selectAll
                    ? "bg-green-500 border-green-500"
                    : "border-gray-300"
                }`}
              >
                {selectAll && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold">
                    {formatPrice(totalPrice)}
                  </span>
                  <span className="text-red-500 text-xs">🏷️</span>
                </div>
                <button className="text-xs text-gray-600 flex items-center gap-1">
                  Total Diskon {formatPrice(totalDiscount)}
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors">
              Beli ({selectedCount})
            </button>
          </div>
        </div>
      </div>

      {/* Footer - Hidden on mobile */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  );
};

export default CartProduct;
