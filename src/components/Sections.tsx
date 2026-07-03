import type { ReactNode } from 'react';
import { useCopy } from '../LangProvider';
import { asset, EMAIL, USAGE_CLIPS, INTRO_CLIP } from '../i18n';
import { AutoVideo } from './Media';
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
          <div className="pet" key={pet.img}>
            <img className="pet-img" src={asset(pet.img)} alt={pet.name} />
            <div className="pet-txt">
              <span className="name">{pet.name}</span>
              <span className="desc">{pet.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function Showcase() {
  const { showcase } = useCopy();
  return (
    <Card>
      <h2>{showcase.title}</h2>
      <p className="lead">{showcase.sub}</p>
      <div className="showcase-clip">
        <AutoVideo
          src={INTRO_CLIP.video}
          poster={INTRO_CLIP.poster}
          alt={showcase.title}
          className="clip-vid"
        />
      </div>
    </Card>
  );
}

export function Usage() {
  const { usage } = useCopy();
  return (
    <Card>
      <h2>{usage.title}</h2>
      <p className="lead">{usage.sub}</p>
      <div className="steps">
        {usage.steps.map((step, i) => {
          const clip = USAGE_CLIPS[i];
          return (
            <div className="step" key={clip.video}>
              <div className="clip">
                <AutoVideo src={clip.video} poster={clip.poster} alt={step.title} className="clip-vid" />
              </div>
              <div className="step-txt">
                <div className="step-head">
                  <span className="step-no">{i + 1}</span>
                  <h4>{step.title}</h4>
                </div>
                <p>{step.desc}</p>
              </div>
            </div>
          );
        })}
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
      <div className="faqs">
        {support.faqs.map((f, i) => (
          <div className="faq" key={i}>
            <p className="q">{f.q}</p>
            <p className="a">{f.a}</p>
          </div>
        ))}
      </div>
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
