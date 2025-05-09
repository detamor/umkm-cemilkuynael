import React from 'react';

export default function Location() {
  return (
    <section id="lokasi" className="relative py-24 overflow-hidden">
      {/* Background dan dekorasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-orange-50"></div>
      <div className="absolute w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/3 right-0 w-60 h-60 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s'}}></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}}></div>
        {/* Floating food icons */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-xl animate-float" style={{animationDuration: '6s'}}>
          <span className="text-4xl">🍜</span>
        </div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-xl animate-float" style={{animationDuration: '8s', animationDelay: '1s'}}>
          <span className="text-3xl">🥟</span>
        </div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-xl animate-float" style={{animationDuration: '7s', animationDelay: '2s'}}>
          <span className="text-2xl">🌶️</span>
        </div>
      </div>
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ff8c00 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

      <div className="container relative mx-auto px-4 z-10">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            <span className="mr-1.5">📍</span> Lokasi Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
            Temukan Cemil Kuy
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto my-5 rounded-full"></div>
          <p className="text-gray-600 text-lg">Kunjungi outlet kami atau cek lokasi cabang terdekat di bawah ini.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Kartu info lokasi */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-24 w-full relative overflow-hidden"></div>
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Alamat Utama</h3>
                <div className="mb-6">
                  <p className="font-semibold text-gray-700">Cemil Kuy - Cabang Utama</p>
                  <p className="text-gray-600">Jl. ABC No.123, Bandung, Jawa Barat 40123</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-orange-50 transition">
                    <h4 className="font-medium mb-1 text-gray-900">Cabang Cimahi</h4>
                    <p className="text-sm text-gray-600">Jl. Jendral Sudirman No. 45, Cimahi</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-orange-50 transition">
                    <h4 className="font-medium mb-1 text-gray-900">Cabang Buah Batu</h4>
                    <p className="text-sm text-gray-600">Jl. Buah Batu No. 78, Bandung</p>
                  </div>
                </div>
                <a
                  href="https://goo.gl/maps/yourlocation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-200/50 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                  </svg>
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
          {/* Peta Google Maps */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative rounded-xl overflow-hidden border-8 border-white shadow-xl" style={{ height: '400px' }}>
                <iframe
                  title="Lokasi Cemil Kuy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9346040000003!2d107.619122!3d-6.914744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d4c5e6c6b5%3A0x123456789abcdef!2sJl.%20ABC%20No.123%2C%20Bandung!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-5 right-5 bg-white rounded-full p-2 shadow-lg">
                  <span className="flex h-8 w-8 items-center justify-center bg-orange-500 rounded-full text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
