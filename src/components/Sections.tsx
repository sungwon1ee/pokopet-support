import type { ReactNode } from 'react';
import { useCopy } from '../LangProvider';
import { asset, EMAIL } from '../i18n';
import Rich from './Rich';
import Paw from './Paw';

function Card({ children }: { children: ReactNode }) {
  return <section className="card">{children}</section>;
}

export function Intro() {
  const { intro } = useCopy();
  return (
    <Card>
      <h2>
        {intro.title} <Paw className="paw-accent" />
      </h2>
      <p className="lead">{intro.lead}</p>
      <div className="pets">
        {intro.pets.map((pet) => (
          <div className="pet" key={pet.name}>
            <img src={asset(pet.img)} alt={pet.name} />
            <span className="name">{pet.name}</span>
            <span className="desc">{pet.desc}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function Features() {
  const { features } = useCopy();
  return (
    <Card>
      <h2>{features.title}</h2>
      <div className="features">
        {features.items.map((f) => (
          <div className="feature" key={f.title}>
            <div className="ico">{f.icon}</div>
            <div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function Support() {
  const { support } = useCopy();
  return (
    <Card>
      <h2>{support.title}</h2>
      <p>{support.intro}</p>
      <a className="email" href={`mailto:${EMAIL}?subject=pokoPet%20Support`}>
        ✉️ {EMAIL}
      </a>
      <h3>{support.faqTitle}</h3>
      <ul>
        {support.faqs.map((f, i) => (
          <li key={i}>
            <strong>{f.q}</strong> {f.a}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function Privacy() {
  const { privacy } = useCopy();
  return (
    <Card>
      <h2>{privacy.title}</h2>
      <p className="updated">{privacy.updated}</p>
      <p>{privacy.intro}</p>
      {privacy.blocks.map((block, i) => (
        <div key={i}>
          <h3>{block.heading}</h3>
          {block.body.map((para, j) => (
            <p key={j}>
              <Rich text={para} />
            </p>
          ))}
          {block.list && (
            <ul>
              {block.list.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </Card>
  );
}

export function Footer() {
  const { footer } = useCopy();
  return (
    <footer>
      <Paw /> {footer}
      <br />© 2026 Sungwon Lee. All rights reserved.
    </footer>
  );
}
