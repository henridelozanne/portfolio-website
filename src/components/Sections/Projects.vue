<template>
  <section class="projects-section">
    <section-title :title="'Projects'" :lightBackground="true"></section-title>
    <div class="projects-ctn">
      <project-item
        v-for="project in projects"
        :key="project.name"
        :project="project"
        class="stagger-item"
      >
      </project-item>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollMagic from "scrollmagic";
import SectionTitle from "../SectionTitle.vue";
import ProjectItem from "../ProjectItem.vue";

export default {
  name: "Projects",
  components: {
    "project-item": ProjectItem,
    "section-title": SectionTitle
  },
  mounted() {
    const projectsTimeline = gsap.timeline();
    projectsTimeline.from(".stagger-item", {
      duration: 0.8,
      opacity: 0,
      stagger: {
        each: 0.4
      }
    });

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: ".projects-section",
      triggerHook: 0.6
    })
      .setTween(projectsTimeline)
      .reverse(false)
      .addTo(controller);
  },
  data() {
    return {
      projects: [
        {
          id: "lpi",
          name: "Learning Planet Institute",
          description:
            "Frontend development of a web-application in the education sector during a one year mission. Within a team with SCRUM methodology, I developped new features and solved bugs, implemented a new design system and integrated responsive designs.",
          team: true,
          stack: "Vue.js, JavaScript, Jest, Storybook, Sass",
          feedback:
            '"Henri a bien apporté à l\'équipe, avec laquelle il s\'est bien intégré. Sérieux, efficace, agréable, avec de bonnes compétences techniques, nous retravaillerons avec lui avec plaisir."',
          link: {
            display: "LPI's Projects website",
            href: "https://projects.directory/dashboard"
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1668784004/portfolio-website/projects/lpi/Capture_d_e%CC%81cran_2022-11-18_a%CC%80_15.59.53.png",
              alt: "home",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1668784006/portfolio-website/projects/lpi/Capture_d_e%CC%81cran_2022-11-18_a%CC%80_16.01.43.png",
              alt: "project"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1668784005/portfolio-website/projects/lpi/Capture_d_e%CC%81cran_2022-11-18_a%CC%80_16.02.17.png",
              alt: "onboarding"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1668784005/portfolio-website/projects/lpi/Capture_d_e%CC%81cran_2022-11-18_a%CC%80_16.03.41.png",
              alt: "category"
            }
          ]
        },
        {
          id: "stack",
          name: "Stack Labs / SHLMR",
          description:
            "I worked with Stack-Labs during 9 months for their client SHLMR, the organization in charge of social housing in Reunion Island. I helped building the web-application used today by SHLMR agents to attribute accommodations to the most pertinent candidates.",
          team: true,
          stack: "Vue.js 3, TypeScript, VueX, VueRouter, Google Dialogflow, PrimeFaces, Sass",
          link: {
            display: "www.stack-labs.com",
            href: "https://stack-labs.com/"
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1635860804/portfolio-website/projects/shlmr/dossiers-en-inst.jpg",
              alt: "dossiers-en-instruction",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1635860804/portfolio-website/projects/shlmr/demande.jpg",
              alt: "demande"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1635860804/portfolio-website/projects/shlmr/pie%CC%80ces-justificatives.jpg",
              alt: "pieces-justificatives"
            }
          ]
        },
        {
          id: "xplo",
          name: "Xplo",
          description:
            "Creation of the front-end of Xplo from scratch. Along this project I developped a Leaflet map with complex features and high-level of user interaction. I linked the front to a custom API via Axios. I created all the front-end features with JS and Vue. I collaborated as well on the integration of responsive designs and on transitions and animations",
          stack:
            "Vue.js, Google Maps Places API, Moment.js, Geolocation, VueX, VueRouter, Vue-Snotify, Element-UI, Popper.js, Vue-Slick-Carousel, Sass, Axios",
          feedback:
            "\"Henri Delozanne a mené de manière très efficace le développement front de l'application web Xplo (secteur du tourisme). Son travail a été apprécié par les différents intervenants, dont la communauté d'agglomération de Paris-Saclay. Son profil lui permet de bien comprendre le besoin et de trouver des solutions techniques pertinentes.\"",
          link: {
            display: "www.xplo.fr (not online yet)",
            href: "https://xplo.fr/"
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1605894910/portfolio-website/projects/Xplo/Capture_d_e%CC%81cran_2020-11-20_a%CC%80_13.55.30.png",
              alt: "xplo-signup"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1605894890/portfolio-website/projects/Xplo/Capture_d_e%CC%81cran_2020-11-20_a%CC%80_13.57.47.png",
              alt: "xplo-main-page",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1605894953/portfolio-website/projects/Xplo/Capture_d_e%CC%81cran_2020-11-20_a%CC%80_13.56.02.png",
              alt: "xplo-add-image"
            }
          ]
        },
        {
          id: "medissimo",
          name: "Medissimo | Stats dashboard",
          description:
            "Development of a statistics dashboard for the clients of the company, in the pharmaceutical sector. I created various charts (line charts, column charts and pie charts) via AmCharts, and a series of custom tables via Element-UI. After creating all the templates, I linked the front to the API to retrieve dynamic data.",
          stack: "Vue.js, AmCharts, Element-UI, Sass",
          feedback:
            '"Très à l\'écoute et toujours disponible, Henri a su avancer dans un planning très serré et nous a aidé à faire face à des difficultés de dernière minute."',
          link: {
            display: "www.medissimo.fr",
            href: "https://medissimo.fr/"
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1605792026/portfolio-website/projects/Medissimo/Capture_d_e%CC%81cran_2020-11-19_a%CC%80_14.17.08.png",
              alt: "medissimo-activity-indicators"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1605792026/portfolio-website/projects/Medissimo/Capture_d_e%CC%81cran_2020-11-19_a%CC%80_14.06.05.png",
              alt: "medissimo-main-charts",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1605792026/portfolio-website/projects/Medissimo/Capture_d_e%CC%81cran_2020-11-19_a%CC%80_14.07.10.png",
              alt: "medissimo-table"
            }
          ]
        },
        {
          id: "trentesec",
          name: "Big Mamma - 30sec",
          description:
            "Creation of a series of integration tests for the new payment application of Big Mamma Group: 30sec.fr. Secured this web-app with a set of Cypress tests. Set-up of the test environment in a Gitlab CI. Used AppliTools to run the tests with a responsive approach, testing the app on various browsers and OS.",
          stack: "Cypress.io, AppliTools",
          feedback:
            '"Super mission en remote pour la mise en place d\'un environnement de test à base de Cypress dans une CI Gitlab. Je recommande !"',
          link: {
            display: "www.30sec.fr",
            href: "https://30sec.fr/"
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1598444386/portfolio-website/projects/30sec/Capture_d_e%CC%81cran_2020-08-26_a%CC%80_14.18.48.png",
              alt: "30sec-example-payment"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1598444386/portfolio-website/projects/30sec/Capture_d_e%CC%81cran_2020-08-26_a%CC%80_14.18.00.png",
              alt: "30sec-main-img",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1598444386/portfolio-website/projects/30sec/Capture_d_e%CC%81cran_2020-08-26_a%CC%80_14.03.56.png",
              alt: "30sec-main-smartphone"
            }
          ]
        },
        {
          id: "artisan",
          name: "L'Artisan du deux-roues",
          description: "Website creation for a motorcycle and scooter repair shop in Paris.",
          stack: "Vue.js, GSAP, SCSS, JavaScript, EmailJs",
          feedback:
            '"Henri a su faire preuve de patience et de professionnalisme en comprenant notre besoin, et a su faire preuve de pédagogie envers mon associé et moi qui n\'y connaissons rien en Web développement. Sa réactivité et son dynamisme nous on permis de mettre en ligne notre site Web dans le temps imparti qui était assez serré. Je recommande donc vivement Henri qui a su nous rendre un site hautement qualitatif, et au-dessus de nos attentes."',
          link: {
            display: "www.lartisandudeuxroues.com",
            href: "https://lartisandudeuxroues.com/"
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274088/portfolio-website/projects/lartisan-du-deux-roues/main.png",
              alt: "lartisan-du-deux-roues-main-img",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274088/portfolio-website/projects/lartisan-du-deux-roues/formules.png",
              alt: "lartisan-du-deux-roues-prices-img"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274088/portfolio-website/projects/lartisan-du-deux-roues/ou%CC%80-nous-trouver.png",
              alt: "lartisan-du-deux-roues-localization-img"
            }
          ]
        },
        {
          id: "masques",
          name: "Les Petits Masques Solidaires",
          description:
            "Joined LPMS's team as front-end developer to build a platform used by +10000 users that connects people who need face masks with people who can produce some.",
          stack: "Nuxt, Node.js, Gitlab, Javascript, i18n",
          team: true,
          link: {
            display: "www.lespetitsmasquessolidaires.com",
            href: "https://lespetitsmasquessolidaires.com"
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1588154374/portfolio-website/projects/lpms/lpms-landing.png",
              alt: "lpms-landing",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1588154374/portfolio-website/projects/lpms/lpms-couturie%CC%80re.png",
              alt: "lpms-place"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1588154374/portfolio-website/projects/lpms/lpms-profile.png",
              alt: "lpms-profile"
            }
          ]
        },
        {
          id: "izifret",
          name: "Izifret",
          description:
            "Working at Izifret 2 years in a team of 3 developers with Agile methodology. Izifret is a company that offers digital management solutions in the transportation sector.",
          stack: "Vue.js, JavaScript, Node.js, Django, Cypress.io, Jest",
          feedback:
            '"Henri a su s’adapter rapidement dans un nouvel environnement pour être pleinement autonome sur son poste. Il s’est investi avec professionnalisme dans l’ensemble des missions qui lui ont été confiées. Curieux, responsable, très impliqué,  il est naturellement doté d’un esprit critique et de synthèse. Bien intégré au sein de l\'équipe, il a également toujours su travailler de façon autonome."',
          team: true,
          link: {
            display: "www.izifret.com",
            href: "https://izifret.com/fr/"
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274125/portfolio-website/projects/izifret/main.png",
              alt: "izifret-main-img",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274124/portfolio-website/projects/izifret/dashboard.png",
              alt: "izifret-dashboard-img"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274124/portfolio-website/projects/izifret/shipments.png",
              alt: "izifret-shipments-img"
            }
          ]
        },
        {
          id: "photography",
          name: "Charles Michel Photography",
          description: "Website for french photographer Charles Michel to showcase his work.",
          stack: "Vue.js, JavaScript, HTML, SCSS, Tailwind.css",
          feedback:
            '"Plus que satisfait par le travail fourni par Henri pour la réalisation de mon site web de photographie. Henri a été à l’écoute tout au long du projet et réactif dès que je lui demandais de faire des modifications et des ajustements. Henri n’a pas fait que suivre mes instructions, il a également été force de proposition et m’a donné bon nombre d’idées auxquelles je n’avais pas pensé. Je retravaillerai avec Henri dès que je déciderai de transformer mon site web en boutique en ligne. Encore merci à toi Henri!"',
          link: {
            deadLink: true
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586272887/portfolio-website/projects/charles-michel-photography/main.png",
              alt: "charles-michel-photography-main-img",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586272886/portfolio-website/projects/charles-michel-photography/desktop-contact.png",
              alt: "charles-michel-photography-contact-img"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586272886/portfolio-website/projects/charles-michel-photography/mobile-home-page.png",
              alt: "charles-michel-photography-mobile-img"
            }
          ]
        },
        {
          id: "cocktailio",
          name: "Cocktailio",
          description:
            "I created this website about cocktail recipes using an external API for contents, made all styles and components from scratch.",
          stack: "Vue, JavaScript, HTML, SCSS, GSAP, API",
          link: {
            display: "www.cocktailio.netlify.app",
            href: "https://cocktailio.netlify.app/"
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1589466128/portfolio-website/projects/cocktailio/landing.png",
              alt: "cocktailio-landing-img",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274160/portfolio-website/projects/cocktailio/modal.png",
              alt: "cocktailio-modal-img"
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1589466127/portfolio-website/projects/cocktailio/mobile_menu.png",
              alt: "cocktailio-mobile-menu-img"
            }
          ]
        },
        {
          id: "tetris",
          name: "Space Tetris",
          description:
            "First project created during Ironhack bootcamp, consisting in making an online game with JavaScript.",
          stack: "JavaScript, HTML, CSS",
          link: {
            display: "www.space-tetris.com",
            href: "https://space-tetris.netlify.com/"
          },
          images: [
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274161/portfolio-website/projects/space-tetris/main.png",
              alt: "space-tetris-main-img",
              main: true
            },
            {
              src:
                "https://res.cloudinary.com/dcirj0x5j/image/upload/v1586274160/portfolio-website/projects/space-tetris/commands.png",
              alt: "space-tetris-commands-img"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
section {
  background: theme("colors.custom-grey");
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
