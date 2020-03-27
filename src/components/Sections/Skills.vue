<template>
  <section>
    <h2 class="section-title text-custom-white">Technical skills</h2>
    <div id="skills-ctn">
      <skill-item v-for="skill in skills" :key="skill.name"
                  :name="skill.name" :description="skill.description">
      </skill-item>
    </div>
  </section>
</template>

<script>
import SkillItem from '../Skills/SkillItem.vue';

export default {
  name: 'Skills',
  components: {
    'skill-item': SkillItem,
  },
  data() {
    return {
      skills: [{
        name: 'Vue.js',
        description: 'and all related technologies : VueX, Nuxt.js, Vue Router, Vue Loader, Vue Devtools...',
      }, {
        name: 'Javascript',
        description: 'daily practice of JS in ES6 notation',
      }, {
        name: 'HTML/SCSS',
        description: 'clean style declarations through SCSS, Tailwind enthusiast',
      }, {
        name: 'Testing',
        description: 'E2E testing with Cypress.io, unit testing with Jest',
      }, {
        name: 'API',
        description: 'integration of external APIs to complete your website (Paypal API, Google Maps API, AM Charts…)',
      }, {
        name: 'UI Toolkits',
        description: 'Bootstrap, Material Design, Bulma, Element UI… everything needed for quick and clean styles applications',
      }],
    };
  },
};
</script>

<style scoped lang="scss">
section {
  background: theme('colors.custom-black');
}
</style>
