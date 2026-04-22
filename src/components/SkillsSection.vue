<script setup>
import { skills } from '../data/portfolio.js'
import { useReveal } from '../composables/useReveal.js'

const { revealRef } = useReveal()
</script>

<template>
  <section id="skills">
    <div class="container">
      <div class="section-eyebrow reveal" :ref="revealRef">Skills</div>
      <h2 class="section-heading reveal" :ref="revealRef">My toolkit</h2>
      <p class="section-sub reveal" :ref="revealRef">Languages, frameworks, and tools I reach for on a daily basis.</p>

      <div class="skills-grid">
        <div
          v-for="(skill, i) in skills"
          :key="skill.title"
          class="skill-card reveal"
          :class="`reveal-delay-${i}`"
          :ref="revealRef"
        >
          <div class="skill-icon">{{ skill.icon }}</div>
          <h3>{{ skill.title }}</h3>
          <div class="skill-tags">
            <span v-for="tag in skill.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { background: var(--bg2); }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.25rem;
}

.skill-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.skill-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.skill-icon {
  width: 38px; height: 38px;
  border-radius: 10px;
  background: var(--bg2);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  margin-bottom: 0.85rem;
}

.skill-card h3 {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--ink);
}

.skill-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
</style>
