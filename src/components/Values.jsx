import Reveal from './Reveal.jsx';

const VALUES = [
  {
    icon: '🎯',
    title: '실용성 최우선',
    body: '화려한 기능보다, 실제로 매일 쓰게 되는 기능에 집중합니다.',
  },
  {
    icon: '⚡',
    title: '빠르게 만들고 검증',
    body: '작은 단위로 빠르게 만들고, 사용자 반응을 보며 다듬어갑니다.',
  },
  {
    icon: '🧭',
    title: '일상에서 시작',
    body: '실제로 겪은 불편함에서 아이디어를 시작해, 필요한 만큼만 만듭니다.',
  },
];

export default function Values() {
  return (
    <section className="section section-alt" id="values">
      <div className="container">
        <Reveal className="section-head">
          <p className="section-eyebrow">HOW WE WORK</p>
          <h2>일하는 방식</h2>
        </Reveal>

        <div className="value-grid">
          {VALUES.map((value) => (
            <Reveal as="article" className="value-card" key={value.title}>
              <span className="value-icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
