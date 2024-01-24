import Header from "./components/header";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ThemeSwitch from "./components/theme-switch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto py-4 px-12">
      <Navbar />
      <div className="container mt-24 mx-auto">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ThemeSwitch />
      </div>
    </main>
  );
}
