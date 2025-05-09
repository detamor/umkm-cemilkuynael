// src/App.js
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProductList from "./components/ProductList";
import ContactForm from "./components/Location";
import Testimonials from "./components/Testimonials";
import KeunggulanSection from "./components/KeunggulanSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProductList />
      <Testimonials />
      <KeunggulanSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
