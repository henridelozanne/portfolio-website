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
      <div>
        <img src="../../assets/pixel-perfect-code.png" alt="pixel-perfect-code img">
        <p>Pixel perfect code</p>
      </div>
      <div>
        <img src="../../assets/responsive-design.png" alt="responsive-design-img">
        <p>Responsive design</p>
      </div>
      <div>
        <img src="../../assets/performance-oriented.png" alt="performance-oriented img">
        <p>Performance oriented</p>
      </div>
      <div>
        <img src="../../assets/ux-driven-development.png" alt="ux-driven-development img">
        <p>UX driven development</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Landing',
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
