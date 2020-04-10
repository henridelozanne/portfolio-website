<template>
  <div class="project-item shadow"
       @mouseenter="toggleHoveredProject"
       @mouseleave="toggleHoveredProject">
      <div class="img-ctn">
        <img :src="mainImageSrc" :alt="mainImageAlt" class="project-thumb">
        <div class="hovered-project" v-if="hoveredProject">
            <span @click="toggleVisibleDetail">See more details</span>
        </div>
      </div>
      <h3>{{ project.name }}</h3>
      <project-detail v-if="detailIsVisible"
                      :project="project"
                      @closeDetail="closeDetail" />
  </div>
</template>

<script>
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
    toggleHoveredProject() {
      this.hoveredProject = !this.hoveredProject;
    },
    toggleVisibleDetail() {
      this.detailIsVisible = !this.detailIsVisible;
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
    }

    h3 {
        margin-top: 20px;
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
    background: rgba(0,0,0,.6);
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        color: theme('colors.custom-white');
        border: 2px solid theme('colors.primary');
        border-radius: 7px;
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
            background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
            color: white;
        }
    }
}
</style>