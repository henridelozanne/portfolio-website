<template>
  <div class="skill-ctn"
       :class="{'flex-rowreverse': position === 'right', 'border-visible': skillIsHovered}"
       @mouseenter="toggleDescription" @mouseleave="toggleDescription">
    <div class="content">
      <h3 :class="{'text-primary': skillIsHovered}">{{name}}</h3>
      <p v-show="skillIsHovered" class="description">{{description}}</p>
    </div>
    <!-- FIXME: Factor by using a dynamic src -->
    <img v-if="name==='Vue.js'" src="../assets/skills-logos/vue-logo.png"
         alt="vuejs-logo" :class="[{'hovered-img': skillIsHovered},
         position === 'right' ? 'img-margin-right' : 'img-margin-left']">
    <img v-else-if="name==='Javascript'" src="../assets/skills-logos/javascript-logo.png"
         alt="javascript-logo" :class="[{'hovered-img': skillIsHovered},
         position === 'right' ? 'img-margin-right' : 'img-margin-left']">
    <img v-else-if="name==='HTML/SCSS'" src="../assets/skills-logos/html-logo.png"
         alt="html-logo" :class="[{'hovered-img': skillIsHovered},
         position === 'right' ? 'img-margin-right' : 'img-margin-left']">
    <img v-else-if="name==='Testing'" src="../assets/skills-logos/cypress-logo.png"
         alt="testing-logo" :class="[{'hovered-img': skillIsHovered},
         position === 'right' ? 'img-margin-right' : 'img-margin-left']">
    <img v-else-if="name==='API'" src="../assets/skills-logos/api-logo.png"
         alt="api-logo" :class="[{'hovered-img': skillIsHovered},
         position === 'right' ? 'img-margin-right' : 'img-margin-left']">
    <img v-else-if="name==='UI Toolkits'" src="../assets/skills-logos/element-ui-logo.png"
         alt="element-ui-logo" :class="[{'hovered-img': skillIsHovered},
         position === 'right' ? 'img-margin-right' : 'img-margin-left']">
  </div>
</template>

<script>
export default {
  name: 'SkillItem',
  props: {
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    position: { type: String, default: '' },
  },
  methods: {
    toggleDescription() {
      this.skillIsHovered = !this.skillIsHovered;
    },
  },
  data() {
    return {
      skillIsHovered: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.skill-ctn {
  color: theme('colors.custom-white');
  display: flex;
  flex-direction: row !important;
  justify-content: flex-end !important;
  align-items: center;
  padding: 0 20px;

  .content {

    h3 {
      font-weight: 600;
      font-size: 28px;
    }

    .description {
      font-size: 1.1em;
      margin-top: 10px;
    }
  }

  img {
    filter: invert(46%) sepia(10%) saturate(2097%)
    hue-rotate(135deg) brightness(94%) contrast(90%);
    height: 100px !important;
  }

  .hovered-img {
    filter: invert(96%) sepia(10%) saturate(1120%) hue-rotate(102deg)
    brightness(96%) contrast(90%);
  }

  .img-margin-left {
    margin-left: 50px;
  }

  .img-margin-right {
    margin-right: 50px;
  }
}

.border-visible {
  border: 5px solid theme('colors.secondary');
  border-radius: 15px;
}

.flex-rowreverse {
  flex-direction: row-reverse !important;
}
</style>
