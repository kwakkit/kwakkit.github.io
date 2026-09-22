import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="container hero-inner">
        <Reveal className="hero-copy">
          <p className="eyebrow">KWAKKIT STUDIO</p>
          <h1>
            생활의 자투리 불편을 없애는
            <br />
            작은 앱을 만듭니다.
          </h1>
          <p className="hero-sub">
            곽킷은 일상에서 마주치는 자잘한 불편함을 발견하고, 가볍고 실용적인 앱으로 풀어내는
            개발 스튜디오입니다.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              프로젝트 둘러보기
            </a>
            <a className="btn btn-outline" href="#contact">
              연락하기
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual" aria-hidden="true">
          <div className="float-card card-coral">
            <span className="fc-icon">⏱️</span>
            <span className="fc-title">갓생 대시보드</span>
            <span className="fc-sub">집중 · 루틴 · 통계</span>
          </div>
          <div className="float-card card-violet">
            <span className="fc-icon">🚇</span>
            <span className="fc-title">하차각</span>
            <span className="fc-sub">놓치지 않는 하차 알림</span>
          </div>
          <div className="float-dot dot-1"></div>
          <div className="float-dot dot-2"></div>
        </Reveal>
      </div>
    </section>
  );
}
