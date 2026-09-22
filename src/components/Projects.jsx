import Reveal from './Reveal.jsx';

const PROJECTS = [
  {
    accent: '#FF6B4A',
    accentSoft: '#FFF1EC',
    icon: '⏱️',
    status: '운영 중',
    statusClass: 'status-live',
    title: '갓생 대시보드',
    desc: '뽀모도로 타이머, 루틴 체크리스트, 배경음, 주간 몰입 통계로 하루를 설계하는 생산성 대시보드.',
    tags: ['Flutter Web', 'Productivity'],
  },
  {
    accent: '#6C3AE0',
    accentSoft: '#F5F2FC',
    icon: '🚇',
    status: '개발 중',
    statusClass: 'status-dev',
    title: '하차각',
    desc: '내릴 역을 놓치지 않도록, 도착 3정거장 전과 도착 순간에 미리 알려주는 지하철 하차 알림 앱.',
    tags: ['Flutter', 'Android'],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <p className="section-eyebrow">PROJECTS</p>
          <h2>프로젝트</h2>
        </Reveal>

        <div className="project-grid">
          {PROJECTS.map((project) => (
            <Reveal
              as="article"
              className="project-card"
              key={project.title}
              style={{ '--accent': project.accent, '--accent-soft': project.accentSoft }}
            >
              <div className="project-top">
                <span className="project-icon">{project.icon}</span>
                <span className={`status-badge ${project.statusClass}`}>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              <a className="project-link" href="#">
                자세히 보기 <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}

          <Reveal as="article" className="project-card project-card-empty">
            <span className="project-icon">✨</span>
            <h3>다음 프로젝트</h3>
            <p>새로운 불편함을 찾아, 다음 프로젝트를 준비하고 있어요.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
