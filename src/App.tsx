import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Schools from './components/Schools';
import Corporate from './components/Corporate';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Schools />
        <Corporate />
      </main>
      <Footer />
    </div>
  );
}
