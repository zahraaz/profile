import Header from "./components/header";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto py-4 px-12">
      <Navbar />

      <div className="container mt-24 mx-auto">
        <Header />
      </div>
    </main>
  );
}
