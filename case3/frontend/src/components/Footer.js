export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 text-white pt-12 pb-6 mt-16 shadow-inner">
        <div className="container mx-auto px-4">
          {/* Top Footer Section with 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {/* Brand & CTA */}
            <div>
              <div className="flex items-center mb-3">
              <span className="text-3xl">🥟</span>
                <span className="font-extrabold text-2xl tracking-wide drop-shadow">Cemil Kuy</span>
              </div>
              <div className="mb-4 text-sm">UMKM kuliner legendaris sejak 1985</div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow transition"
              >
                <img src="https://img.icons8.com/color/24/whatsapp.png" alt="WhatsApp" className="mr-2 h-5 w-5" />
                Pesan Sekarang
              </a>
            </div>
  
            {/* Menu Categories */}
            <div>
              <h3 className="font-bold text-lg border-b border-orange-300 pb-2 mb-3">Menu Kami</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#batagor" className="hover:text-yellow-200 transition-colors flex items-center">
                    <span className="mr-2">•</span>Batagor Original
                  </a>
                </li>
                <li>
                  <a href="#siomay" className="hover:text-yellow-200 transition-colors flex items-center">
                    <span className="mr-2">•</span>Siomay Bandung
                  </a>
                </li>
                <li>
                  <a href="#paket" className="hover:text-yellow-200 transition-colors flex items-center">
                    <span className="mr-2">•</span>Paket Hemat
                  </a>
                </li>
                <li>
                  <a href="#minuman" className="hover:text-yellow-200 transition-colors flex items-center">
                    <span className="mr-2">•</span>Minuman Segar
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-yellow-200 transition-colors flex items-center font-semibold">
                    <span className="mr-2">→</span>Lihat Semua Menu
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Information Links */}
            <div>
              <h3 className="font-bold text-lg border-b border-orange-300 pb-2 mb-3">Informasi</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#tentang" className="hover:text-yellow-200 transition-colors flex items-center">
                    <span className="mr-2">•</span>Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#lokasi" className="hover:text-yellow-200 transition-colors flex items-center">
                    <span className="mr-2">•</span>Lokasi & Cabang
                  </a>
                </li>
                <li>
                  <a href="#testimoni" className="hover:text-yellow-200 transition-colors flex items-center">
                    <span className="mr-2">•</span>Testimoni Pelanggan
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-yellow-200 transition-colors flex items-center">
                    <span className="mr-2">•</span>FAQ
                  </a>
                </li>
                <li>
                  <a href="#karir" className="hover:text-yellow-200 transition-colors flex items-center">
                    <span className="mr-2">•</span>Karir
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact & Social */}
            <div>
              <h3 className="font-bold text-lg border-b border-orange-300 pb-2 mb-3">Hubungi Kami</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-200 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="ml-2">Jl. ABC No.123, Bandung, Jawa Barat 40123</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="ml-2">+62 821 6205 4193</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="cemilkuy@gmail.com" className="ml-2 hover:underline">cemilkuy@gmail.com</a>
                </li>
                <li>
                  <div className="flex space-x-3 mt-3">
                    <a href="https://www.instagram.com/nael_detamor/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                      <img src="https://img.icons8.com/color/24/instagram-new.png" alt="Instagram" className="h-5 w-5" />
                    </a>
                    <a href="https://www.facebook.com/naeldetamor" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                      <img src="https://img.icons8.com/color/24/facebook-new.png" alt="Facebook" className="h-5 w-5" />
                    </a>
                    <a href="https://www.tiktok.com/naeldetamor" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                      <img src="https://img.icons8.com/color/24/tiktok--v1.png" alt="TikTok" className="h-5 w-5" />
                    </a>
                    <a href="https://goo.gl/maps/123" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                      <img src="https://img.icons8.com/color/24/google-maps.png" alt="Google Maps" className="h-5 w-5" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Footer with Opening Hours and Quick Links */}
          <div className="border-t border-orange-300 pt-6 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="font-semibold text-sm">Jam Buka:</span> 
                <span className="text-sm ml-2">Setiap Senin - Jumat 09.00 - 21.00 WIB</span>
                <span className="text-sm ml-2">Minggu 10.00 - 22.00 WIB</span>
              </div>
              
              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <a href="#beranda" className="hover:text-yellow-200 transition-colors">Beranda</a>
                <a href="#pemesanan" className="hover:text-yellow-200 transition-colors">Cara Pemesanan</a>
                <a href="#pembayaran" className="hover:text-yellow-200 transition-colors">Metode Pembayaran</a>
                <a href="#pengiriman" className="hover:text-yellow-200 transition-colors">Pengiriman</a>
                <a href="#kebijakan" className="hover:text-yellow-200 transition-colors">Kebijakan Privasi</a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="text-center text-xs text-orange-100/80 pt-4">
            © 2025 Cemil Kuy Bandung. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }