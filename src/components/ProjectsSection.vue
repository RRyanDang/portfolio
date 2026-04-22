<script setup>
import { projects } from '../data/portfolio.js'
import { useReveal } from '../composables/useReveal.js'

const { revealRef } = useReveal()
</script>

<template>

  <section id="projects">
    <div class="container">
      <div class="section-eyebrow reveal" :ref="revealRef">Projects</div>
      <h2 class="section-heading reveal" :ref="revealRef">Things I've built</h2>
      <p class="section-sub reveal" :ref="revealRef">A handful of projects I'm proud of — some serious, some just for fun.</p>

      <div class="projects-grid">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          class="project-card reveal"
          :class="`reveal-delay-${i}`"
          :ref="revealRef"
        >
          <div class="project-header">
            <h3>{{ project.title }}</h3>
            <a :href="project.url" class="project-link" target="_blank" rel="noopener">↗</a>
          </div>
          <p>{{ project.description }}</p>
          <div class="project-footer">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { background: var(--bg); }

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1.75rem;
  display: flex; flex-direction: column;
  transition: transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;
}
.project-card::after {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent3));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}
.project-card:hover::after { transform: scaleX(1); }
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.project-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  margin-bottom: 0.75rem;
}
.project-card h3 {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.project-link {
  font-size: 1rem;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
.project-link:hover { color: var(--accent); }

.project-card p {
  font-size: 0.9rem;
  color: var(--ink2);
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1.25rem;
}

.project-footer {
  display: flex; flex-wrap: wrap; gap: 0.35rem;
  margin-top: auto;
}
</style>
