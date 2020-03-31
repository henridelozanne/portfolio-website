<template>
  <section>
    <section-title :title="'Let\'s get in touch'" :lightBackground="true"></section-title>

    <form action="">
      <input placeholder="name" type="text">
      <input placeholder="email" type="text">
      <input placeholder="subject" type="text">
      <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
      <button class="send-button">Send</button>
    </form>
  </section>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';

export default {
  name: 'Contact',
  components: {
    'section-title': SectionTitle,
  },
};
</script>

<style scoped lang="scss">
section {
  background: theme('colors.custom-grey');
}

form {
  input, textarea {
    border: 2px solid theme('colors.custom-grey-dark');
  }

  .send-button {
    color: theme('colors.custom-white');
    background: theme('colors.secondary');
  }
}
</style>
