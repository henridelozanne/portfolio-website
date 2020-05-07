<template>
  <section class="skills-section">
    <section-title :title="'Technical skills'" :lightBackground="false"></section-title>
    <div class="skills-ctn">
      <div class="inner-ctn">
        <skill-item v-for="skill in skills" :key="skill.name" :id="skill.id"
            :skill="skill" @skillDevelop="skillDevelop" :oneItemDevelopped="oneItemDevelopped">
        </skill-item>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';
import SkillItem from '../SkillItem.vue';
import SectionTitle from '../SectionTitle.vue';

export default {
  name: 'Skills',
  components: {
    'skill-item': SkillItem,
    'section-title': SectionTitle,
  },
  mounted() {
    const skillsTimeline = gsap.timeline();
    skillsTimeline.from('.skill-ctn', {
      duration: 0.7,
      y: 30,
      opacity: 0,
      ease: 'slow',
      stagger: 0.3,
    });

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: '.skills-section',
      triggerHook: 0.45,
    })
      .setTween(skillsTimeline)
      .reverse(false)
      .addTo(controller);
  },
  computed: {
    leftSkills() {
      return this.skills.slice(0, 3);
    },
    rightSkills() {
      return this.skills.slice(3);
    },
    oneItemDevelopped() {
      return this.skills.some((skill) => skill.isDevelopped === true);
    },
  },
  data() {
    return {
      skills: [{
        name: 'Vue.js',
        description: 'and all related technologies : VueX, Nuxt.js, Vue Router, Vue Loader, Vue Devtools, Vuetify...',
        id: 'vue',
        class: 'left-skill',
        imgUrl: 'vue-logo',
        isDevelopped: false,
      }, {
        name: 'Javascript',
        description: 'daily practice of JS in ES6 notation',
        id: 'javascript',
        class: 'right-skill',
        imgUrl: 'javascript-logo',
        isDevelopped: false,
      }, {
        name: 'HTML/SCSS',
        description: 'clean style declarations through SCSS, Tailwind enthusiast',
        id: 'html',
        class: 'left-skill',
        imgUrl: 'html-logo',
        isDevelopped: false,
      }, {
        name: 'Testing',
        description: 'E2E testing with Cypress, unit testing with Jest',
        id: 'testing',
        class: 'right-skill',
        imgUrl: 'cypress-logo',
        isDevelopped: false,
      }, {
        name: 'API use',
        description: 'integration of external APIs to complete your website (Paypal API, Google Maps API, AM Charts…)',
        id: 'api',
        class: 'left-skill',
        imgUrl: 'api-logo',
        isDevelopped: false,
      }, {
        name: 'UI Toolkits',
        description: 'Bootstrap, Material Design, Bulma, Element UI… everything needed for quick and clean styles applications',
        id: 'ui',
        class: 'right-skill',
        imgUrl: 'element-ui-logo',
        isDevelopped: false,
      }],
    };
  },
  methods: {
    skillDevelop(payload) {
      this.skills.filter((skill) => skill.name
      === payload.name)[0].isDevelopped = payload.isDevelopped;
    },
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

    @media screen and (max-width: 1570px){
      .inner-ctn {
        padding: 100px 15%;
      }
    }

    @screen lg {
      .inner-ctn {
        padding: 100px 8%;
      }
    }

    @screen md {
      .inner-ctn {
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr;
        grid-column-gap: 100px;
        grid-template-areas: "vue"
                              "javascript"
                              "html"
                              "testing"
                              "api"
                              "ui";
        padding: 100px 15%;
      }
    }

    @screen sm {
      .inner-ctn {
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr;
        grid-column-gap: 100px;
        grid-template-areas: "vue"
                              "javascript"
                              "html"
                              "testing"
                              "api"
                              "ui";
        padding: 100px 15%;
      }
    }

    @screen xs {
      .inner-ctn {
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr;
        grid-column-gap: 100px;
        grid-template-areas: "vue"
                              "javascript"
                              "html"
                              "testing"
                              "api"
                              "ui";
        padding: 50px 15%;
      }
    }

    @screen xxs {
      .inner-ctn {
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr;
        grid-column-gap: 100px;
        grid-template-areas: "vue"
                              "javascript"
                              "html"
                              "testing"
                              "api"
                              "ui";
        padding: 45px 10%;
      }
    }
}
</style>
