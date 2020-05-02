<template>
  <div class="project-item shadow"
       @mouseenter="toggleHoveredProject"
       @mouseleave="toggleHoveredProject">
      <div class="img-ctn">
        <img :src="mainImageSrc" :alt="mainImageAlt" class="project-thumb">
        <div :id="`${project.id}-hovered`" class="hovered-project" v-show="hoveredProject">
            <span @click="toggleVisibleDetail" :id="`${project.id}-detail`"
                  @mouseenter="mouseEnterDetail"
                  @mouseleave="mouseLeaveDetail">See more details</span>
        </div>
      </div>
      <h3>{{ project.name }}</h3>
      <project-detail v-if="detailIsVisible"
                      :project="project"
                      @closeDetail="closeDetail" />
  </div>
</template>

<script>
import gsap from 'gsap';
import ProjectDetail from './ProjectDetail.vue';

export default {
  name: 'ProjectItem',
  props: {
    project: { type: Object },
  },
  components: {
    'project-detail': ProjectDetail,
  },
  computed: {
    mainImageAlt() {
      return this.project.images.filter((img) => img.main)[0].alt;
    },
    mainImageSrc() {
      return this.project.images.filter((img) => img.main)[0].src;
    },
  },
  data() {
    return {
      hoveredProject: false,
      detailIsVisible: false,
    };
  },
  methods: {
    closeDetail() {
      this.toggleHoveredProject();
      this.toggleVisibleDetail();
    },
    mouseEnterDetail() {
      gsap.to(`#${this.project.id}-detail`, {
        background: '#353535',
        color: 'white',
        duration: 0.35,
      });
    },
    mouseLeaveDetail() {
      gsap.to(`#${this.project.id}-detail`, {
        background: 'transparent',
        color: '#FDF6F6',
        duration: 0.35,
      });
    },
    toggleHoveredProject() {
      this.hoveredProject = !this.hoveredProject;
      if (this.hoveredProject) {
        gsap.to(`#${this.project.id}-hovered`, {
          background: 'rgba(0, 0, 0, 0.6)',
          opacity: 1,
          'border-radius': '7px',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          duration: 0.55,
        });
      } else {
        gsap.to(`#${this.project.id}-hovered`, {
          opacity: 0,
          duration: 0.35,
        });
      }
    },
    toggleVisibleDetail() {
      this.detailIsVisible = !this.detailIsVisible;
      if (this.detailIsVisible) {
        document.body.style.height = '100vh';
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.height = 'unset';
        document.body.style.overflowY = 'auto';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.project-item {
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;

    .project-thumb {
        width: 450px;
        height: 247px;
        border-radius: 3px;
        object-fit: cover;
        object-position: 0 0;
    }

    @screen xs {
      .project-thumb {
        height: 158px;
      }
    }

    h3 {
        margin-top: 20px;
    }

    @screen xs {
      h3 {
        margin-top: 10px;
      }
    }
}

@screen xs {
  .project-item {
    padding: 10px;
  }
}

@screen xxs {
  .project-item {
    padding: 5px;
  }
}

.img-ctn {
    position: relative;
}

.hovered-project {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: rgba(0,0,0,.6);
    // border-radius: 7px;
    // display: flex;
    // justify-content: center;
    // align-items: center;

    span {
        color: theme('colors.custom-white');
        border: 2px solid theme('colors.primary');
        border-radius: 7px;
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
            // background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
            // color: white;
        }
    }
}
</style>
