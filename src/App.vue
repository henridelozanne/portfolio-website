<template>
  <div id="app">
    <landing-section class="website-section"></landing-section>
    <projects-section class="website-section"></projects-section>
    <skills-section class="website-section"></skills-section>
    <contact-section class="website-section"></contact-section>
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
  </div>
</template>

<script>
import LandingSection from './components/Sections/Landing.vue';
import ProjectsSection from './components/Sections/Projects.vue';
import SkillsSection from './components/Sections/Skills.vue';
import ContactSection from './components/Sections/Contact.vue';

export default {
  components: {
    'landing-section': LandingSection,
    'projects-section': ProjectsSection,
    'skills-section': SkillsSection,
    'contact-section': ContactSection,
  },
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Montserrat', sans-serif;
}

.website-section {
  height: 100vh;
}
</style>
