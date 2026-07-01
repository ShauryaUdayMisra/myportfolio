import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ventures from "@/components/Ventures";
import Leadership from "@/components/Leadership";
import Writing from "@/components/Writing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ventures />
        <Leadership />
        <Writing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
