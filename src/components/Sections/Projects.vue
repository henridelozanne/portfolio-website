<template>
  <section>
    <section-title :title="'Projects'" :lightBackground="true"></section-title>
  </section>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';

export default {
  name: 'Projects',
  components: {
    'section-title': SectionTitle,
  },
};
</script>

<style scoped lang="scss">
section {
  background: theme('colors.custom-grey');
}
</style>
