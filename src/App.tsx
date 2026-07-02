import Hero from './components/Hero';
import { Intro, Features, Support, Privacy, Footer } from './components/Sections';

export default function App() {
  return (
    <div className="wrap">
      <Hero />
      <Intro />
      <Features />
      <Support />
      <Privacy />
      <Footer />
    </div>
  );
}
