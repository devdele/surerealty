import "./App.css";
import Home from "@/components/home";
import Whoarewe from "@/components/whoarewe";
import Mission from "@/components/mission";
import Checkout from "@/components/checkout";
import Benefits from "@/components/benefits";
import TestimonialsSection from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Browse from "@/components/browse";
import Footer from "@/components/footer";
function App() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Home />
      <Whoarewe />
      <Mission />
      <Checkout />
      <Benefits />
      <TestimonialsSection />
      <FAQ />
      <Contact />
      <Browse />
      <Footer />
    </div>
  );
}

export default App;
