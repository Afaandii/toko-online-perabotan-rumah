import { useRef } from "react";
import {
  FaTag,
  FaWatchmanMonitoring,
  FaFileInvoiceDollar,
  FaShoppingCart,
  FaLaptop,
  FaFutbol,
  FaStore,
  FaCreditCard,
  FaTshirt,
  FaUser,
  FaBaby,
  FaSpa,
} from "react-icons/fa";
import type { JSX } from "react/jsx-runtime";

interface Category {
  id: number;
  name: string;
  icon: JSX.Element;
}

export default function CategoryProduct() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    {
      id: 1,
      name: "Diskon s.d 700rb",
      icon: <FaTag />,
    },
    {
      id: 2,
      name: "Watch series 11",
      icon: <FaWatchmanMonitoring />,
    },
    {
      id: 3,
      name: "Tagihan & Isi ulang",
      icon: <FaFileInvoiceDollar />,
    },
    {
      id: 4,
      name: "Bliblimart",
      icon: <FaShoppingCart />,
    },
    {
      id: 5,
      name: "Gadget & Elektronik",
      icon: <FaLaptop />,
    },
    {
      id: 6,
      name: "Sport & Wellness",
      icon: <FaFutbol />,
    },
    {
      id: 7,
      name: "Komisi 20%",
      icon: <FaStore />,
    },
    {
      id: 8,
      name: "PayLater",
      icon: <FaCreditCard />,
    },
    {
      id: 9,
      name: "Fashion Pria",
      icon: <FaTshirt />,
    },
    {
      id: 10,
      name: "Fashion Wanita",
      icon: <FaUser />,
    },
    {
      id: 11,
      name: "Ibu & Bayi",
      icon: <FaBaby />,
    },
    {
      id: 12,
      name: "Kecantikan",
      icon: <FaSpa />,
    },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-3">
      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="shrink-0 w-24 sm:w-28 cursor-pointer flex flex-col items-center justify-center h-32 p-2"
          >
            {/* Icon Container - Lingkaran Putih */}
            <div className="bg-white rounded-full p-3 flex items-center justify-center w-16 h-16 shadow-sm border border-gray-200">
              <div className="text-xl text-gray-700">{category.icon}</div>
            </div>

            {/* Category Name - Centered & Fixed Height */}
            <p className="text-center text-xs font-medium text-gray-800 line-clamp-2 h-10 flex items-center justify-center px-1 mt-1">
              {category.name}
            </p>
          </div>
        ))}
      </div>

      {/* CSS untuk menyembunyikan scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
