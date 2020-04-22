<template>
    <h1>
        <span :class="lightBackground ? 'text-custom-black' : 'text-custom-white'">
            <span class="above">{{title}}</span>
            <div class="underline underline-bottom"
                :class="lightBackground ? 'bg-secondary' : 'bg-primary'"></div>
            <div class="underline underline-top"
                :class="lightBackground ? 'bg-primary' : 'bg-secondary'"></div>
        </span>
    </h1>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: { type: String, default: '' },
    lightBackground: { type: Boolean, default: true },
  },
};
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;

    span {
        position: relative;
        font-size: 48px;
        font-weight: 600;
        margin: 20px auto;
    }

    @screen xs {
        span {
            font-size: 36px;
        }
    }

    @screen xxs {
        span {
            font-size: 30px;
        }
    }

    .above {
        z-index: 1;
    }

    .underline {
        position: absolute;
        height: 14px;
        width: 65%;
    }

    .underline-top {
        bottom: 7px;
        right: -2px;
    }

    .underline-bottom {
        bottom: 0;
        right: -9px;
    }
}
</style>
