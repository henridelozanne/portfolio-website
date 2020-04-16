<template>
  <div class="skill-ctn"
       :class="[skill.class, {'border-visible': skillIsHovered}]"
       @mouseenter="toggleDescription" @mouseleave="toggleDescription">
    <div class="content">
      <h3 :class="{'text-primary': skillIsHovered}">{{skill.name}}</h3>
      <p v-show="skillIsHovered" class="description">{{skill.description}}</p>
    </div>
    <!-- FIXME: Factor by using a dynamic src -->
    <img v-if="skill.name==='Vue.js'" src="../assets/skills-logos/vue-logo.png"
         alt="vuejs-logo" :class="[{'hovered-img': skillIsHovered},
         skill.class === 'right-skill' ? 'img-margin-right' : 'img-margin-left']">
    <img v-else-if="skill.name==='Javascript'" src="../assets/skills-logos/javascript-logo.png"
         alt="javascript-logo" :class="[{'hovered-img': skillIsHovered},
         skill.class === 'right-skill' ? 'img-margin-right' : 'img-margin-left']">
    <img v-else-if="skill.name==='HTML/SCSS'" src="../assets/skills-logos/html-logo.png"
         alt="html-logo" :class="[{'hovered-img': skillIsHovered},
         skill.class === 'right-skill' ? 'img-margin-right' : 'img-margin-left']">
    <img v-else-if="skill.name==='Testing'" src="../assets/skills-logos/cypress-logo.png"
         alt="testing-logo" :class="[{'hovered-img': skillIsHovered},
         skill.class === 'right-skill' ? 'img-margin-right' : 'img-margin-left']">
    <img v-else-if="skill.name==='API use'" src="../assets/skills-logos/api-logo.png"
         alt="api-logo" :class="[{'hovered-img': skillIsHovered},
         skill.class === 'right-skill' ? 'img-margin-right' : 'img-margin-left']">
    <img v-else-if="skill.name==='UI Toolkits'" src="../assets/skills-logos/element-ui-logo.png"
         alt="element-ui-logo" :class="[{'hovered-img': skillIsHovered},
         skill.class === 'right-skill' ? 'img-margin-right' : 'img-margin-left']">
  </div>
</template>

<script>
export default {
  name: 'SkillItem',
  props: {
    skill: { type: Object, default: () => {} },
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

  .content {

    h3 {
      font-weight: 600;
      font-size: 28px;
    }

    @screen sm {
      h3 {
        font-size: 24px;
      }
    }

    @screen xs {
      h3 {
        font-size: 22px;
      }
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

  @screen sm {
    img {
      height: 80px !important;
    }
  }

  @screen xs {
    img {
      height: 70px !important;
    }
  }

  .hovered-img {
    filter: invert(96%) sepia(10%) saturate(1120%) hue-rotate(102deg)
    brightness(96%) contrast(90%);
  }

  .img-margin-left {
    margin-left: 50px;
  }

  @screen md {
    .img-margin-left {
      margin-right: 50px;
      margin-left: 0 !important;
    }
  }

  @screen sm {
    .img-margin-left {
      margin-right: 50px;
      margin-left: 0 !important;
    }
  }

  @screen xs {
    .img-margin-left {
      margin-right: 50px;
      margin-left: 0 !important;
    }
  }

  .img-margin-right {
    margin-right: 50px;
  }
}

  @screen md {
    .img-margin-right {
      margin-left: 50px;
      margin-right: 0 !important;
    }
  }

  @screen sm {
    .img-margin-right {
      margin-left: 50px;
      margin-right: 0 !important;
    }
  }

  @screen xs {
    .img-margin-right {
      margin-left: 50px;
      margin-right: 0 !important;
    }
  }

.left-skill {
  flex-direction: row !important;
}

@screen md {
  .left-skill {
    flex-direction: row-reverse !important;
  }
}

@screen sm {
  .left-skill {
    flex-direction: row-reverse !important;
  }
}

@screen xs {
  .left-skill {
    flex-direction: row-reverse !important;
  }
}

.right-skill {
  flex-direction: row-reverse !important;
}

@screen md {
  .right-skill {
    flex-direction: row !important;
  }
}

@screen sm {
  .right-skill {
    flex-direction: row !important;
  }
}

@screen xs {
  .right-skill {
    flex-direction: row !important;
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
