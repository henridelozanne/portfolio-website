<template>
  <section>
    <h1 class="presentation-header">
      Hi. I’m Henri, a front-end developer from Paris. Please take a look around!
    </h1>
    <p class="presentation-detail">
      I am passionate about building websites that improve the lives of those around me.
      I work as a freelancer for companies from any industry.
      I can either join your team physically if you’re located in Paris, or work remotely.
    </p>
    <div class="competences-ctn">
      <div @mouseenter="toggleHoveredImage('pixel-perfect')"
           @mouseleave="toggleHoveredImage('pixel-perfect')">
        <img v-if="!hovered['pixel-perfect']" src="../../assets/pixel-perfect-code.png"
             alt="pixel-perfect-code img">
        <img v-else src="../../assets/pixel-perfect-code-h.png" alt="pixel-perfect-code img">
        <p>Pixel perfect code</p>
      </div>
      <div @mouseenter="toggleHoveredImage('responsive')"
           @mouseleave="toggleHoveredImage('responsive')">
        <img v-if="!hovered.responsive" src="../../assets/responsive-design.png"
             alt="responsive-design-img">
        <img v-else src="../../assets/responsive-design-h.png" alt="responsive-design-img">
        <p>Responsive design</p>
      </div>
      <div @mouseenter="toggleHoveredImage('performance')"
           @mouseleave="toggleHoveredImage('performance')">
        <img v-if="!hovered.performance" src="../../assets/performance-oriented.png"
             alt="performance-oriented img">
        <img v-else src="../../assets/performance-oriented-h.png" alt="performance-oriented img">
        <p>Performance oriented</p>
      </div>
      <div @mouseenter="toggleHoveredImage('ux')"
           @mouseleave="toggleHoveredImage('ux')">
        <img v-if="!hovered.ux" src="../../assets/ux-driven-development.png"
             alt="ux-driven-development img">
        <img v-else src="../../assets/ux-driven-development-h.png" alt="ux-driven-development img">
        <p>UX driven development</p>
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
}

.presentation-header {
  margin: 0;
  color: theme('colors.primary');
}

.presentation-detail {
  color: theme('colors.custom-white');
}

.competences-ctn {
  display: flex;
  margin: auto;
}

.competences-ctn div {
  p {
    color: theme('colors.custom-white');
  }

  img {
    width: 150px;
    height: 150px;
  }
}
</style>
