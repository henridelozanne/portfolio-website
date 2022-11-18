<template>
  <section>
    <div class="presentation-ctn">
      <h1 class="presentation-header">
        Hi. I’m Henri, a front-end developer from Paris. Please take a look around!
      </h1>
      <div class="presentation-detail">
        Imagine transforming your ideas into an innovative and tailor-made website! <br />
        Passionate about programming, I can help you concretizing your concept into a digital
        solution with flexibility and adaptation to your workflow. <br />
        <div class="lets-build">Let’s build something great together!</div>
      </div>
    </div>
    <div class="competences-ctn">
      <div
        class="first"
        @mouseenter="mouseEnter('.first-img')"
        @mouseleave="mouseLeave('.first-img')"
      >
        <div class="img-ctn">
          <img
            src="https://res.cloudinary.com/dcirj0x5j/image/upload/v1587576027/portfolio-website/Landing/pixel-perfect.png"
            alt="pixel-perfect-code img"
            class="first-img"
          />
        </div>
        <p class="competence-label">Pixel perfect code</p>
      </div>
      <div
        class="second"
        @mouseenter="mouseEnter('.second-img')"
        @mouseleave="mouseLeave('.second-img')"
      >
        <div class="img-ctn">
          <img
            src="https://res.cloudinary.com/dcirj0x5j/image/upload/v1587576027/portfolio-website/Landing/responsive.png"
            alt="responsive-design-img"
            class="second-img"
          />
        </div>
        <p class="competence-label">Responsive design</p>
      </div>
      <div
        class="third"
        @mouseenter="mouseEnter('.third-img')"
        @mouseleave="mouseLeave('.third-img')"
      >
        <div class="img-ctn">
          <img
            src="https://res.cloudinary.com/dcirj0x5j/image/upload/v1587576027/portfolio-website/Landing/performance.png"
            alt="performance-oriented img"
            class="third-img"
          />
        </div>
        <p class="competence-label">Performance oriented</p>
      </div>
      <div
        class="fourth"
        @mouseenter="mouseEnter('.fourth-img')"
        @mouseleave="mouseLeave('.fourth-img')"
      >
        <div class="img-ctn">
          <img
            src="https://res.cloudinary.com/dcirj0x5j/image/upload/v1587576027/portfolio-website/Landing/user-experience.png"
            alt="ux-driven-development img"
            class="fourth-img"
          />
        </div>
        <p class="competence-label">UX driven development</p>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";

const masterTL = gsap.timeline();

export default {
  name: "Landing",
  mounted() {
    masterTL.add(this.textTL());
    masterTL.add(this.skillsTL());
    masterTL.play();
  },
  data() {
    return {
      hovered: {
        "pixel-perfect": false,
        responsive: false,
        performance: false,
        ux: false
      }
    };
  },
  methods: {
    textTL() {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.from(".presentation-header", {
        duration: 1,
        x: -200,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)"
      });
      tl.from(
        ".presentation-detail",
        {
          duration: 1.2,
          x: 100,
          opacity: 0,
          ease: "slow(0.7, 0.7, false)"
        },
        "=-.2"
      );
      return tl;
    },
    mouseEnter(img) {
      gsap.fromTo(
        img,
        {
          filter:
            "invert(46%) sepia(10%) saturate(2097%) hue-rotate(135deg) brightness(94%) contrast(90%)"
        },
        {
          filter:
            "invert(96%) sepia(10%) saturate(1120%) hue-rotate(102deg) brightness(96%) contrast(90%)",
          duration: 0.7
        }
      );
    },
    mouseLeave(img) {
      gsap.to(img, {
        duration: 0.7,
        filter:
          "invert(46%) sepia(10%) saturate(2097%) hue-rotate(135deg) brightness(94%) contrast(90%)"
      });
    },
    skillsTL() {
      const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" }, delay: 0.2 });
      tl.from(".first", { opacity: 0, y: 50 });
      tl.from(".second", { opacity: 0, y: 50 }, "<.2");
      tl.from(".third", { opacity: 0, y: 50 }, "<.2");
      tl.from(".fourth", { opacity: 0, y: 50 }, "<.2");
      return tl;
    },
    toggleHoveredImage(item) {
      this.hovered[item] = !this.hovered[item];
    }
  }
};
</script>

<style scoped lang="scss">
section {
  background: theme("colors.custom-black");
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 20px;
}

.presentation-ctn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .presentation-header {
    width: 520px;
    margin: 0;
    color: theme("colors.primary");
    font-weight: bold;
    font-size: 48px;
    text-align: right;
    margin-right: 50px;
  }

  @screen lg {
    .presentation-header {
      font-size: 42px;
    }
  }

  @screen md {
    .presentation-header {
      font-size: 38px;
    }
  }

  @screen sm {
    .presentation-header {
      font-size: 38px;
      margin-right: 0;
      text-align: left;
      width: 100%;
    }
  }

  @screen xs {
    .presentation-header {
      font-size: 28px;
      margin-right: 0;
      text-align: left;
      width: 100%;
    }
  }

  @screen xxs {
    .presentation-header {
      font-size: 24px;
      margin-right: 0;
      text-align: left;
      width: 100%;
    }
  }

  .presentation-detail {
    color: theme("colors.custom-white");
    width: 570px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.7em;
  }

  @screen lg {
    .presentation-detail {
      font-size: 18px;
    }
  }

  @screen md {
    .presentation-detail {
      font-size: 17px;
    }
  }

  @screen sm {
    .presentation-detail {
      font-size: 17px;
      width: 100%;
      align-self: flex-end;
      margin-top: 50px;
      text-align: right;
      padding-left: 21%;
    }
  }

  @screen xs {
    .presentation-detail {
      font-size: 13px;
      width: 100%;
      align-self: flex-end;
      margin-top: 30px;
      text-align: right;
      padding-left: 21%;
    }
  }

  @screen xxs {
    .presentation-detail {
      font-size: 11px;
      width: 100%;
      align-self: flex-end;
      margin-top: 30px;
      text-align: right;
      padding-left: 21%;
    }
  }
}

@screen sm {
  .presentation-ctn {
    align-items: flex-start;
  }
}

@screen sm {
  .presentation-ctn {
    flex-direction: column;
  }
}

@screen xs {
  .presentation-ctn {
    flex-direction: column;
  }
}

.competences-ctn {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 930px;

  div {
    .img-ctn {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 115px;
        filter: invert(46%) sepia(10%) saturate(2097%) hue-rotate(135deg) brightness(94%)
          contrast(90%);
      }

      @screen lg {
        img {
          height: 100px;
        }
      }

      @screen md {
        img {
          height: 80px;
        }
      }

      @screen sm {
        img {
          height: 80px;
        }
      }

      @screen xs {
        img {
          height: 45px;
        }
      }

      @screen 374 {
        img {
          height: 38px;
        }
      }

      @screen xxs {
        img {
          height: 35px;
        }
      }
    }

    p {
      color: theme("colors.custom-white");
      margin-top: 15px;
      text-align: center;
    }

    @screen md {
      p {
        width: 100px;
      }
    }

    @screen sm {
      p {
        width: 100px;
      }
    }
  }
}

@screen md {
  .competences-ctn {
    width: 100%;
  }
}

@screen sm {
  .competences-ctn {
    width: 100%;
  }
}

@screen xs {
  .competences-ctn {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 20px;

    .competence-label {
      font-size: 12px;
    }
  }
}

@screen xxs {
  .competences-ctn {
    .competence-label {
      font-size: 10px;
    }
  }
}

.lets-build {
  margin-top: 8px;
}
</style>
