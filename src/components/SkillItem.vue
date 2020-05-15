<template>
  <div class="skill-ctn"
       :id="skill.id"
       :class="[skill.class,
                {'hovered-skill': skillIsHovered},
                {'temp-width': tempWidthOn},
                darkFilter ? 'dark-filter' : 'no-filter']"
       @click="skillClicked" @mouseenter="hoverSkill"
       @mouseleave="unhoverSkill">
    <div class="content">
      <h3 :id="`${skill.id}-title`">
          {{skill.name}}
      </h3>
      <p v-show="skillIsHovered" :id="`${skill.id}-description`" class="description">
        {{skill.description}}
      </p>
    </div>
    <img :src="`https://res.cloudinary.com/dcirj0x5j/image/upload/v1587571894/portfolio-website/Skills/${skill.imgUrl}.png`"
         :alt="skill.imgUrl" :id="`${skill.id}-img`" :class="[{'hovered-img': skillIsHovered},
         skill.class === 'right-skill' ? 'img-margin-right' : 'img-margin-left']">
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'SkillItem',
  props: {
    skill: { type: Object, default: () => {} },
    oneItemDevelopped: { type: Boolean, default: false },
  },
  watch: {
    isDevelopped() {
      if (this.isDevelopped) {
        this.developSkill(this.skill.id);
      } else this.undevelopSkill(this.skill.id);
    },
  },
  computed: {
    darkFilter() {
      return this.oneItemDevelopped && !this.isDevelopped;
    },
  },
  methods: {
    developSkill(skillId) {
      const primaryColor = '#A5E9E1';
      const secondaryColor = '#388186';
      this.skillIsHovered = true;
      this.$emit('skillDevelop', { name: this.skill.name, isDevelopped: true });
      // Large screens
      if (window.innerWidth >= 1024) {
        gsap.fromTo(`#${skillId}-img`,
          { filter: 'invert(46%) sepia(10%) saturate(2097%) hue-rotate(135deg) brightness(94%) contrast(90%)' },
          {
            filter: 'invert(96%) sepia(10%) saturate(1120%) hue-rotate(102deg) brightness(96%) contrast(90%)',
            duration: 0.7,
          });
        gsap.to(`#${skillId}`, {
          border: `5px solid ${secondaryColor}`,
          'border-radius': '15px',
          padding: '20px',
          duration: 0.5,
        });
        gsap.from(`#${skillId}-description`, {
          transform: 'scale(0.9, 0.9)',
          opacity: 0,
          duration: 0.4,
        });
        gsap.to(`#${skillId}-title`, {
          color: primaryColor,
          'text-decoration': 'none',
          duration: 1,
        });
      } else {
        // Small screens
        gsap.fromTo(`#${skillId}-img`,
          { filter: 'invert(46%) sepia(10%) saturate(2097%) hue-rotate(135deg) brightness(94%) contrast(90%)' },
          {
            filter: 'invert(96%) sepia(10%) saturate(1120%) hue-rotate(102deg) brightness(96%) contrast(90%)',
            duration: 0.7,
          });
        gsap.from(`#${skillId}-description`, {
          transform: 'scale(0.9, 0.9)',
          opacity: 0,
          duration: 0.4,
        });
        gsap.to(`#${skillId}-title`, {
          color: primaryColor,
          duration: 0.4,
        });
        gsap.to(`#${skillId}`, {
          margin: '15px 0',
          duration: 0.4,
        });
      }
    },
    hoverSkill() {
      const primaryColor = '#A5E9E1';
      if (!this.isDevelopped && !this.oneItemDevelopped) {
        gsap.to(`#${this.skill.id}-title`, {
          color: primaryColor,
          'text-decoration': 'underline',
          duration: 1,
        });
      }
    },
    unhoverSkill() {
      const customWhite = '#FDF6F6';
      if (!this.isDevelopped && !this.oneItemDevelopped) {
        this.$emit('skillDevelop', { name: this.skill.name, isDevelopped: false });
        gsap.to(`#${this.skill.id}-title`, {
          color: customWhite,
          'text-decoration': 'none',
          duration: 1,
        });
      }
    },
    undevelopSkill(skillId) {
      const customWhite = '#FDF6F6';
      this.skillIsHovered = false;
      this.$emit('skillDevelop', { name: this.skill.name, isDevelopped: false });
      // Large screens
      if (window.innerWidth >= 1024) {
        this.tempWidthOn = true;
        setTimeout(() => {
          this.tempWidthOn = false;
        }, 1000);
        gsap.fromTo(`#${skillId}-img`,
          { filter: 'invert(96%) sepia(10%) saturate(1120%) hue-rotate(102deg) brightness(96%) contrast(90%)' },
          {
            filter: 'invert(46%) sepia(10%) saturate(2097%) hue-rotate(135deg) brightness(94%) contrast(90%)',
            duration: 0.7,
          });
        gsap.to(`#${skillId}`, {
          border: 0,
          padding: 0,
          duration: 0.5,
        });
        gsap.to(`#${skillId}-title`, {
          color: customWhite,
          duration: 0.4,
        });
      } else {
        // Small screens
        gsap.fromTo(`#${skillId}-img`,
          { filter: 'invert(96%) sepia(10%) saturate(1120%) hue-rotate(102deg) brightness(96%) contrast(90%)' },
          {
            filter: 'invert(46%) sepia(10%) saturate(2097%) hue-rotate(135deg) brightness(94%) contrast(90%)',
            duration: 0.7,
          });
        gsap.to(`#${skillId}-title`, {
          color: customWhite,
          duration: 0.4,
        });
        gsap.to(`#${skillId}`, {
          margin: '0',
          duration: 0.4,
        });
      }
    },
    skillClicked() {
      const that = this;
      function handlerFunction() {
        that.isDevelopped = false;
        document.removeEventListener('click', handlerFunction);
      }
      this.isDevelopped = !this.isDevelopped;
      if (this.isDevelopped) {
        setTimeout(() => {
          document.addEventListener('click', handlerFunction);
        }, 200);
      } else {
        document.removeEventListener('click', handlerFunction);
      }
    },
  },
  data() {
    return {
      skillIsHovered: false,
      isDevelopped: false,
      tempWidthOn: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.temp-width {
  width: 35% !important;
}

.temp-width.left-skill {
  margin-left: 10%;
}

.dark-filter {
  filter: brightness(65%);
}

.flex-rowreverse {
  flex-direction: row-reverse !important;
}

.skill-ctn {
  color: theme('colors.custom-white');
  display: flex;
  flex-direction: row !important;
  justify-content: flex-end !important;
  align-items: center;
  cursor: pointer;
  width: 45%;

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

    @screen xxs {
      h3 {
        font-size: 18px;
      }
    }

    .hovered-title {
      color: theme('colors.primary') !important;
    }

    .description {
      font-size: 1.1em;
      margin-top: 10px;
    }

    @screen sm {
      .description {
        font-size: 16px;
      }
    }

    @screen xs {
      .description {
        font-size: 14px;
        margin-bottom: 10px;
      }
    }

    @screen xxs {
      .description {
        font-size: 12px;
      }
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
      height: 50px !important;
    }
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
      margin-right: 30px;
      margin-left: 0 !important;
    }
  }

  @screen xxs {
    .img-margin-left {
      margin-right: 30px;
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
      margin-left: 30px;
      margin-right: 0 !important;
    }
  }

  @screen xxs {
    .img-margin-right {
      margin-left: 30px;
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

@screen xxs {
  .left-skill {
    flex-direction: row-reverse !important;
  }
}

.right-skill {
  flex-direction: row-reverse !important;
  margin-left: 55% !important;
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

@screen xxs {
  .right-skill {
    flex-direction: row !important;
  }
}

.hovered-skill.left-skill {
  margin-left: 10%;
}

@media screen and (min-width: 1280px) and (max-width: 1400px) {
  .hovered-skill.left-skill {
    margin-left: 5%;
  }
}

@screen lg {
  .hovered-skill.left-skill {
    margin-left: 0;
  }
}

@screen md {
  .hovered-skill.left-skill {
    margin-left: 0;
  }
}

@screen sm {
  .hovered-skill.left-skill {
    margin-left: 0;
  }
}

@screen xs {
  .hovered-skill.left-skill {
    margin-left: 0;
  }
}

@screen xxs {
  .hovered-skill.left-skill {
    margin-left: 0;
  }
}


@screen sm {
  .hovered-skill.right-skill {
    margin-left: 30% !important;
  }
}

@screen xs {
  .hovered-skill.right-skill {
    margin-left: 0 !important;
  }
}

@screen xxs {
  .hovered-skill.right-skill {
    margin-left: 0 !important;
  }
}

.hovered-skill {
  width: 35%;

  img {
    align-self: flex-start;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1400px) {
  .hovered-skill {
    width: 40%;
  }
}

@screen lg {
  .hovered-skill {
    width: 50%;
  }
}

@screen md {
  .hovered-skill {
    border: unset;
    padding: 0;
    width: 50%;
  }
}

@screen sm {
  .hovered-skill {
    border: unset;
    margin: 10px 0;
    width: 70%;
    padding: 0;
  }
}

@screen xs {
  .hovered-skill {
    border: unset;
    margin: 10px 0;
    width: 100%;
    padding: 0;
  }
}

@screen xxs {
  .hovered-skill {
    border: unset;
    margin: 10px 0;
    width: 100%;
    padding: 0;
  }
}
</style>
