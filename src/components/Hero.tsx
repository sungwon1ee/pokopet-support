import { useCopy } from '../LangProvider';
import { asset } from '../i18n';
import AppStoreButton from './AppStoreButton';

export default function Hero() {
  const { tagline } = useCopy();
  return (
    <header>
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
    </header>
  );
}
