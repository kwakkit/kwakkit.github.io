import Reveal from './Reveal.jsx';

const SKILLS = ['Flutter', 'Dart', 'Firebase', 'Product Design'];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal>
          <p className="section-eyebrow">ABOUT</p>
          <h2>자기소개</h2>
        </Reveal>

        <Reveal className="about-card">
          <div className="avatar" aria-hidden="true">
            곽
          </div>
          <div className="about-body">
            <h3>
              곽OO <span className="role">· Founder / Developer</span>
            </h3>
            <p className="placeholder-note">플레이스홀더 — 실제 소개 문구로 교체해 주세요.</p>
            <p>
              일상의 불편함을 발견하면 일단 만들어보는 개발자입니다. 출퇴근길 지하철에서, 하루를
              계획하는 아침에 겪는 작은 문제들을 가볍고 실용적인 앱으로 풀어내고 있습니다.
            </p>
            <ul className="tag-list">
              {SKILLS.map((skill) => (
                <li className="tag" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
