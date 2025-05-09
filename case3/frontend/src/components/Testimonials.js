import React, { useState, useEffect } from 'react';

export default function ModernTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Testimonials data dengan foto dan rating
  const testimonials = [
    { 
      name: "Budi Santoso",
      role: "Food Blogger",
      avatar: "https://i.pinimg.com/736x/0f/68/94/0f6894e539589a50809e45833c8bb6c4.jpg",
      message: "Batagor Cemil Kuy adalah yang terbaik di Bandung! Tekstur yang sempurna, saus kacang yang lezat, dan layanan yang cepat. Akan kembali lagi!",
      rating: 5,
      verified: true,
      date: "20 April 2025"
    },
    { 
      name: "Sinta Dewi",
      role: "Ibu Rumah Tangga",
      avatar: "https://i.pinimg.com/736x/0f/68/94/0f6894e539589a50809e45833c8bb6c4.jpg",
      message: "Batagor terbaik yang pernah saya coba. Rasanya otentik Bandung sekali. Anak-anak saya selalu minta dibawakan setiap kali pulang kerja.",
      rating: 5,
      verified: true,
      date: "15 Maret 2025"
    },
    { 
      name: "Daniel",
      role: "Pengusaha",
      avatar: "https://i.pinimg.com/736x/0f/68/94/0f6894e539589a50809e45833c8bb6c4.jpg",
      message: "Saya pesan untuk acara kantor dan semua kolega saya suka. Porsinya pas dan harganya sangat terjangkau. Terima kasih Cemil Kuy!",
      rating: 4,
      verified: true,
      date: "2 Mei 2025"
    },
    { 
      name: "Diana Purnama",
      role: "Mahasiswi",
      avatar: "https://i.pinimg.com/736x/0f/68/94/0f6894e539589a50809e45833c8bb6c4.jpg",
      message: "Porsinya pas dan harganya terjangkau untuk kantong mahasiswa. Paket lengkapnya bener-bener bikin kenyang. Recommended banget deh!",
      rating: 5,
      verified: true,
      date: "10 Februari 2025"
    },
    { 
      name: "Andi Gunawan",
      role: "Traveler",
      avatar: "https://i.pinimg.com/736x/0f/68/94/0f6894e539589a50809e45833c8bb6c4.jpg",
      message: "Pertama kali ke Bandung dan langsung jatuh cinta sama batagornya Cemil Kuy. Bumbunya meresap banget sampai ke dalam, dan siomaynya juicy!",
      rating: 5,
      verified: true,
      date: "25 Maret 2025"
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Intersection Observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('testimoni');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Generate star rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className="relative">
        {/* Background star (gray) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-gray-200" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        
        {/* Foreground star (colored) */}
        {index < rating && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-orange-400 absolute top-0 left-0" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
      </span>
    ));
  };

  return (
    <section id="testimoni" className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Animated accent circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-orange-200 rounded-full opacity-5 blur-2xl"></div>
        
        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{backgroundImage: 'radial-gradient(circle, #ff8c00 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      </div>

      <div className="container relative mx-auto px-4 z-10 max-w-6xl">
        {/* Section heading with animation */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center justify-center px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Testimoni Pelanggan
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500">Apa Kata Mereka?</span>
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Testimoni dari pelanggan setia Cemil Kuy yang telah merasakan kelezatan produk kami selama bertahun-tahun
          </p>
        </div>
        
        {/* Featured Testimonial - Hero Style */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '200ms' }}>
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 to-yellow-100/40 backdrop-blur-sm"></div>
            
            {/* Content */}
            <div className="relative p-8 md:p-12">
              {/* Quote icon */}
              <div className="absolute top-6 right-8 text-orange-200/70 transform -rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="opacity-30">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                </svg>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {testimonials[activeIndex].verified && (
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1.5 shadow-md" title="Verified Customer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center mb-4">
                    {renderStars(testimonials[activeIndex].rating)}
                    <span className="ml-2 text-sm text-gray-500">{testimonials[activeIndex].date}</span>
                  </div>
                  
                  <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed mb-4">
                    "{testimonials[activeIndex].message}"
                  </p>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].name}</h3>
                    <p className="text-orange-500">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-orange-200 hover:bg-orange-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Grid of Other Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-orange-100/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:border-orange-200/70 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Quote */}
              <p className="text-gray-600 mb-6">"{testimonial.message.length > 120 ? testimonial.message.substring(0, 120) + '...' : testimonial.message}"</p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                {testimonial.verified && (
                  <div className="ml-auto bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial Metrics */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center transform transition-transform hover:scale-105 duration-300">
            <div className="text-4xl font-bold mb-1">4.9</div>
            <div className="flex justify-center mb-2">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-sm opacity-80">Rating di GoFood</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center transform transition-transform hover:scale-105 duration-300">
            <div className="text-4xl font-bold mb-1">5K+</div>
            <div className="text-sm opacity-80">Pelanggan Puas</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center transform transition-transform hover:scale-105 duration-300">
            <div className="text-4xl font-bold mb-1">30+</div>
            <div className="text-sm opacity-80">Tahun Pengalaman</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center transform transition-transform hover:scale-105 duration-300">
            <div className="text-4xl font-bold mb-1">2</div>
            <div className="text-sm opacity-80">Cabang di Bandung</div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className={`mt-20 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Sudah mencoba Menu Cemil Kuy?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bagikan pengalaman kuliner Anda dan dapatkan kesempatan untuk memenangkan voucher diskon di pembelian berikutnya!
          </p>
          
          <div className="inline-flex items-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Kirim Testimoni
            </button>
            
            <a href="#review-platforms" className="ml-4 text-orange-600 hover:text-orange-700 font-medium text-lg transition-colors duration-300 flex items-center">
              Atau review kami online
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}