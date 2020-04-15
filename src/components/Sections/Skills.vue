<template>
  <section>
    <section-title :title="'Technical skills'" :lightBackground="false"></section-title>
    <div class="skills-ctn">
      <div class="inner-ctn">
        <skill-item v-for="skill in skills" :key="skill.name" :id="skill.id"
            :skill="skill">
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
        id: 'vue',
      }, {
        name: 'Javascript',
        description: 'daily practice of JS in ES6 notation',
        id: 'javascript',
        position: 'right',
      }, {
        name: 'HTML/SCSS',
        description: 'clean style declarations through SCSS, Tailwind enthusiast',
        id: 'html',
      }, {
        name: 'Testing',
        description: 'E2E testing with Cypress.io, unit testing with Jest',
        id: 'testing',
        position: 'right',
      }, {
        name: 'API',
        description: 'integration of external APIs to complete your website (Paypal API, Google Maps API, AM Charts…)',
        id: 'api',
      }, {
        name: 'UI Toolkits',
        description: 'Bootstrap, Material Design, Bulma, Element UI… everything needed for quick and clean styles applications',
        id: 'ui',
        position: 'right',
      }],
    };
  },
};
</script>

<style scoped lang="scss">
section {
  background: theme('colors.custom-black');
  display: flex;
  flex-flow: column;
}

.skills-ctn {
  flex-grow: 1;
  position: relative;

    .inner-ctn {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: grid;
      padding: 100px 20%;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
      grid-template-areas: "vue ."
                            ". javascript"
                            "html ."
                            ". testing"
                            "api ."
                            ". ui";

      #vue {
        grid-area: vue;
      }

      #javascript {
        grid-area: javascript;
      }

      #html {
        grid-area: html;
      }

      #testing {
        grid-area: testing;
      }

      #api {
        grid-area: api;
      }

      #ui {
        grid-area: ui;
      }
    }
}
</style>
