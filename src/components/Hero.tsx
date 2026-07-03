import { useCopy } from '../LangProvider';
import { asset, INTRO_CLIP } from '../i18n';
import AppStoreButton from './AppStoreButton';
import { AutoVideo } from './Media';

export default function Hero() {
  const { tagline } = useCopy();
  return (
    <header className="hero">
      <div className="hero-lead">
        <div className="mark">
          <img src={asset('assets/icon-rounded.png')} alt="pokoPet" />
        </div>
        <h1 className="logo">
          poko<span>Pet</span>
        </h1>
        <p className="tagline">{tagline}</p>

        <div className="cta">
          <AppStoreButton />
        </div>
      </div>

      {/* All three pets together — the hero showcase clip */}
      <div className="hero-clip">
        <AutoVideo src={INTRO_CLIP.video} poster={INTRO_CLIP.poster} alt="pokoPet" className="clip-vid" />
      </div>
    </header>
  );
}
