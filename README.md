
```plaintext
src/
├── modules/              # Domain-level features (e.g., tasks, auth)
│   └── tasks/            # First feature module: Tasks
│       ├── components/   # Feature-specific presentational components
│       ├── hooks/        # Feature-specific hooks (e.g. filtering tasks)
│       ├── state/        # Redux slice (taskSlice)
│       └── index.ts      # Barrel file for exports (optional)
├── core/                 # Shared code across the app
│   ├── components/       # Design system or shared UI (Button, Modal, etc.)
│   ├── contexts/         # Global contexts (e.g., Theme, Auth)
│   ├── hooks/            # Reusable hooks (e.g., useDebounce)
│   ├── store/            # Redux store setup + global slices
│   ├── styles/           # Global styles or Tailwind config
│   └── utils/            # Pure functions or helpers (e.g., formatDate)
├── pages/                # Route-level containers/views (e.g., Dashboard)
├── App.tsx               # Top-level app component (Router + Providers)
└── main.tsx              # Entry point that renders the app
```

---

### 🧠 Senior-Level Decisions Behind This Structure:

| Folder           | Purpose                                                              | Scales With... |
|------------------|-----------------------------------------------------------------------|----------------|
| `modules/`       | Encapsulates features to reduce coupling and increase cohesion        | Teams and features |
| `core/`          | Houses shared, reusable logic and UI components                       | Design systems, utility evolution |
| `contexts/`      | For cross-cutting app-wide state not suited for Redux (e.g. theme)    | Simpler than Redux for some state |
| `store/`         | Manages Redux Toolkit store and feature slices                        | Centralized state logic |
| `pages/`         | Represents navigable route containers                                 | Supports route-based code splitting |

---

---

### 🏗️ Step 1: Project Structure – Feature-Based Modular Architecture

We created a modular folder structure to align with scalable, maintainable React app design patterns. The structure separates **feature logic** (e.g. tasks, auth) from **shared resources** (e.g. buttons, context, global styles), enabling developer autonomy, testability, and future expansion.

```plaintext
src/
├── modules/              # Feature-specific logic
├── core/                 # Shared UI, state, hooks, styles
├── pages/                # Route-level components
├── App.tsx               # App entry (router + context + store)
└── main.tsx              # ReactDOM.createRoot, mounts App
```

#### ✅ What we did:
- Created clear boundaries between shared vs. feature logic
- Used `modules/` to encapsulate features with their own components, hooks, and state
- Used `core/` to host reusable UI, hooks, and global logic

#### 🎯 Why:
- Encourages team autonomy and parallel development
- Reduces spaghetti imports and naming conflicts
- Supports future design systems, microfrontends, or NPM module extraction

#### 🧠 Key Concepts:
- Feature-based vs. file-type-based structures
- Designing for growth (teams, codebase, CI/CD)
- Separating app-wide concerns from feature-level logic

#### 🧪 Interview Insight:
> "We structured the app by feature modules so each team could own a domain like `tasks/` or `auth/`. Shared logic lived in `core/`, which was designed to be extracted into a reusable UI library later. This helped enforce boundaries, enable parallel work, and future-proof the app architecture."

---

### 📦 [To Revisit] Extracting Core UI as a Shared NPM Module

> **Note:** The components in `src/core/components/`, along with design tokens and theming logic in `core/styles/`, have been architected for potential **extraction into a reusable npm package** (e.g., `@your-org/ui-lib`).

This would allow:
- Consistent UI/UX across multiple apps
- Centralized updates via versioning
- Cleaner codebases with reduced duplication

> 🔁 **Next step (future):** Refactor `core/components` into a publishable module with `package.json`, docs, and semantic versioning. Consider using Storybook for isolated development and testing.

---

✅ Let me know when you're ready to move on to wiring up the app routing and state providers. We're on track to deploy a production-quality app in under 2 hours — great momentum so far.


Awesome — let’s move on to setting up **routing and global providers**. This will give us a clean entry point (`App.tsx`) and set the stage for lazy loading, error boundaries, and feature modules.

---

### 🧭 Step 2: Routing Setup and Global Entry Point

We configured the routing structure of the app using **React Router DOM (v6)** and created two initial views:

| Path     | Component         | Purpose                         |
|----------|-------------------|----------------------------------|
| `/`      | `Dashboard.tsx`   | Homepage and default dashboard  |
| `*`      | `NotFound.tsx`    | Catch-all for undefined routes  |

Routing is set up in `App.tsx`, which will also later include global state providers (Redux, Context). This architecture makes it easy to:
- Lazy load routes
- Wrap feature routes in layout components or error boundaries
- Decouple navigation structure from domain logic

#### ✅ What we did:
- Set up `BrowserRouter` in `App.tsx`
- Created two basic pages: `Dashboard` and `NotFound`
- Prepared `main.tsx` to render the app with future provider support

#### 🎯 Why:
- Enables route-based code splitting and navigation flow
- Prepares for scalable feature modules (`/tasks`, `/settings`, etc.)
- Demonstrates solid architectural planning in interviews

#### 🧠 Key Concepts:
- React Router v6 routing pattern
- App as the root of all navigation and providers
- Separation of routing and business logic

#### 🧪 Interview Insight:
> "We defined route-level pages in `pages/` and handled routing in `App.tsx`, separating layout from logic. This made it easy to add error boundaries, layouts, and lazy-loaded modules down the line. All providers (Redux, Context) are mounted at the App level to ensure access across routes."

---


### 🔄 Step 3: Global and Local State – Redux Toolkit + Context API

We implemented a hybrid state management approach:

| Purpose                   | Tool Used         | Why It Was Chosen                                      |
|---------------------------|-------------------|---------------------------------------------------------|
| Task data (global/shared) | Redux Toolkit     | Centralized store, shared across many components        |
| Task filters (UI state)   | Context API       | Lightweight, UI-focused, doesn't need Redux complexity  |

#### ✅ What we did:
- Created a `taskSlice` using Redux Toolkit for managing task data
- Created a `TaskContext` to manage UI filter state (`all`, `active`, `completed`)
- Set up Redux and Context providers in `App.tsx`

#### 🎯 Why:
- Demonstrates understanding of **when to use Context vs Redux**
- Keeps logic decoupled and modular
- Easily testable, composable, and scalable

#### 🧠 Key Concepts:
- `createSlice`, `configureStore` from Redux Toolkit
- Separation of domain (task data) vs UI state (filters)
- Context Provider with custom hook (`useTaskContext`)

#### 🧪 Interview Insight:
> "We used Redux Toolkit for core task state, as it’s shared globally and benefits from central control and dev tools. We used Context API for task filters since they’re UI-specific and don’t justify Redux overhead. This reflects an intentional state management split between domain logic and UI behavior."

### ✅ Step 4: Task List Feature – Redux + Context Integration

We built the two core components for rendering the Task dashboard:

| Component     | Responsibility                              |
|---------------|----------------------------------------------|
| `TaskItem`    | Displays a single task, toggles completed    |
| `TaskList`    | Pulls from Redux and filters via Context     |

#### ✅ What we did:
- Used `useSelector` to get global task data from Redux
- Used `useTaskContext` to apply task filter
- Memoized `TaskItem` to avoid unnecessary re-renders
- Styled components with inline styles for now (ready to replace later)

#### 🎯 Why:
- Demonstrates proper separation of concerns: Redux = state, Context = UI behavior
- Performance-aware design (`React.memo`)
- Shows feature encapsulation (`modules/tasks/components`)

#### 🧠 Key Concepts:
- Context + Redux used together correctly
- Component composition and single-responsibility
- Applying filters in the UI layer, not in Redux

#### 🧪 Interview Insight:
> "We consumed tasks from the Redux slice and filters from a local Context to keep UI behavior separate from domain state. This allowed us to apply display-specific logic without bloating the Redux slice. Components were memoized for performance, and designed in a reusable, testable way."
