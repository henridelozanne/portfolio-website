<template>
  <div class="modal">
      <div class="modal-content">
          <div class="images-ctn">
            <div class="main-img-ctn">
              <div class="main-img-inner-ctn">
                <div class="fake-main-img shadow"></div>
              </div>
            </div>
            <div class="small-images-outer-ctn">
              <div class="small-images-ctn">
                <div class="fake-small-img"></div>
                <div class="fake-small-img"></div>
                <div class="fake-small-img"></div>
              </div>
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
};
</script>

<style scoped lang="scss">
.modal {
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content {
        height: 700px;
        color: white;
        display: flex;
        background: theme('colors.custom-black');
        margin: 0 300px;

        .images-ctn {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;

          .main-img-ctn {
            background: white;
            padding: 50px 20px;

            .main-img-inner-ctn {
              height: 100%;
              display: flex;
              align-items: center;
            }

            .fake-main-img {
              width: 700px;
              height: 350px;
              background: teal;
            }
          }

          .small-images-outer-ctn {
            background: white;
            height: 100%;
            display: flex;
            align-items: center;

            .small-images-ctn {
              display: flex;
              justify-content: space-around;
              background: #FDF6F6;;
              padding: 20px 0;
              width: 100%;
              border-top: 1px solid black;
              border-bottom: 1px solid black;

              .fake-small-img {
                width: 130px;
                height: 100px;
                background: teal;
              }
            }
          }
        }

        .description-ctn {
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
