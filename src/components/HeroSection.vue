<script setup>
import { profile } from '../data/portfolio.js'
</script>

<template>
  <section id="hero">
    <div class="hero-left">
      <div class="hero-greeting">
        <span class="wave">👋</span> Hey there, I'm
      </div>

      <h1 class="hero-name">
        {{ profile.name }},<br>
        a <em>software engineer</em><br>who loves to build.
      </h1>

      <p class="hero-tagline">{{ profile.bio }}</p>

      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">See my work</a>
        <a href="#contact" class="btn btn-ghost">Say hello</a>
      </div>
    </div>

    <div class="hero-right">
      <div class="avatar-card">
        <div v-if="profile.openToWork" class="status-dot">
          <span class="dot"></span>
          Open to opportunities
        </div>
        <div class="avatar-img">{{ profile.initials }}</div>
        <h3>{{ profile.name }}</h3>
        <div class="role">{{ profile.role }} · {{ profile.location }}</div>
        
        <div class="avatar-stats">
          <div v-for="stat in profile.stats" :key="stat.label" class="stat">
            <span class="stat-num">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 7rem 3rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}

/* Left */
.hero-greeting {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent);
  margin-bottom: 1rem;
  display: flex; align-items: center; gap: 0.5rem;
  opacity: 0;
  animation: fadeUp 0.5s 0.2s forwards;
}
.wave { display: inline-block; animation: wave 2s 1.5s ease-in-out 3; }

.hero-name {
  font-family: var(--font-serif);
  font-size: clamp(2.8rem, 5vw, 4.2rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;
  opacity: 0;
  animation: fadeUp 0.6s 0.35s forwards;
}
.hero-name em { font-style: italic; color: var(--accent); }

.hero-tagline {
  font-size: 1rem;
  color: var(--ink2);
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 420px;
  opacity: 0;
  animation: fadeUp 0.6s 0.5s forwards;
}

.hero-actions {
  display: flex; gap: 1rem; flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp 0.6s 0.65s forwards;
}

/* Right – avatar card */
.hero-right {
  display: flex; justify-content: center;
  opacity: 0;
  animation: fadeIn 0.8s 0.7s forwards;
}

.avatar-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  text-align: center;
  width: 280px;
  box-shadow: var(--shadow-lg);
  position: relative;
}
.avatar-card::before {
  content: '';
  position: absolute; inset: -1px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(196,98,45,0.15), rgba(74,124,107,0.1), transparent);
  z-index: -1;
}

.status-dot {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.75rem; color: var(--accent2);
  background: rgba(74,124,107,0.1);
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 1rem;
}
.dot {
  width: 7px; height: 7px;
  background: var(--accent2);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.avatar-img {
  width: 90px; height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--bg2), var(--border));
  margin: 0 auto 1rem;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-serif);
  font-size: 2rem;
  color: var(--accent);
  font-style: italic;
  border: 3px solid var(--border);
}

.avatar-card h3 {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.role { font-size: 0.82rem; color: var(--muted); margin-bottom: 1.25rem; }

.avatar-stats {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  border-top: 1px solid var(--border);
  padding-top: 1.25rem;
}
.stat { text-align: center; }
.stat-num {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--accent);
  display: block;
}
.stat-label { font-size: 0.72rem; color: var(--muted); }

@media (max-width: 768px) {
  #hero { grid-template-columns: 1fr; padding: 6rem 1.5rem 3rem; }
  .hero-right { display: none; }
}
</style>
