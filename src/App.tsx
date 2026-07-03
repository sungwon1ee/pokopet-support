import { useLang } from './LangProvider';
import LangToggle from './components/LangToggle';
import Hero from './components/Hero';
import { Intro, Showcase, Usage, Support, Privacy, Footer } from './components/Sections';

export default function App() {
  const { lang } = useLang();
  return (
    <>
      <LangToggle />
      {/* keyed by lang so the whole page re-runs its fade-in on each switch */}
      <div className="wrap" key={lang}>
        <Hero />
        <Intro />
        <Showcase />
        <Usage />
        <Support />
        <Privacy />
        <Footer />
      </div>
    </>
  );
}
