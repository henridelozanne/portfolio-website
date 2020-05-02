<template>
  <div class="skill-ctn"
       :id="skill.id"
       :class="[skill.class,
                {'hovered-skill': skillIsHovered},
                skill.darkFilter ? 'dark-filter' : 'no-filter']"
       @mouseenter="mouseEnter(skill.id)" @mouseleave="mouseLeave(skill.id)">
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
    darkFilter: { type: Boolean, default: false },
  },
  methods: {
    mouseEnter(skillId) {
      const primaryColor = '#A5E9E1';
      const secondaryColor = '#388186';
      this.skillIsHovered = true;
      this.$emit('skillEnter', this.skill.name);
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
          duration: 0.4,
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
      }
    },
    mouseLeave(skillId) {
      const customWhite = '#FDF6F6';
      this.skillIsHovered = false;
      this.$emit('skillLeave');
      // Large screens
      if (window.innerWidth >= 1024) {
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
      }
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

  .hovered-img {
    // filter: invert(96%) sepia(10%) saturate(1120%) hue-rotate(102deg)
    // brightness(96%) contrast(90%);
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

.dark-filter {
  filter: brightness(65%);
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

.hovered-skill {
  // border: 5px solid theme('colors.secondary');
  // border-radius: 15px;
  // padding: 20px;

  img {
    align-self: flex-start;
  }
}

@screen md {
  .hovered-skill {
    border: unset;
    margin: 20px 0;
    padding: 0;
  }
}

@screen sm {
  .hovered-skill {
    border: unset;
    margin: 20px 0;
    padding: 0;
  }
}

@screen xs {
  .hovered-skill {
    border: unset;
    margin: 20px 0;
    padding: 0;
  }
}

.flex-rowreverse {
  flex-direction: row-reverse !important;
}
</style>
