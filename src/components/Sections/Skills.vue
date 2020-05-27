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
        description: 'Main tool for most of my projects. Knowledge of: Nuxt, VueX, Vue Router, Vue Loader, Vue Devtools, Vuetify...',
        id: 'vue',
        class: 'left-skill',
        imgUrl: 'vue-logo',
        isDevelopped: false,
      }, {
        name: 'JavaScript',
        description: 'Daily practice of JavaScript in ES6 notation. Taking care on writing clean and organized code.',
        id: 'javascript',
        class: 'right-skill',
        imgUrl: 'javascript-logo',
        isDevelopped: false,
      }, {
        name: 'HTML/SCSS',
        description: 'Styling contents with SASS, GSAP / ScrollMagic animations. Also familiar with Tailwind.css',
        id: 'html',
        class: 'left-skill',
        imgUrl: 'html-logo',
        isDevelopped: false,
      }, {
        name: 'Testing',
        description: 'E2E testing with Cypress, unit-tests with Jest',
        id: 'testing',
        class: 'right-skill',
        imgUrl: 'cypress-logo',
        isDevelopped: false,
      }, {
        name: 'UI toolkits',
        description: 'I can create all components and styles from scratch but I also know toolkits such as Bootstrap, Material Design, Bulma, Element UI...',
        id: 'ui',
        class: 'left-skill',
        imgUrl: 'element-ui-logo',
        isDevelopped: false,
      }, {
        name: 'Back-end',
        description: 'Even though I specialize in front-end developement, I can create server-side features like databases, authentication, payments etc. on Firebase or Strapi.',
        id: 'api',
        class: 'right-skill',
        imgUrl: 'firebase-logo',
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    .inner-ctn {
      min-height: 100%;
      flex-grow: 1;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 110px 30px;
    }

    @media screen and (max-width: 500px){
      .inner-ctn {
        padding: 100px 0;
      }
    }

    @screen xs {
      .inner-ctn {
        padding: 75px 0;
      }
    }

    @screen xxs {
      .inner-ctn {
        padding: 75px 0;
      }
    }
}
</style>
