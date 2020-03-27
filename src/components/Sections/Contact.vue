<template>
  <section>
    <h2 class="text-custom-black">Let's get in touch</h2>
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
export default {
  name: 'Contact',
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
