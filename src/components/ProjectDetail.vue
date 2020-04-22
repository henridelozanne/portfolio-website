<template>
  <div class="modal" @click="closeModal">
      <div class="modal-content">
          <div class="images-ctn">
            <div class="main-img-ctn">
              <div class="main-img-inner-ctn">
                <img class="main-img shadow" :src="mainImage.src" :alt="mainImage.alt">
              </div>
            </div>
            <div class="small-images-ctn">
                <img v-for="smallImage in smallImages"
                     :key="smallImage.src"
                     :src="smallImage.src"
                     :alt="smallImage.alt"
                     @click="setNewMainImage(smallImage)"
                     class="small-img"
                     :class="{'small-img-current': smallImage.src === mainImage.src}">
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
              <li v-if="project.feedback">
                <div class="list-label">
                  <span>
                    <span>
                      Feedback:
                    </span>
                    <div class="underline underline-dark"></div>
                  </span>
                </div>
                <div class="list-content">{{ project.feedback }}</div>
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
                  <a :href="project.link.href" target="_blank">{{ project.link.display }}</a>
                </div>
              </li>
            </ul>
          </div>
          <svg class="close-icon"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               width="24"
               height="24"
               @click="$emit('closeDetail')">
            <path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95
            4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414
            4.95-4.95-4.95-4.95L7.05 5.636z"/>
          </svg>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  props: {
    project: { type: Object },
  },
  mounted() {
    [this.mainImage] = this.project.images.filter((img) => img.main);
    this.smallImages = this.project.images;
  },
  data() {
    return {
      mainImage: {
        src: undefined,
        alt: undefined,
      },
      smallImages: [],
    };
  },
  methods: {
    closeModal(clickEvent) {
      if (clickEvent.target.className === 'modal') {
        this.$emit('closeDetail');
      }
    },
    setNewMainImage(payload) {
      this.mainImage = payload;
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,.9);
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
    background: theme('colors.custom-black');
    margin: 0 auto;
    border-radius: 4px;
    position: relative;
    max-width: 1200px;

    .images-ctn {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border: 10px solid theme('colors.custom-black');
      background: white;
      border-radius: 4px;

      .main-img-ctn {
        padding: 50px 20px;

        .main-img-inner-ctn {
          height: 100%;
          width: 700px;
          display: flex;
          justify-content: center;

          .main-img {
            max-height: 350px;
            box-shadow: 2px 4px 10px rgba(0,0,0,.4);
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
        background: theme('colors.custom-beige');;;
        padding: 20px 0;
        width: 100%;
        border-top: 1px solid black;
        border-bottom: 1px solid black;

        .small-img {
          height: 100px;
          box-shadow: 2px 4px 10px rgba(0,0,0,.4);
          cursor: pointer;
        }

        .small-img-current {
          padding-top: 4px;
          padding-bottom: 4px;
          border-top: 4px solid theme('colors.secondary');
          border-bottom: 4px solid theme('colors.secondary');
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
        background: theme('colors.primary');
      }

      .underline-dark {
        background: theme('colors.secondary');
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
      fill: theme('colors.custom-beige');
      width: 27px;
      height: 27px;
      cursor: pointer;
    }

    @screen lg {
      .close-icon {
        background: #2E2B2B;
      }
    }

    @screen md {
      .close-icon {
        background: #2E2B2B;
      }
    }

    @screen sm {
      .close-icon {
        background: #2E2B2B;
      }
    }

    @screen xs {
      .close-icon {
        background: #2E2B2B;
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
  }
}
</style>
