<template>
  <div class="skill-ctn">
    <h3>{{name}}</h3>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'SkillItem',
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
};
</script>

<style lang="scss">
.skill-ctn {
  color: theme('colors.custom-white');
}
</style>
