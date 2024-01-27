import Header from "./components/header";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto py-4 px-12">
      <Navbar />
      <div
        className="container mt-24 mx-auto
      dark:bg-[#0E141B] dark:text-gray-50 dark:text-opacity-90"
      >
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
