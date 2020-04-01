<template>
  <section>
    <section-title :title="'Technical skills'" :lightBackground="false"></section-title>
    <div class="skills-blocks-ctn">
      <div class="left-block">
        <skill-item v-for="skill in leftSkills" :key="skill.name"
                  :name="skill.name" :description="skill.description" :position="'left'">
        </skill-item>
      </div>
      <div class="right-block">
        <skill-item v-for="skill in rightSkills" :key="skill.name"
                  :name="skill.name" :description="skill.description" :position="'right'">
        </skill-item>
      </div>
    </div>
  </section>
</template>

<script>
import SkillItem from '../SkillItem.vue';
import SectionTitle from '../SectionTitle.vue';

export default {
  name: 'Skills',
  components: {
    'skill-item': SkillItem,
    'section-title': SectionTitle,
  },
  computed: {
    leftSkills() {
      return this.skills.slice(0, 3);
    },
    rightSkills() {
      return this.skills.slice(3);
    },
  },
  data() {
    return {
      skills: [{
        name: 'Vue.js',
        description: 'and all related technologies : VueX, Nuxt.js, Vue Router, Vue Loader, Vue Devtools, Vuetify...',
      }, {
        name: 'HTML/SCSS',
        description: 'clean style declarations through SCSS, Tailwind enthusiast',
      }, {
        name: 'API',
        description: 'integration of external APIs to complete your website (Paypal API, Google Maps API, AM Charts…)',
      }, {
        name: 'Javascript',
        description: 'daily practice of JS in ES6 notation',
      }, {
        name: 'Testing',
        description: 'E2E testing with Cypress.io, unit testing with Jest',
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

.skills-blocks-ctn {
  display: flex;
  justify-content: center;
  margin-top: 80px; /* FIXME: to be changed, won't be responsive like that */

  div {
    height: 700px;
    width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .left-block {
    margin-right: 70px;
  }

  .right-block {
    margin-top: 50px;
  }
}
</style>
