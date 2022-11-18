<template>
  <div class="notification shadow" :class="notifType === 'success' ? 'success' : 'error'">
    <img v-if="notifType === 'success'" src="../assets/success.png" alt="error-img" />
    <img v-else-if="notifType === 'error'" src="../assets/error.png" alt="error-img" />
    <div class="content">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    notifType: { type: String, default: "" },
    message: { type: String, default: "" }
  }
};
</script>

<style lang="scss">
.notification {
  position: fixed;
  top: 1em;
  right: 1em;
  background-blend-mode: screen;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  z-index: 2;

  img {
    width: 25px;
    margin-right: 1em;
  }

  .content {
    max-width: 230px;
    font-size: 0.9em;
  }
}

.success {
  background-image: linear-gradient(-225deg, #fffeff 0%, #d7fffe 100%);
  border: 1px solid theme("colors.secondary");
}

.error {
  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%),
    radial-gradient(91% 146%, rgba(255, 255, 255, 0.5) 47%, rgba(0, 0, 0, 0.5) 100%);
  border: 1px solid #d75a4a;
}
</style>
