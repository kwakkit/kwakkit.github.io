# kwakkit homepage

곽킷(kwakkit) 소개 홈페이지. React + Vite.

## 개발

```bash
npm install
npm run dev
# http://localhost:5173 접속
```

## 빌드 / 미리보기

```bash
npm run build
npm run preview
```

## 구조

```
index.html              # Vite 엔트리
src/main.jsx             # React 루트 마운트
src/App.jsx              # 섹션 조립
src/components/          # Header / Hero / About / Values / Projects / Contact / Footer / Reveal
src/styles.css           # 디자인 토큰 + 스타일 (라이트/다크 자동 대응)
public/favicon.svg       # 파비콘
```

## 채워야 할 자리표시자(placeholder)

- **자기소개**: 이름, 역할, 소개 문구, 스킬 태그 (`src/components/About.jsx`)
- **프로젝트 링크**: 각 프로젝트 카드의 "자세히 보기" 링크 (`src/components/Projects.jsx`, `href="#"`)
- **연락처 이메일**: `hello@kwakkit.dev` → 실제 주소로 교체 (`src/components/Contact.jsx`)
- **Instagram 링크**: `href="#"` → 실제 계정으로 교체
- GitHub 링크는 `https://github.com/kwakkit` 로 이미 연결되어 있음

## 배포

`main`에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로
빌드해서 GitHub Pages로 배포합니다. 주소: https://kwakkit.github.io
