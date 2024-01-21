import Header from "./components/header";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import ContactMe from "./components/contact-me";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto py-4 px-12">
      <Navbar />

      <div className="container mt-24 mx-auto">
        <Header />
        <About />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
