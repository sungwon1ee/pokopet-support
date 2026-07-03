import LangToggle from './components/LangToggle';
import Hero from './components/Hero';
import { Intro, Usage, Support, Privacy, Footer } from './components/Sections';

export default function App() {
  return (
    <>
      <LangToggle />
      {/* No key on lang: switching language should only swap text, not remount
          the page (which would reload every video). */}
      <div className="wrap">
        <Hero />
        <Intro />
        <Usage />
        <Support />
        <Privacy />
        <Footer />
      </div>
    </>
  );
}
