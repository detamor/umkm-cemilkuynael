import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi scroll ke hero
  const scrollToHero = () => {
    const el = document.getElementById("hero");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Tutup menu mobile jika terbuka
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 shadow-lg ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400"
        }`}
      ></div>
      <div className="container relative mx-auto flex justify-between items-center px-4 z-10">
        {/* Brand logo and name */}
        <div className="flex items-center space-x-3 group py-2">
          <div
            className={`p-2 rounded-full transition-all duration-300 ${
              scrolled ? "bg-orange-100" : "bg-white/20"
            }`}
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300 inline-block">
              🥟
            </span>
          </div>
          {/* Area klik brand & subtext */}
          <button
            onClick={scrollToHero}
            className="text-left focus:outline-none"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            aria-label="Scroll to Hero"
          >
            <span
              className={`text-2xl font-bold transition-all duration-300 ${
                scrolled ? "text-orange-600" : "text-white"
              }`}
            >
              Cemil Kuy
            </span>
            <span
              className={`text-xs ${
                scrolled ? "text-orange-400" : "text-white/80"
              }`}
            >
              Legendaris Sejak 1985
            </span>
          </button>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-4">
          <a
            href="#about"
            className={`px-3 py-2 font-semibold text-sm rounded-full transition-all duration-300 ${
              scrolled
                ? "text-orange-600 hover:bg-orange-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            Tentang
          </a>
          <a
            href="#produk"
            className={`px-3 py-2 font-semibold text-sm rounded-full transition-all duration-300 ${
              scrolled
                ? "text-orange-600 hover:bg-orange-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            Produk
          </a>
          <a
            href="#testimoni"
            className={`px-3 py-2 font-semibold text-sm rounded-full transition-all duration-300 ${
              scrolled
                ? "text-orange-600 hover:bg-orange-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            Testimoni
          </a>
          <a
            href="#lokasi"
            className={`px-3 py-2 font-semibold text-sm rounded-full transition-all duration-300 ${
              scrolled
                ? "text-orange-600 hover:bg-orange-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            Lokasi
          </a>
          {/* CTA */}
          <a
            href="#order"
            className={`ml-2 px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 
                       ${
                         scrolled
                           ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md hover:shadow-lg hover:shadow-orange-200/50"
                           : "bg-white text-orange-600 hover:bg-white/90"
                       } hover:scale-105`}
          >
            Pesan Sekarang
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute h-0.5 w-6 ${
                scrolled ? "bg-orange-600" : "bg-white"
              } transform transition-all duration-300 ${
                open ? "rotate-45 top-2" : "top-0"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 ${
                scrolled ? "bg-orange-600" : "bg-white"
              } top-2 transition-all duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 ${
                scrolled ? "bg-orange-600" : "bg-white"
              } transform transition-all duration-300 ${
                open ? "-rotate-45 top-2" : "top-4"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden relative z-20">
          <div
            className={`px-4 py-3 ${
              scrolled ? "bg-white shadow-inner" : "bg-orange-500"
            }`}
          >
            <a
              href="#about"
              className={`block py-2 px-3 rounded-lg font-semibold ${
                scrolled
                  ? "text-orange-600 hover:bg-orange-50"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setOpen(false)}
            >
              Tentang
            </a>
            <a
              href="#produk"
              className={`block py-2 px-3 rounded-lg font-semibold ${
                scrolled
                  ? "text-orange-600 hover:bg-orange-50"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setOpen(false)}
            >
              Produk
            </a>
            <a
              href="#testimoni"
              className={`block py-2 px-3 rounded-lg font-semibold ${
                scrolled
                  ? "text-orange-600 hover:bg-orange-50"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setOpen(false)}
            >
              Testimoni
            </a>
            <a
              href="#lokasi"
              className={`block py-2 px-3 rounded-lg font-semibold ${
                scrolled
                  ? "text-orange-600 hover:bg-orange-50"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setOpen(false)}
            >
              Lokasi
            </a>
            {/* CTA for mobile */}
            <a
              href="#order"
              className={`block mt-3 py-2 px-3 rounded-lg font-bold text-center ${
                scrolled
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                  : "bg-white text-orange-600"
              }`}
              onClick={() => setOpen(false)}
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
