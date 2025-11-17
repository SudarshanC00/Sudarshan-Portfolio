import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <WorkExperience />
      <Blogs />
      <Contact />
      <Chatbot />
      <ScrollToTop />
    </main>
  );
}
