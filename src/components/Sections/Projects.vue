<template>
  <section class="projects-section">
    <section-title :title="'Projects'" :lightBackground="true"></section-title>
    <div class="projects-ctn">
      <project-item v-for="project in projects"
                    :key="project.name"
                    :project="project"
                    class="stagger-item">
      </project-item>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';
import SectionTitle from '../SectionTitle.vue';
import ProjectItem from '../ProjectItem.vue';

export default {
  name: 'Projects',
  components: {
    'project-item': ProjectItem,
    'section-title': SectionTitle,
  },
  mounted() {
    const projectsTimeline = gsap.timeline();
    projectsTimeline.from('.stagger-item', {
      duration: 0.8,
      opacity: 0,
      stagger: {
        each: 0.4,
      },
    });

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: '.projects-section',
      triggerHook: 0.6,
    })
      .setTween(projectsTimeline)
      .reverse(false)
      .addTo(controller);
  },
  data() {
    return {
      projects: [
        {
          id: 'artisan',
          name: 'L\'Artisan du deux-roues',
          description: 'Website creation for a motorcycle and scooter repair shop in Paris.',
          stack: 'Vue.js, GSAP, SCSS, JavaScript, EmailJs',
          feedback: '"Henri a su faire preuve de patience et de professionnalisme en comprenant notre besoin, et a su faire preuve de pédagogie envers mon associé et moi qui n\'y connaissons rien en Web développement. Sa réactivité et son dynamisme nous on permis de mettre en ligne notre site Web dans le temps imparti qui était assez serré. Je recommande donc vivement Henri qui a su nous rendre un site hautement qualitatif, et au-dessus de nos attentes."',
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
          id: 'masques',
          name: 'Les Petits Masques Solidaires',
          description: 'Joined LPMS\'s team as front-end developer to build a platform used by +10000 users that connects people who need face masks with people who can produce some.',
          stack: 'Nuxt, Node.js, Gitlab, Javascript, i18n',
          team: true,
          link: {
            display: 'www.lespetitsmasquessolidaires.com',
            href: 'https://lespetitsmasquessolidaires.com',
          },
          images: [
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1588154374/portfolio-website/projects/lpms/lpms-landing.png',
              alt: 'lpms-landing',
              main: true,
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1588154374/portfolio-website/projects/lpms/lpms-couturie%CC%80re.png',
              alt: 'lpms-place',
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1588154374/portfolio-website/projects/lpms/lpms-profile.png',
              alt: 'lpms-profile',
            },
          ],
        },
        {
          id: 'izifret',
          name: 'Izifret',
          description: 'Working at Izifret 2 years in a team of 3 developers with Agile methodology. Izifret is a company that offers digital management solutions in the transportation sector.',
          stack: 'Vue.js, JavaScript, Node.js, Django, Cypress.io, Jest',
          feedback: '"Henri a su s’adapter rapidement dans un nouvel environnement pour être pleinement autonome sur son poste. Il s’est investi avec professionnalisme dans l’ensemble des missions qui lui ont été confiées. Curieux, responsable, très impliqué,  il est naturellement doté d’un esprit critique et de synthèse. Bien intégré au sein de l\'équipe, il a également toujours su travailler de façon autonome."',
          team: true,
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
          id: 'photography',
          name: 'Charles Michel Photography',
          description: 'Website for french photographer Charles Michel to showcase his work.',
          stack: 'Vue.js, JavaScript, HTML, SCSS, Tailwind.css',
          feedback: '"Plus que satisfait par le travail fourni par Henri pour la réalisation de mon site web de photographie. Henri a été à l’écoute tout au long du projet et réactif dès que je lui demandais de faire des modifications et des ajustements. Henri n’a pas fait que suivre mes instructions, il a également été force de proposition et m’a donné bon nombre d’idées auxquelles je n’avais pas pensé. Je retravaillerai avec Henri dès que je déciderai de transformer mon site web en boutique en ligne. Encore merci à toi Henri!"',
          link: {
            display: 'www.charlesmichel-photography.com',
            href: 'https://charlesmichel-photography.com/',
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
          id: 'cocktailio',
          name: 'Cocktailio',
          description: 'I created this website about cocktail recipes using an external API for contents, made all styles and components from scratch.',
          stack: 'Vue, JavaScript, HTML, SCSS, GSAP, API',
          link: {
            display: 'www.cocktailio.netlify.app',
            href: 'https://cocktailio.netlify.app/',
          },
          images: [
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1589466128/portfolio-website/projects/cocktailio/landing.png',
              alt: 'cocktailio-landing-img',
              main: true,
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274160/portfolio-website/projects/cocktailio/modal.png',
              alt: 'cocktailio-modal-img',
            },
            {
              src: 'https://res.cloudinary.com/dcirj0x5j/image/upload/v1589466127/portfolio-website/projects/cocktailio/mobile_menu.png',
              alt: 'cocktailio-mobile-menu-img',
            },
          ],
        },
        {
          id: 'tetris',
          name: 'Space Tetris',
          description: 'First project created during Ironhack bootcamp, consisting in making an online game with JavaScript.',
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
  grid-template-columns: 489px 489px 489px;
  grid-template-rows: auto auto auto;
  grid-gap: 40px;
  padding: 50px 0;
  justify-items: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
}

@media (max-width: 1580px) {
  .projects-ctn {
    grid-template-columns: 489px 489px;
    grid-template-rows: auto auto;
    grid-gap: 30px;
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
