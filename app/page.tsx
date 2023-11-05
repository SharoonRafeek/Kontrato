import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </main>
  );
}
