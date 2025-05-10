import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-orange-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-100/40 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-orange-400 rounded-xl opacity-10 rotate-12"></div>
      <div className="absolute top-40 left-10 w-10 h-10 bg-yellow-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-32 w-16 h-16 bg-orange-300 rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-32 w-12 h-12 bg-orange-500 rounded-lg opacity-10 rotate-45"></div>
      
      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #ff8c00 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Modern section heading with decorative element */}
        <div className="mb-16 text-center relative">
          <h2 className="inline-block text-4xl md:text-5xl font-black relative z-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500">Cemil Kuy</span> 
            <span className="text-gray-800"> Story</span>
          </h2>
          <div className="absolute w-24 h-24 bg-orange-200 rounded-full blur-xl opacity-70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Menelusuri perjalanan kuliner legendaris sejak 1985</p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          {/* Left column with layered images */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 transition-transform duration-500 hover:rotate-0 group">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80"
                alt="Cemil Kuy Makanan Lezat"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent opacity-60"></div>
              
              {/* Badge overlay */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-orange-600 font-bold">Sejak 1985</span>
              </div>
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-white font-bold text-xl mb-2 drop-shadow-md">Kenikmatan Legendaris</h3>
                <p className="text-white/90 text-sm drop-shadow-md">Cita rasa autentik yang diwariskan dari generasi ke generasi.</p>
              </div>
            </div>
            
            {/* Decorative smaller image */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 z-20 rounded-2xl shadow-xl overflow-hidden transform -rotate-6 transition-transform duration-500 hover:rotate-0 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=200&q=80" 
                alt="Cemil Kuy Proses"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 md:-right-5 w-24 h-24 z-0 rounded-full border-4 border-dashed border-orange-300 opacity-40 transform rotate-12"></div>
            <div className="absolute -bottom-10 right-20 w-32 h-4 rounded-full bg-orange-200 blur-xl opacity-70"></div>
          </div>
          
          {/* Right column with content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            {/* Timeline element */}
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">1985</span>
              </div>
              <div className="h-0.5 flex-grow ml-3 bg-gradient-to-r from-orange-500 to-orange-100"></div>
              <div className="h-6 w-6 rounded-full bg-orange-300 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xs">2025</span>
              </div>
            </div>
            
            {/* Main content */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-orange-100 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 inline-flex items-center">
                <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </span>
                Perjalanan Rasa
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <span className="font-bold text-orange-600 text-lg">Cemil Kuy</span> lahir dari dapur sederhana di Bandung tahun <span className="font-semibold">1985</span>. Berawal dari eksperimen kuliner keluarga, kami menciptakan resep <span className="font-semibold italic">batagor (baso tahu goreng)</span> yang unik dengan bumbu kacang khas yang menjadi favorit warga lokal dan wisatawan.
              </p>
              
              <div className="bg-orange-50 rounded-xl p-5 mb-6 border-l-4 border-orange-400">
                <p className="text-gray-700 italic">
                  "Kami berkomitmen menjaga kualitas dan cita rasa asli dengan menggunakan bahan-bahan segar pilihan dan resep turun-temurun yang tidak berubah sejak 40 tahun lalu."
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="#story" className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-orange-200/50 transition-all duration-300 transform hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span>Lihat Video Cerita</span>
                </a>
                
                <a href="#gallery" className="inline-flex items-center justify-center bg-white text-orange-600 border-2 border-orange-200 px-6 py-3 rounded-xl shadow-md hover:bg-orange-50 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <span>Galeri Foto</span>
                </a>
              </div>
            </div>
            
            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md border border-orange-50 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-orange-600 font-bold text-2xl">40+</p>
                <p className="text-gray-600 text-sm">Tahun Berdiri</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md border border-orange-50 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-orange-600 font-bold text-2xl">2</p>
                <p className="text-gray-600 text-sm">Cabang</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md border border-orange-50 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-orange-600 font-bold text-2xl">5k</p>
                <p className="text-gray-600 text-sm">Pelanggan</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-12 opacity-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  fill="#FF8C00" fillOpacity=".1"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                  fill="#FF8C00" fillOpacity=".05"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}