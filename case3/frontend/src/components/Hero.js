export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-orange-100 via-white to-orange-50 py-12 md:py-20 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-orange-300 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Text */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0 md:pr-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-700 drop-shadow mb-4">
            Selamat Datang di Cemil Kuy!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium">
            UMKM kuliner legendaris Bandung sejak 1985. Nikmati{" "}
            <span className="font-semibold text-orange-600">Menu</span> lezat favorit warga lokal & wisatawan!
          </p>
          <a
            href="#produk"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
          >
            Lihat Menu
          </a>
        </div>
        {/* Gambar Hero (produk atau toko) */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80"
              alt="Cemil Kuy"
              className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-8 border-white"
            />
            {/* Efek bayangan di bawah gambar */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-60 h-8 bg-orange-300 rounded-full blur-2xl opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
