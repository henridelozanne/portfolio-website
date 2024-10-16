<template>
  <div class="modal" @click="backgroundClicked">
    <div class="modal-content">
      <div class="images-ctn">
        <div class="main-img-ctn">
          <div class="main-img-inner-ctn">
            <img class="main-img shadow" :src="mainImage.src" :alt="mainImage.alt" />
          </div>
        </div>
        <div class="small-images-ctn">
          <img
            v-for="smallImage in smallImages"
            :key="smallImage.src"
            :src="smallImage.src"
            :alt="smallImage.alt"
            @click="setNewMainImage(smallImage)"
            class="small-img"
            :class="{ 'small-img-current': smallImage.src === mainImage.src }"
          />
        </div>
      </div>
      <div class="description-ctn">
        <h2>
          <span class="title-ctn">
            <span>
              <a :href="project.link.href">
                {{ project.name.toUpperCase() }}
              </a>
            </span>
            <div class="underline underline-light"></div>
          </span>
        </h2>
        <ul>
          <li>
            <div class="list-label">
              <span>
                <span>
                  Description:
                </span>
                <div class="underline underline-dark"></div>
              </span>
            </div>
            <div class="list-content">{{ project.description }}</div>
          </li>
          <li>
            <div class="list-label">
              <span>
                <span>
                  Tech stack:
                </span>
                <div class="underline underline-dark"></div>
              </span>
            </div>
            <div class="list-content">{{ project.stack }}</div>
          </li>
          <li>
            <div class="list-label">
              <span>
                <span>
                  Link:
                </span>
                <div class="underline underline-dark"></div>
              </span>
            </div>
            <div class="list-content">
              <a v-if="!project.link.deadLink" :href="project.link.href" target="_blank">
                {{ project.link.display }}
              </a>
              <span v-else>Not online anymore.</span>
            </div>
          </li>
          <li v-if="project.feedback">
            <div class="list-label">
              <span>
                <span>
                  Feedback:
                </span>
                <div class="underline underline-dark"></div>
              </span>
            </div>
            <div class="list-content feedback quote">{{ project.feedback }}</div>
          </li>
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        class="close-icon"
        @click="closeIconClicked"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 10.586l4.95-4.95 1.414 1.414-4.95
              4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414
              4.95-4.95-4.95-4.95L7.05 5.636z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

const masterTL = gsap.timeline();

export default {
  name: "ProjectDetail",
  props: {
    project: { type: Object }
  },
  created() {
    [this.mainImage] = this.project.images.filter(img => img.main);
    this.smallImages = this.project.images;
  },
  mounted() {
    masterTL.add(this.openModalTL());
    masterTL.play();
  },
  data() {
    return {
      mainImage: {
        src: undefined,
        alt: undefined
      },
      smallImages: []
    };
  },
  methods: {
    closeIconClicked() {
      this.closeModalTimeLine();
      this.emitCloseDetail();
    },
    backgroundClicked(clickEvent) {
      if (clickEvent.target.className === "modal") {
        this.closeModalTL();
        this.emitCloseDetail();
      }
    },
    closeModalTimeLine() {
      const tl = gsap.timeline();
      if (window.innerWidth > 1279) {
        tl.to(".modal-content", { opacity: 0, duration: 0.5 });
        tl.to(".modal", { opacity: 0, duration: 0.6 }, "+=0.2");
      } else {
        tl.to(".modal-content", { y: -900, duration: 0.5, ease: "Power1.easeIn" });
        tl.to(".modal", { opacity: 0, duration: 0.6 });
      }
    },
    emitCloseDetail() {
      const timeout = window.innerWidth > 1279 ? 1200 : 1400;
      setTimeout(() => {
        this.$emit("closeDetail");
      }, timeout);
    },
    setNewMainImage(payload) {
      this.mainImage = payload;
    },
    openModalTL() {
      const tl = gsap.timeline();
      if (window.innerWidth > 1279) {
        tl.from(".modal", { opacity: 0, duration: 0.5 });
        tl.from(".modal-content", { width: 0, duration: 0.5 });
        tl.from(".images-ctn", { opacity: 0, duration: 1 }, "+=0.1");
        tl.from(".main-img-inner-ctn", { opacity: 0, duration: 1.2 }, "<0.4");
        tl.from(".small-images-ctn", { opacity: 0, duration: 0.5 }, "<0.5");
        tl.from(
          ".small-img",
          {
            opacity: 0,
            y: 50,
            stagger: { each: 0.2 }
          },
          "<"
        );
        tl.from(".description-ctn", { opacity: 0, y: -50, duration: 0.5 }, "-=0.3");
        tl.from(".close-icon", { opacity: 0, duration: 1 }, "+=0.2");
      } else {
        tl.from(".modal", { opacity: 0, duration: 0.7 });
        tl.from(".modal-content", { opacity: 0, duration: 0.7 }, "<");
        tl.from(".images-ctn", { opacity: 0, duration: 0.6 }, "+=0.5");
        tl.from(
          ".description-ctn",
          {
            opacity: 0,
            y: 90,
            duration: 0.5,
            ease: "Power1.easeOut"
          },
          "<0.5"
        );
        tl.from(".close-icon", { opacity: 0, duration: 1 });
      }
      return tl;
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    max-height: 700px;
    color: white;
    display: flex;
    background: theme("colors.custom-black");
    margin: 0 auto;
    border-radius: 4px;
    position: relative;
    max-width: 1200px;

    .images-ctn {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border: 10px solid theme("colors.custom-black");
      background: white;
      border-radius: 4px;

      .main-img-ctn {
        padding: 50px 20px;
        overflow: hidden;

        .main-img-inner-ctn {
          height: 100%;
          width: 700px;
          display: flex;
          justify-content: center;

          .main-img {
            max-height: 350px;
            box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4);
          }
        }

        @screen lg {
          .main-img-inner-ctn {
            width: 100%;
          }
        }

        @screen md {
          .main-img-inner-ctn {
            width: 100%;
          }
        }

        @screen sm {
          .main-img-inner-ctn {
            width: 100%;
          }
        }

        @screen xs {
          .main-img-inner-ctn {
            width: 100%;
          }
        }
      }

      @screen lg {
        .main-img-ctn {
          padding: 0;
        }
      }

      @screen md {
        .main-img-ctn {
          padding: 0;
        }
      }

      @screen sm {
        .main-img-ctn {
          padding: 0;
        }
      }

      @screen xs {
        .main-img-ctn {
          padding: 0;
        }
      }

      .small-images-ctn {
        display: flex;
        justify-content: space-around;
        background: theme("colors.custom-beige");
        padding: 20px 0;
        width: 100%;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        overflow: hidden;

        .small-img {
          height: 100px;
          box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4);
          cursor: pointer;
        }

        .small-img-current {
          padding-top: 4px;
          padding-bottom: 4px;
          border-top: 4px solid theme("colors.secondary");
          border-bottom: 4px solid theme("colors.secondary");
          box-shadow: unset;
        }
      }

      @screen lg {
        .small-images-ctn {
          display: none;
        }
      }

      @screen md {
        .small-images-ctn {
          display: none;
        }
      }

      @screen sm {
        .small-images-ctn {
          display: none;
        }
      }

      @screen xs {
        .small-images-ctn {
          display: none;
        }
      }
    }

    .description-ctn {
      min-width: 392px;
      text-align: center;
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow: scroll;

      @screen lg {
        h2 {
          margin-bottom: 40px;
        }
      }

      @screen md {
        h2 {
          margin-bottom: 40px;
        }
      }

      @screen sm {
        h2 {
          margin-bottom: 40px;
        }
      }

      @screen xs {
        h2 {
          margin-bottom: 40px;
        }
      }

      .title-ctn {
        position: relative;
      }

      .underline {
        position: absolute;
        height: 4px;
        width: 100%;
        bottom: -8px;
        left: 0;
      }

      .underline-light {
        background: theme("colors.primary");
      }

      .underline-dark {
        background: theme("colors.secondary");
      }

      h2 {
        font-weight: 600;
      }

      ul {
        height: 75%;
        overflow: scroll;
        padding: 0 0 20px;

        li {
          display: flex;
        }

        li:not(:last-of-type) {
          margin-bottom: 30px;
        }

        .list-label {
          flex-basis: 30%;
          text-align: left;
        }

        .list-label > span {
          position: relative;
        }

        .list-content {
          text-align: justify;
          flex-basis: 70%;
          margin-left: 10px;
        }

        .quote {
          padding-right: 2px;
        }
      }
    }

    @screen xs {
      .description-ctn {
        min-width: unset;
        font-size: 12px;
      }
    }

    .close-icon {
      position: absolute;
      top: 0;
      right: 0;
      fill: theme("colors.custom-beige");
      width: 27px;
      height: 27px;
      cursor: pointer;
    }

    @screen lg {
      .close-icon {
        background: #2e2b2b;
      }
    }

    @screen md {
      .close-icon {
        background: #2e2b2b;
      }
    }

    @screen sm {
      .close-icon {
        background: #2e2b2b;
      }
    }

    @screen xs {
      .close-icon {
        background: #2e2b2b;
      }
    }
  }

  @screen lg {
    .modal-content {
      flex-direction: column;
      max-width: 600px;
    }
  }

  @screen md {
    .modal-content {
      flex-direction: column;
      max-width: 600px;
    }
  }

  @screen sm {
    .modal-content {
      flex-direction: column;
      max-width: 600px;
    }
  }

  @screen xs {
    .modal-content {
      flex-direction: column;
      max-width: unset;
      margin: auto 5%;
    }

    .main-img {
      max-height: 180px !important;
    }
  }
}

.feedback {
  font-style: italic;
  padding-bottom: 23vh;
}
</style>
