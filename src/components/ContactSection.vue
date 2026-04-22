<script setup>
import { ref } from 'vue'
import { profile } from '../data/portfolio.js'
import { useReveal } from '../composables/useReveal.js'

const { revealRef } = useReveal()

const form = ref({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)
const sending = ref(false)

function handleSubmit() {
  sending.value = true
  // Replace this timeout with your real form submission (e.g. Formspree, EmailJS)
  setTimeout(() => {
    sending.value = false
    submitted.value = true
  }, 800)
}
</script>

<template>
  <section id="contact">
    <div class="container">
      <div class="contact-inner">
        <!-- Left -->
        <div class="contact-left reveal" :ref="revealRef">
          <div class="section-eyebrow">Contact</div>
          <h2 class="section-heading">Let's chat.</h2>
          <p>
            Whether it's a job opportunity, a collaboration, or just wanting to
            talk tech over coffee — I'd love to hear from you. I try to respond
            within a day or two.
          </p>

          <div class="contact-links">
            <a :href="`mailto:${profile.email}`" class="contact-link">
              <div class="contact-link-icon">✉️</div>
              {{ profile.email }}
            </a>
            <a :href="profile.github" target="_blank" rel="noopener" class="contact-link">
              <div class="contact-link-icon">🐙</div>
              {{ profile.githubHandle }}
            </a>
            <a :href="profile.linkedin" target="_blank" rel="noopener" class="contact-link">
              <div class="contact-link-icon">💼</div>
              {{ profile.linkedinHandle }}
            </a>
          </div>
        </div>

        <!-- Right – form -->
        <div class="reveal reveal-delay-1" :ref="revealRef">
          <form v-if="!submitted" class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Your name</label>
                <input id="name" v-model="form.name" type="text" placeholder="Jane Smith" required />
              </div>
              <div class="form-group">
                <label for="email">Your email</label>
                <input id="email" v-model="form.email" type="email" placeholder="jane@company.com" required />
              </div>
            </div>
            <div class="form-group">
              <label for="subject">What's it about?</label>
              <input id="subject" v-model="form.subject" type="text" placeholder="Job opportunity, collab idea, etc." />
            </div>
            <div class="form-group">
              <label for="message">Your message</label>
              <textarea id="message" v-model="form.message" placeholder="Tell me a bit more..." required></textarea>
            </div>
            <button type="submit" class="btn-submit" :disabled="sending">
              {{ sending ? 'Sending... 📨' : 'Send message 📬' }}
            </button>
          </form>

          <div v-else class="form-success">
            ✓ Got it! I'll get back to you soon 😊
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { background: var(--bg2); }

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 5rem;
  align-items: start;
}

.contact-left p {
  font-size: 0.95rem;
  color: var(--ink2);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-links { display: flex; flex-direction: column; gap: 1rem; }

.contact-link {
  display: flex; align-items: center; gap: 0.75rem;
  font-size: 0.88rem;
  color: var(--ink2);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}
.contact-link-icon {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s;
}
.contact-link:hover { color: var(--accent); }
.contact-link:hover .contact-link-icon { background: var(--bg2); border-color: var(--accent); }

/* Form */
.contact-form { display: flex; flex-direction: column; gap: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 0.35rem; }

label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ink2);
  letter-spacing: 0.02em;
}

input, textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 0.92rem;
  padding: 0.7rem 1rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: none;
  width: 100%;
}
input:focus, textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(196,98,45,0.1);
}
textarea { height: 120px; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.btn-submit {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.8rem 1.75rem;
  background: var(--accent);
  border: none;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  align-self: flex-start;
}
.btn-submit:hover:not(:disabled) { background: #a84e22; transform: translateY(-1px); }
.btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

.form-success {
  font-size: 0.95rem;
  color: var(--accent2);
  font-weight: 600;
  padding: 2rem 0;
}

@media (max-width: 768px) {
  .contact-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
