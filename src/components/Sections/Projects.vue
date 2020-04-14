<template>
  <section>
    <section-title :title="'Projects'" :lightBackground="true"></section-title>
    <div class="projects-ctn">
      <project-item v-for="project in projects"
                    :key="project.name"
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
            href: 'https://lartisandudeuxroues.com/',
          },
          images: [
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274088/portfolio-website/projects/lartisan-du-deux-roues/main.png',
              alt: 'lartisan-du-deux-roues-main-img',
              main: true,
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274088/portfolio-website/projects/lartisan-du-deux-roues/formules.png',
              alt: 'lartisan-du-deux-roues-prices-img',
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274088/portfolio-website/projects/lartisan-du-deux-roues/ou%CC%80-nous-trouver.png',
              alt: 'lartisan-du-deux-roues-localization-img',
            },
          ],
        },
        {
          name: 'Izifret',
          description: 'Working at Izifret during 2 years and contributed to the development of the platform',
          stack: 'Vue.js, JavaScript, Node.js, Django, Cypress, Jest',
          feedback: 'Henri a fait preuve de beaucoup de professionnalisme',
          link: {
            display: 'www.izifret.com',
            href: 'https://izifret.com/fr/',
          },
          images: [
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274125/portfolio-website/projects/izifret/main.png',
              alt: 'izifret-main-img',
              main: true,
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274124/portfolio-website/projects/izifret/dashboard.png',
              alt: 'izifret-dashboard-img',
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274124/portfolio-website/projects/izifret/shipments.png',
              alt: 'izifret-shipments-img',
            },
          ],
        },
        {
          name: 'Charles Michel Photography',
          description: 'Created a website for french photographer Charles Michel to showcase his work',
          stack: 'Vue.js, JavaScript, HTML, SCSS, Tailwind.css',
          feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus alias blanditiis eaque iusto. At esse deleniti expedita maxime accusantium fuga. Itaque alias id cumque eum. Minus nulla reprehenderit eos esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus alias blanditiis eaque iusto. At esse deleniti expedita maxime accusantium fuga. Itaque alias id cumque eum. Minus nulla reprehenderit eos esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus alias blanditiis eaque iusto. At esse deleniti expedita maxime accusantium fuga. Itaque alias id cumque eum. Minus nulla reprehenderit eos esse!',
          link: {
            display: 'www.charlesmichel-photography.com',
            href: 'http://www.charlesmichel-photography.com/',
          },
          images: [
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586272887/portfolio-website/projects/charles-michel-photography/main.png',
              alt: 'charles-michel-photography-main-img',
              main: true,
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586272886/portfolio-website/projects/charles-michel-photography/desktop-contact.png',
              alt: 'charles-michel-photography-contact-img',
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586272886/portfolio-website/projects/charles-michel-photography/mobile-home-page.png',
              alt: 'charles-michel-photography-mobile-img',
            },
          ],
        },
        {
          name: 'Space Tetris',
          description: 'First JavaScript project created at Ironhack at third week',
          stack: 'JavaScript, HTML, CSS',
          link: {
            display: 'www.space-tetris.com',
            href: 'https://space-tetris.netlify.com/',
          },
          images: [
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274161/portfolio-website/projects/space-tetris/main.png',
              alt: 'space-tetris-main-img',
              main: true,
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274160/portfolio-website/projects/space-tetris/commands.png',
              alt: 'space-tetris-commands-img',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
section {
  background: theme('colors.custom-grey');
  display: flex;
  flex-flow: column;
}

.projects-ctn {
  flex-grow: 1;
  display: grid;
  grid-template-columns: 440px 440px 440px;
  grid-template-rows: auto auto auto;
  grid-gap: 40px;
  padding: 50px 0;
  justify-items: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
}

@media (max-width: 1475px) {
  .projects-ctn {
    grid-template-columns: 440px 440px;
    grid-template-rows: auto auto;
    grid-gap: 40px 60px;
  }
}

@screen md {
  .projects-ctn {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}

@screen sm {
  .projects-ctn {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}

@screen xs {
  .projects-ctn {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}
</style>
