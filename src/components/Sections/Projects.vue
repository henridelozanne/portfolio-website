<template>
  <section>
    <section-title :title="'Projects'" :lightBackground="true"></section-title>
    <div class="projects-ctn">
      <project-item v-for="project in projects"
                    :key="project.name"
                    class="project-item"
                    :project="project">
      </project-item>
    </div>
  </section>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import ProjectItem from '../ProjectItem.vue';

export default {
  name: 'Projects',
  components: {
    'project-item': ProjectItem,
    'section-title': SectionTitle,
  },
  data() {
    return {
      projects: [
        {
          name: 'L\'Artisan du deux-roues',
          description: 'Website created for motorcycle and scooter repair shop',
          stack: 'Vue.js, GSAP, SCSS',
          feedback: 'I recommend Henri for his work in this project and the nice animations he created',
          link: {
            display: 'www.lartisandudeuxroues.com',
            href: 'https//:lartisandudeuxroues.com',
          },
        },
        {
          name: 'Izifret',
          description: 'Working at Izifret during 2 years and contributed to the development of the platform',
          stack: 'Vue.js, JavaScript, Node.js, Django, Cypress, Jest',
          feedback: 'Henri a fait preuve de beaucoup de professionnalisme',
          link: {
            display: 'www.izifret.com',
            href: 'https//:izifret.com',
          },
        },
        {
          name: 'Charles Michel Photography',
          description: 'Created a website for french photographer Charles Michel to showcase his work',
          stack: 'Vue.js, JavaScript, HTML, SCSS, Tailwind.css',
          feedback: 'More than pleased with Henri\'s work during the project. Not only he followed what I told him but also proposed original ideas that were adopted. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus alias blanditiis eaque iusto. At esse deleniti expedita maxime accusantium fuga. Itaque alias id cumque eum. Minus nulla reprehenderit eos esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus alias blanditiis eaque iusto. At esse deleniti expedita maxime accusantium fuga. Itaque alias id cumque eum. Minus nulla reprehenderit eos esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus alias blanditiis eaque iusto. At esse deleniti expedita maxime accusantium fuga. Itaque alias id cumque eum. Minus nulla reprehenderit eos esse!',
          link: {
            display: 'www.charlesmichel-photography.com',
            href: 'https//:charlesmichel-photography.com',
          },
        },
        {
          name: 'Space Tetris',
          description: 'First JavaScript project created at Ironhack at third week',
          stack: 'JavaScript, HTML, CSS',
          link: {
            display: 'www.space-tetris.com',
            href: 'https//:space-tetris.netlify.com',
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
section {
  background: theme('colors.custom-grey');
}

.projects-ctn {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
