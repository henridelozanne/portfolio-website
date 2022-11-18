<template>
  <div
    class="project-item shadow"
    @mouseenter="toggleHoveredProject"
    @mouseleave="toggleHoveredProject"
  >
    <div class="img-ctn">
      <img :src="mainImageSrc" :alt="mainImageAlt" class="project-thumb" />
      <div :id="`${project.id}-hovered`" class="hovered-project">
        <span
          @click="toggleVisibleDetail"
          :id="`${project.id}-detail`"
          @mouseenter="mouseEnterDetail"
          @mouseleave="mouseLeaveDetail"
          >See more details</span
        >
      </div>
    </div>
    <h3>{{ project.name }}</h3>
    <div class="team-icon-ctn tooltip" v-if="project.team">
      <span class="tooltiptext">team work</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 0 0-.301 1.575L6 16v.086a1.492 1.492 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.259-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
        />
      </svg>
    </div>
    <project-detail v-if="detailIsVisible" :project="project" @closeDetail="closeDetail" />
  </div>
</template>

<script>
import gsap from "gsap";
import ProjectDetail from "./ProjectDetail.vue";

export default {
  name: "ProjectItem",
  props: {
    project: { type: Object }
  },
  components: {
    "project-detail": ProjectDetail
  },
  computed: {
    mainImageAlt() {
      return this.project.images.filter(img => img.main)[0].alt;
    },
    mainImageSrc() {
      return this.project.images.filter(img => img.main)[0].src;
    }
  },
  data() {
    return {
      hoveredProject: false,
      detailIsVisible: false
    };
  },
  methods: {
    closeDetail() {
      this.toggleHoveredProject();
      this.toggleVisibleDetail();
    },
    mouseEnterDetail() {
      gsap.to(`#${this.project.id}-detail`, {
        background: "rgba(120, 120, 120, .35)",
        color: "white",
        duration: 0.35
      });
    },
    mouseLeaveDetail() {
      gsap.to(`#${this.project.id}-detail`, {
        background: "rgba(0, 0, 0, 0)",
        color: "#FDF6F6",
        duration: 0.35
      });
    },
    toggleHoveredProject() {
      this.hoveredProject = !this.hoveredProject;
      if (this.hoveredProject) {
        gsap.to(`#${this.project.id}-hovered`, {
          background: "rgba(0, 0, 0, 0.6)",
          opacity: 1,
          "border-radius": "7px",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          duration: 0.55
        });
      } else {
        gsap.to(`#${this.project.id}-hovered`, {
          opacity: 0,
          duration: 0.55
        });
      }
    },
    toggleVisibleDetail() {
      this.detailIsVisible = !this.detailIsVisible;
      if (this.detailIsVisible) {
        document.body.style.height = "100vh";
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.height = "unset";
        document.body.style.overflowY = "auto";
      }
    }
  }
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
  position: relative;

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
  display: none;

  span {
    color: theme("colors.custom-white");
    border: 2px solid theme("colors.primary");
    border-radius: 7px;
    padding: 5px 10px;
    cursor: pointer;
  }
}

.team-icon-ctn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  border-radius: 50%;
  padding: 7px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 100%;
  right: 40%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 1s;
  font-size: 14px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
