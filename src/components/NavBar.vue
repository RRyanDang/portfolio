<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/portfolio.js'

const scrolled = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { label: 'Skills',      href: '#skills' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Clubs',       href: '#clubs' },
  { label: 'Say hi',      href: '#contact' },
]
</script>

<template>
  <nav :class="{ scrolled }">
    <a href="#hero" class="nav-logo">
      {{ profile.name }}<em>.</em>
    </a>
    <ul class="nav-links">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: fixed; top: 0; left: 0; right: 0;
  padding: 1.25rem 3rem;
  display: flex; justify-content: space-between; align-items: center;
  z-index: 100;
  transition: background 0.3s, box-shadow 0.3s;
}
nav.scrolled {
  background: rgba(253,248,242,0.92);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 0 var(--border);
}
.nav-logo {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.2rem;
  color: var(--ink);
  text-decoration: none;
}
.nav-logo em { color: var(--accent); font-style: normal; }
.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links a {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--ink2);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--accent); }

@media (max-width: 768px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
}
</style>
