import React, { useEffect, useState, useRef } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const productRef = useRef(null);

  // Categories for filter
  const categories = [
    { id: 'all', name: 'Semua Menu' },
    { id: 'batagor', name: 'Batagor' },
    { id: 'siomay', name: 'Siomay' },
    { id: 'paket', name: 'Paket Hemat' },
    { id: 'minuman', name: 'Minuman' }
  ];

  useEffect(() => {
    // Show animation when section is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const node = productRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Function to render star ratings
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }
    return stars;
  };

  // Skeleton loader for products
  const renderSkeletons = () => {
    return Array(6)
      .fill(0)
      .map((_, index) => (
        <div key={index} className="animate-pulse bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="w-full h-56 bg-gray-300 rounded-t-3xl"></div>
          <div className="p-6">
            <div className="h-7 bg-gray-300 rounded-full w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded-full w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded-full w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded-full w-4/6 mb-6"></div>
            <div className="flex items-center justify-between">
              <div className="h-6 bg-gray-300 rounded-full w-1/4"></div>
              <div className="h-8 bg-gray-300 rounded-full w-1/3"></div>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <section id="produk" ref={productRef} className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-yellow-50"></div>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-orange-200 rounded-full opacity-5 blur-2xl"></div>
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ff8c00 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                clipRule="evenodd"
              />
            </svg>
            Menu Favorit
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500">
              Produk Unggulan Cemil Kuy
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nikmati hidangan khas Bandung dengan cita rasa autentik yang telah diwariskan dari generasi ke generasi
          </p>
        </div>

        {/* Search and Filter */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Cari menu favorit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pl-12 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-orange-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {loading ? (
            renderSkeletons()
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <div className="bg-red-50 p-6 rounded-xl inline-flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-red-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-red-700 mb-2">Gagal Memuat Menu</h3>
                <p className="text-red-600 mb-4">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Coba Lagi
                </button>
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="bg-orange-50 p-6 rounded-xl inline-flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-orange-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-orange-700 mb-2">Menu Tidak Ditemukan</h3>
                <p className="text-orange-600 mb-4">Tidak ada menu yang sesuai dengan kriteria pencarian Anda</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Reset Pencarian
                </button>
              </div>
            </div>
          ) : (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Container with Hover Effect */}
                <div className="relative overflow-hidden">
                  {/* Badge Best Seller */}
                  {product.bestSeller && (
                    <div className="absolute top-0 left-0 w-full z-10">
                      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-1 text-sm font-bold shadow-lg transform -rotate-45 translate-x-[-30%] translate-y-[60%] origin-top-left">
                        Best Seller
                      </div>
                    </div>
                  )}

                  {/* Discount Tag */}
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg">
                      -{product.discount}%
                    </div>
                  )}

                  {/* Image with Zoom Effect */}
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Quick View Button */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <button className="bg-white/90 backdrop-blur-sm text-orange-600 px-4 py-2 rounded-full text-sm font-medium transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-orange-600 px-3 py-1 text-xs font-medium rounded-full">
                    {product.category === 'batagor'
                      ? 'Batagor'
                      : product.category === 'siomay'
                      ? 'Siomay'
                      : product.category === 'paket'
                      ? 'Paket Hemat'
                      : product.category === 'minuman'
                      ? 'Minuman'
                      : 'Menu Spesial'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    {/* If product has a rating */}
                    {product.rating && (
                      <div className="flex items-center">
                        <div className="flex mr-1">{renderRating(product.rating)}</div>
                        <span className="text-xs text-gray-500">({product.reviewCount || 0})</span>
                      </div>
                    )}
                  </div>
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  {/* Pricing and Action */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      {/* If product has a discount, show original price */}
                      {product.discount ? (
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs line-through">
                            Rp {Math.round(product.price * (100 / (100 - product.discount))).toLocaleString()}
                          </span>
                          <span className="text-xl font-bold text-orange-600">
                            Rp {product.price.toLocaleString()}
                          </span>
                        </div>
                      ) : (
                        <span className="text-xl font-bold text-orange-600">
                          Rp {product.price.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {/* Order Button */}
                    <div className="flex space-x-2">
                      {/* Wishlist Button */}
                      <button className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {/* Order Button */}
                      <a
                        href={`https://wa.me/6281234567890?text=Halo, saya ingin memesan ${product.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm px-4 py-2.5 rounded-lg font-medium shadow transition-all duration-300 hover:shadow-lg flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        Pesan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
