<template>
  <div class="modal">
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
                      Website link:
                    </span>
                    <div class="underline underline-dark"></div>
                  </span>
                </div>
                <div class="list-content">
                  <a :href="project.link.href">{{ project.link.display }}</a>
                </div>
              </li>
            </ul>
          </div>
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
    background: rgba(0,0,0,.75);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content {
        height: 700px;
        color: white;
        display: flex;
        background: theme('colors.custom-black');
        margin: 0 300px;
        border-radius: 4px;

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
          }

          .small-images-ctn {
              display: flex;
              justify-content: space-around;
              background: #FDF6F6;;
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
        }

        .description-ctn {
          min-width: 392px;
          text-align: center;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

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
    }
}
</style>
