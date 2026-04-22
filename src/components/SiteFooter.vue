<script setup>
import { profile } from '../data/portfolio.js'
const year = new Date().getFullYear()
</script>

<template>
  <p> </p>
  <footer>
    <p>© {{ year }} {{ profile.name }} — Made with care ☕</p>
    <a href="#hero">Back to top ↑</a>
  </footer>
</template>

<style scoped>
footer {
  background: var(--bg);
  border-top: 1px solid var(--border);
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer p { font-size: 0.82rem; color: var(--muted); }
footer a { font-size: 0.82rem; color: var(--accent); text-decoration: none; }
footer a:hover { text-decoration: underline; }

@media (max-width: 768px) {
  footer { flex-direction: column; gap: 0.5rem; text-align: center; padding: 1.5rem; }
}
</style>
