# TaskZen – A Scalable React SPA Dashboard

**TaskZen** is a desktop-first, production-ready React single-page application built to showcase advanced frontend engineering principles including state management architecture, performance optimization, CI/CD workflows, and cloud deployment.

## 🚀 Live Demo
**[View on Vercel](https://your-taskzen-url.vercel.app)**

---

## ⚙️ Tech Stack

- **React + TypeScript**
- **Vite** (fast dev + build tooling)
- **Redux Toolkit** (global state: task data)
- **Context API** (local UI state: filters)
- **React Router v6**
- **React Testing Library + Vitest**
- **GitHub Actions CI/CD**
- **Vercel** (deployment)

---

## 🧠 Architecture Decisions

| Concern              | Solution                               | Why It Matters                                 |
|----------------------|----------------------------------------|------------------------------------------------|
| State Separation     | Redux Toolkit + Context API            | Keeps UI logic decoupled from domain logic     |
| Feature Modularity   | `modules/` folder by feature            | Easier to scale and onboard new engineers      |
| Shared Resources     | `core/` folder for components/hooks     | Promotes reuse, testing, and consistency       |
| Performance          | `useMemo`, `React.memo`, lazy loading  | Prevents unnecessary re-renders                |
| Reliability          | Error Boundary + Suspense              | Prevents full crashes, handles async safely    |
| Testability          | Unit tests with Vitest                 | Catches regressions, CI integrated             |
| Deployment           | Vercel with GitHub auto-deploy         | Continuous delivery from `main` branch         |

---

## 📦 Features

- Add and toggle task completion
- Filter tasks (All / Active / Completed)
- Optimized task rendering and memoization
- Accessible design with semantic markup
- Mobile-friendly responsive layout (optional future scope)

---

## 🧪 Tests & CI

- Unit tests using **Vitest** and **@testing-library/react**
- CI pipeline using **GitHub Actions**:
  - Lint
  - Run tests
  - Build

---

## 🌐 Deployment

- Deployed via **Vercel**
- Build command: `npm run build`
- Output: `dist/`
- GitHub → Vercel auto-deploy enabled

---
