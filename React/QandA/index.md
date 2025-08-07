**What is virtual DOM?**
The Virtual DOM in React is like a lightweight copy of the real DOM ,React uses this virtual DOM to manage and update the UI efficiently.
Lets say:
1. When we make a change in your React app, React doesn't immediately update the real DOM.
2. Instead, it updates the Virtual DOM first.
3. React then compares the updated Virtual DOM with the previous version (this process is called "diffing").
4. After finding what has changed, React updates only the specific part of the real DOM that needs to change (minimal updates).

**What is JSX in React?**
JSX (JavaScript XML) is a syntax used in React that allows us to write HTML-like code inside JavaScript. It makes it easier to create React components by letting you combine structure (HTML) and logic (JavaScript) in the same file.

**Difference Between npm create vite and create-react-app (CRA)**
Uses a modern bundler (ESBuild) and serves files in a super-efficient way during development.
It's much faster, especially in large projects, because it only processes the files you use.

**Why Should We Use Keys in React?**
React uses keys to uniquely identify elements. When a list is updated, React uses the key to match existing elements with new ones, avoiding unnecessary re-renders.

**Why Should We Avoid Using Index as a Key?**
Reordering Issues:
If the list items change positions, React may not recognize the difference because the index remains the same, leading to incorrect updates.
## Only use the index as a key:
When the list is static (doesn’t change) or:
The order and content of the list never change.