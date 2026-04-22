<script setup>
import { ref } from 'vue'
import { experience } from '../data/portfolio.js'
import { useReveal } from '../composables/useReveal.js'

const { revealRef } = useReveal()

const expanded = ref({})
function toggle(i) {
  expanded.value[i] = !expanded.value[i]
}
</script>

<template>
  <section id="experience">
    <div class="container">
      <div class="section-eyebrow reveal" :ref="revealRef">Experience</div>
      <h2 class="section-heading reveal" :ref="revealRef">Where I've worked</h2>
      <p class="section-sub reveal" :ref="revealRef">The roles and teams that have shaped the way I think about building software.</p>

      <div class="timeline">
        <div
          v-for="(item, i) in experience"
          :key="item.role + item.date"
          class="timeline-item reveal"
          :class="`reveal-delay-${i}`"
          :ref="revealRef"
        >
          <div class="tl-date">{{ item.date }}</div>
          <div class="tl-role">{{ item.role }}</div>
          <div class="tl-company">{{ item.company }} · {{ item.type }}</div>
          <p class="tl-desc">{{ item.description }}</p>

          <!-- Expandable bullets -->
          <div v-if="item.bullets" class="bullets-wrap" :class="{ open: expanded[i] }">
            <ul class="bullets">
              <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
          </div>

          <button
            v-if="item.bullets"
            class="toggle-btn"
            @click="toggle(i)"
          >
            <span class="toggle-icon" :class="{ rotated: expanded[i] }">↓</span>
            {{ expanded[i] ? 'Show less' : 'View more' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { background: var(--bg2); }

.timeline {
  position: relative;
  padding-left: 2rem;
}
.timeline::before {
  content: '';
  position: absolute; left: 0; top: 8px; bottom: 8px;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent), var(--border), transparent);
}

.timeline-item {
  position: relative;
  padding: 0 0 3rem 2.5rem;
}
.timeline-item::before {
  content: '';
  position: absolute; left: -0.3rem; top: 8px;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--surface);
  border: 2px solid var(--accent);
}
.timeline-item:last-child { padding-bottom: 0; }

.tl-date {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 0.4rem;
  letter-spacing: 0.04em;
}
.tl-role {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.15rem;
}
.tl-company {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 0.6rem;
}
.tl-desc {
  font-size: 0.9rem;
  color: var(--ink2);
  line-height: 1.75;
}

/* Expandable bullets */
.bullets-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
}
.bullets-wrap.open {
  grid-template-rows: 1fr;
}
.bullets {
  overflow: hidden;
  padding-left: 1.1rem;
  margin-top: 0;
}
.bullets-wrap.open .bullets {
  margin-top: 0.75rem;
}
.bullets li {
  font-size: 0.88rem;
  color: var(--ink2);
  line-height: 1.7;
  margin-bottom: 0.35rem;
  list-style: none;
  position: relative;
  padding-left: 1rem;
}
.bullets li::before {
  content: '·';
  position: absolute; left: 0;
  color: var(--accent);
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5;
}

.toggle-btn {
  margin-top: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  padding: 0;
  transition: opacity 0.2s;
}
.toggle-btn:hover { opacity: 0.75; }

.toggle-icon {
  display: inline-block;
  transition: transform 0.3s ease;
  font-style: normal;
  line-height: 1;
}
.toggle-icon.rotated { transform: rotate(180deg); }
</style>