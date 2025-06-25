import GlobeBackground from './components/GlobeBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SlideInSection from './components/SlideInSection';
import SlideInSection2 from './components/SlideInSection2';

function App() {
  return (
    <div className="relative text-white font-sans z-0">
      <GlobeBackground />
      <main className="relative z-10 space-y-20 px-4">
        <SlideInSection><Hero /></SlideInSection>
        <SlideInSection2 delay={0.1}><About /></SlideInSection2>

        {/* ✅ Experience + Skills side by side */}
        <SlideInSection delay={0.2}>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1"><Experience /></div>
            <div className="flex-1"><Skills /></div>
          </div>
        </SlideInSection>

        {/* ✅ Projects and Contact */}
        <SlideInSection delay={0.4}><Projects /></SlideInSection>
        <SlideInSection2 delay={0.5}><Contact /></SlideInSection2>
      </main>
    </div>
  );
}

export default App;
