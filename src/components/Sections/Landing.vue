<template>
  <section>
    <div class="presentation-ctn">
      <h1 class="presentation-header">
        Hi. I’m Henri, a front-end developer from Paris. Please take a look around!
      </h1>
      <div class="presentation-detail">
        I am passionate about building websites that improve the lives of those around me.
        I work as a freelancer for companies from any industry.
        I can either join your team physically if you’re located in Paris, or work remotely.
      </div>
    </div>
    <div class="competences-ctn">
      <div @mouseenter="toggleHoveredImage('pixel-perfect')"
           @mouseleave="toggleHoveredImage('pixel-perfect')">
        <div class="img-ctn">
          <img v-if="!hovered['pixel-perfect']" src="../../assets/pixel-perfect-code.png"
                alt="pixel-perfect-code img">
          <img v-else src="../../assets/pixel-perfect-code-h.png" alt="pixel-perfect-code img">
        </div>
        <p class="competence-label">Pixel perfect code</p>
      </div>
      <div @mouseenter="toggleHoveredImage('responsive')"
           @mouseleave="toggleHoveredImage('responsive')">
        <div class="img-ctn">
          <img v-if="!hovered.responsive" src="../../assets/responsive-design.png"
             alt="responsive-design-img">
          <img v-else src="../../assets/responsive-design-h.png" alt="responsive-design-img">
        </div>
        <p class="competence-label">Responsive design</p>
      </div>
      <div @mouseenter="toggleHoveredImage('performance')"
           @mouseleave="toggleHoveredImage('performance')">
        <div class="img-ctn">
          <img v-if="!hovered.performance" src="../../assets/performance-oriented.png"
             alt="performance-oriented img">
          <img v-else src="../../assets/performance-oriented-h.png" alt="performance-oriented img">
        </div>
        <p class="competence-label">Performance oriented</p>
      </div>
      <div @mouseenter="toggleHoveredImage('ux')"
           @mouseleave="toggleHoveredImage('ux')">
        <div class="img-ctn">
          <img v-if="!hovered.ux" src="../../assets/ux-driven-development.png"
             alt="ux-driven-development img">
          <img v-else src="../../assets/ux-driven-development-h.png"
               alt="ux-driven-development img">
        </div>
        <p class="competence-label">UX driven development</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      hovered: {
        'pixel-perfect': false,
        responsive: false,
        performance: false,
        ux: false,
      },
    };
  },
  methods: {
    toggleHoveredImage(item) {
      this.hovered[item] = !this.hovered[item];
    },
  },
};
</script>

<style scoped lang="scss">
section {
  background: theme('colors.custom-black');
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 20px;
}

.presentation-ctn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .presentation-header {
    width: 520px;
    margin: 0;
    color: theme('colors.primary');
    font-weight: bold;
    font-size: 48px;
    text-align: right;
    margin-right: 50px;
  }

  @screen lg {
    .presentation-header {
      font-size: 42px;
    }
  }

  @screen md {
    .presentation-header {
      font-size: 38px;
    }
  }

  @screen sm {
    .presentation-header {
      font-size: 38px;
      margin-right: 0;
      text-align: left;
      width: 100%;
    }
  }

  @screen xs {
    .presentation-header {
      font-size: 38px;
      margin-right: 0;
      text-align: left;
      width: 100%;
    }
  }

  .presentation-detail {
    color: theme('colors.custom-white');
    width: 570px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.7em;
  }

  @screen lg {
    .presentation-detail {
      font-size: 18px;
    }
  }

  @screen md {
    .presentation-detail {
      font-size: 17px;
    }
  }

  @screen sm {
    .presentation-detail {
      font-size: 17px;
      width: 100%;
      align-self: flex-end;
      margin-top: 50px;
      text-align: right;
      padding-left: 21%;
    }
  }

  @screen xs {
    .presentation-detail {
      font-size: 17px;
      width: 100%;
      align-self: flex-end;
      margin-top: 50px;
      text-align: right;
      padding-left: 21%;
    }
  }
}

@screen sm {
  .presentation-ctn {
    align-items: flex-start;
  }
}

@screen sm {
  .presentation-ctn {
    flex-direction: column;
  }
}

@screen xs {
  .presentation-ctn {
    flex-direction: column;
  }
}

.competences-ctn {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 930px;

  div {
    .img-ctn {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 115px;
      }

      @screen lg {
        img {
          height: 100px;
        }
      }

      @screen md {
        img {
          height: 80px;
        }
      }

      @screen sm {
        img {
          height: 80px;
        }
      }

      @screen xs {
        img {
          height: 70px;
        }
      }
    }

    p {
      color: theme('colors.custom-white');
      margin-top: 15px;
      text-align: center;
    }

    @screen md {
      p {
        width: 100px;
      }
    }

    @screen sm {
      p {
        width: 100px;
      }
    }
  }
}

@screen md {
  .competences-ctn {
    width: 100%;
  }
}

@screen sm {
  .competences-ctn {
    width: 100%;
  }
}

@screen xs {
  .competences-ctn {
    display: grid;
    width: 100%;
    grid-template-columns:  1fr 1fr;
    grid-template-rows:  auto auto;
    grid-row-gap: 20px;
  }
}
</style>
