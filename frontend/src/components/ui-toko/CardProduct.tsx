import type { FC } from 'react';

interface CardProductProps {
  image: string;
  title: string;
  finalPrice: number;
}

const CardProduct: FC<CardProductProps> = ({
  image,
  title,
  finalPrice,
}) => {
  const formatPrice = (price: number): string => {
    return `Rp${price.toLocaleString('id-ID')}`;
  };

  return (
    <a href="/detail-produk">
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
      {/* Image Container */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-gray-800 font-medium text-base mb-3 h-12 line-clamp-2">
          {title}
        </h3>

        {/* Price Section - Hanya harga final */}
        <div className="text-gray-900 font-bold text-xl">
          {formatPrice(finalPrice)}
        </div>
      </div>
    </div>
      </a>
  );
};

// Demo Component dengan 20 produk dummy
const CardProductDemo: FC = () => {
  const dummyProducts = [
    {
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400",
      title: "Noelle 180 Cm Pohon Natal Premium",
      finalPrice: 2799300
    },
    {
      image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400",
      title: "Informa 400 Ml Set 3 Pcs Gia...",
      finalPrice: 199200
    },
    {
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400",
      title: "Lego Christmas Ornament Building Set",
      finalPrice: 194400
    },
    {
      image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400",
      title: "Krisbow 5 Mtr Lampu Hias Led 2 Warna Cahaya",
      finalPrice: 49950
    },
    {
      image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=400",
      title: "Hampers Natal 2025 Serenya",
      finalPrice: 599000
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      title: "TaffSPORT Holder Botol Minuman Sepeda",
      finalPrice: 17900
    },
    {
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      title: "SEPATU NIKE AIR TECH CHALLENGE II",
      finalPrice: 2679000
    },
    {
      image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400",
      title: "Karet Elastis Tali Yoga Gym Fitness",
      finalPrice: 9000
    },
    {
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
      title: "True Wireless JBL Quantum TWS Air",
      finalPrice: 1680000
    },
    {
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      title: "Melissa Kick Off Hot Ad Sepatu Heels",
      finalPrice: 540000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Wireless Earbuds Bluetooth 5.0",
      finalPrice: 299000
    },
    {
      image: "https://images.unsplash.com/photo-1504148457555-43199f613986?w=400",
      title: "Smartwatch Sport GPS Tracking",
      finalPrice: 1299000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Power Bank 20000mAh Fast Charging",
      finalPrice: 349000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Mini Projector HD 1080P Portable",
      finalPrice: 1899000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Bluetooth Speaker Waterproof IPX7",
      finalPrice: 599000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "USB-C Cable 2M Fast Charging",
      finalPrice: 49000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Gaming Mouse RGB 16000 DPI",
      finalPrice: 299000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Mechanical Keyboard Blue Switch",
      finalPrice: 799000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Portable SSD 500GB USB 3.2",
      finalPrice: 1299000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Wireless Charger Pad 15W Qi",
      finalPrice: 199000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Wireless Charger Pad 15W Qi",
      finalPrice: 199000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Wireless Charger Pad 15W Qi",
      finalPrice: 199000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Wireless Charger Pad 15W Qi",
      finalPrice: 199000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Wireless Charger Pad 15W Qi",
      finalPrice: 199000
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Wireless Charger Pad 15W Qi",
      finalPrice: 199000
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {dummyProducts.map((product, index) => (
            <CardProduct
              key={index}
              image={product.image}
              title={product.title}
              finalPrice={product.finalPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { CardProduct };
export default CardProductDemo;