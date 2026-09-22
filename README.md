# 🚀 Dev Stack

**Build Your Ideal Development Stack**

Dev Stack is an interactive web app that helps developers explore frontend, backend, database, and tooling technologies, compare them side by side, and put together a custom tech stack for their next project — all in one clean, easy-to-browse interface.

---

## 📝 Description

Choosing the right tools for a new project can be overwhelming. Dev Stack solves this by presenting a curated grid of popular technologies — complete with ratings, difficulty level, and category — and letting users build their own personalized stack by simply clicking "Add to Stack." The selected technologies appear in a live sidebar, which users can review and edit at any time.

---

## 🛠️ Technology Used

- **React.js** — component-based UI library
- **TypeScript** — static typing for safer, more maintainable code
- **Tailwind CSS** — utility-first styling
- **React-Toastify** — toast notifications for user feedback
- **Vite** — fast build tool and dev server
- **JSON** — local data source for technology listings

---

## ✨ Features

1. **Browse & Compare Technologies** — View a responsive grid of technologies, each showing an icon, name, description, category, difficulty level, and star rating.
2. **Build Your Stack** — Add technologies to a personal "Your Stack" panel with one click; each item can be removed individually or all at once.
3. **Real-Time Feedback** — Toast notifications confirm every add/remove action, and duplicate additions are blocked with a warning — so users always know exactly what's happening with their stack.

---

## ❓ React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like code directly inside JavaScript. It's used in React because it makes describing what the UI should look like much easier to read and write, instead of building elements with plain JavaScript function calls.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — they're read-only and the component can't change them. State is data that a component manages *itself* and can update over time, which causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component hold and update its own local data. In this project, I used it to track the list of technologies fetched from JSON, the loading status, and the array of technologies the user has added to "Your Stack."

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets us run side effects — like fetching data — after a component renders. I needed it to fetch `technologies.json` when the `Technologies` component first mounts, and then update state with the result once the fetch finishes.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React identify which items changed, were added, or were removed between renders. Without a unique key, React can't efficiently or correctly update the list, which can lead to bugs or poor performance.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition. For example, in `StackSidebar.tsx`, I check if the stack is empty:
```tsx
{stack.length === 0 ? (
  <p className="text-sm text-gray-400">
    No technologies added yet. Start building your stack!
  </p>
) : (
  // render the list of stack items
)}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props. To send data back up, the parent passes a function down as a prop, and the child calls that function (usually with some data as an argument) whenever it needs to communicate something back — like how `TechCard` calls the `onAdd` function passed from its parent when a button is clicked.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
