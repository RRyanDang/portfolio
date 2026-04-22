<script setup>
import NavBar            from './components/NavBar.vue'
import HeroSection       from './components/HeroSection.vue'
import SkillsSection     from './components/SkillsSection.vue'
import ProjectsSection   from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ClubsSection      from './components/ClubsSection.vue'
import ContactSection    from './components/ContactSection.vue'
import SiteFooter        from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ClubsSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
