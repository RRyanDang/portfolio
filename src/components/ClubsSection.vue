<script setup>
import { clubs } from '../data/portfolio.js'
import { useReveal } from '../composables/useReveal.js'

const { revealRef } = useReveal()
</script>

<template>
  <section id="clubs">
    <div class="container">
      <div class="section-eyebrow reveal" :ref="revealRef">Community</div>
      <h2 class="section-heading reveal" :ref="revealRef">Beyond the code</h2>
      <p class="section-sub reveal" :ref="revealRef">Clubs and communities I've been part of — these shaped me just as much as any job.</p>

      <div class="clubs-grid">
        <div
          v-for="(club, i) in clubs"
          :key="club.name"
          class="club-card reveal"
          :class="`reveal-delay-${i}`"
          :ref="revealRef"
        >
          <span class="club-emoji">{{ club.emoji }}</span>
          <h3>{{ club.name }}</h3>
          <div class="club-role">{{ club.role }}</div>
          <p>{{ club.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { background: var(--bg); }

.clubs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.25rem;
}

.club-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.club-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.club-emoji { font-size: 1.6rem; margin-bottom: 0.75rem; display: block; }

.club-card h3 {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}
.club-role {
  font-size: 0.78rem;
  color: var(--accent2);
  font-weight: 600;
  margin-bottom: 0.6rem;
}
.club-card p { font-size: 0.87rem; color: var(--ink2); line-height: 1.65; }
</style>
