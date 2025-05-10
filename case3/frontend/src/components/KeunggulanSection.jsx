export default function KeunggulanSection() {
    const items = [
      {
        title: "Resep Legendaris Sejak 1985",
        desc: "Menu Dari Cemil Kuy dibuat dengan resep turun-temurun asli Bandung, menjaga cita rasa khas yang sudah melegenda.",
        icon: (
          <img
            src="https://img.icons8.com/fluency/48/trophy.png"
            alt="Trophy"
            className="w-12 h-12"
          />
        )
      },
      {
        title: "Bahan Pilihan & Bumbu Kacang Khas",
        desc: "Menggunakan ikan tenggiri segar, tahu berkualitas, kulit pangsit renyah, dan bumbu kacang gurih yang menjadi ciri khas Cemil Kuy.",
        icon: (
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/010/820/non_2x/peanut-icon-on-transparent-background-free-png.png"
            alt="Peanut"
            className="w-12 h-12"
          />
        )
      },
      {
        title: "Favorit Selebritis & Oleh-Oleh Bandung",
        desc: "Sudah jadi langganan artis, wisatawan, dan warga lokal. Tersedia dalam kemasan vacuum, cocok jadi oleh-oleh khas Bandung.",
        icon: (
          <img
            src="https://img.icons8.com/fluency/48/gift.png"
            alt="Gift"
            className="w-12 h-12"
          />
        )
      },
      {
        title: "Pelayanan Ramah & Pengiriman Cepat",
        desc: "Tim Cemil Kuy siap melayani dengan senyum, pesanan cepat sampai ke seluruh Bandung dan luar kota.",
        icon: (
          <img
            src="https://img.icons8.com/fluency/48/delivery-scooter.png"
            alt="Delivery"
            className="w-12 h-12"
          />
        )
      }
    ];
    return (
      <section className="bg-gradient-to-b from-orange-50 via-white to-yellow-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-orange-700 mb-12 drop-shadow">
            Keunggulan Cemil Kuy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center border-t-4 border-orange-400"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-orange-700 text-center">{item.title}</h3>
                <p className="text-gray-700 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  