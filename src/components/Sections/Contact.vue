<template>
  <section>
    <section-title :title="'Let\'s get in touch'" :lightBackground="true"></section-title>

    <div class="form-ctn">
      <form v-on:submit.prevent>
        <input placeholder="Name *" type="text" class="shadow"
               @blur="onBlur('name')" v-model="name">
        <span class="error-msg" v-if="error.name">Name is a required field.</span>
        <input placeholder="Email *" type="text" class="shadow"
               @blur="onBlur('email')" v-model="email">
        <span class="error-msg" v-if="error.emailRequired">Email is a required field.</span>
        <span class="error-msg" v-else-if="error.emailIncorrect">
          The email format is incorrect.
        </span>
        <input placeholder="Subject" type="text" class="shadow"
               @blur="onBlur('subject')" v-model="subject">
        <textarea name="" id="" cols="30" rows="10" placeholder="Message *"
                  @blur="onBlur('message')" v-model="message" class="shadow"></textarea>
        <span class="error-msg" v-if="error.message">Message is a required field.</span>
        <button class="send-button" @click="sendMail">Send</button>
      </form>
    </div>
    <notification v-if="notificationIsVisible"
    :message="notifMessage" :notifType="notifType"/>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import SectionTitle from '../SectionTitle.vue';
import Notification from '../Notification.vue';

export default {
  name: 'Contact',
  components: {
    'section-title': SectionTitle,
    notification: Notification,
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      notifMessage: 'Please fill in all required fields before sending.',
      notifType: '',
      notificationIsVisible: false,
      error: {
        name: false,
        emailRequired: false,
        emailIncorrect: false,
        message: false,
      },
      impossibleToSendMail: false,
    };
  },
  methods: {
    onBlur(input) {
      switch (input) {
        case 'name':
          this.validateName();
          break;
        case 'email':
          this.validateEmail();
          break;
        case 'message':
          this.validateMessage();
          break;
        // eslint-disable-next-line
        default: () => {};
      }
    },
    resetFields() {
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    },
    sendMail() {
      this.validateEmail();
      this.validateMessage();
      this.validateName();
      const noErrors = Object.values(this.error).every((item) => item === false);
      if (noErrors) {
        const templateParams = {
          name: this.name,
          subject: this.subject,
          message: this.message,
          email: this.email,
        };
        emailjs
          .send('default_service',
            'personnal_portfolio',
            templateParams,
            'user_budaC2tozA2cUUxQ2SI7M')
          .then(() => {
            this.resetFields();
            this.notifMessage = 'Message sent ! Thanks for reaching out';
            this.notifType = 'success';
            this.notificationIsVisible = true;
            setTimeout(() => {
              this.notificationIsVisible = false;
              this.notifMessage = '';
              this.notifType = '';
            }, 3000);
          })
          .catch((err) => {
            this.notifMessage = 'An error occured, please try again later';
            this.notifType = 'error';
            this.notificationIsVisible = true;
            setTimeout(() => {
              this.notificationIsVisible = false;
              this.notifMessage = '';
              this.notifType = '';
            }, 3000);
          });
      } else this.showImpossibleToSendMail();
    },
    showImpossibleToSendMail() {
      this.notifMessage = 'Please fill in all required fields before sending.';
      this.notifType = 'error';
      this.notificationIsVisible = true;
      setTimeout(() => {
        this.notificationIsVisible = false;
        this.notifMessage = '';
        this.notifType = '';
      }, 3000);
    },
    validateEmail() {
      if (!this.email) {
        this.error.emailRequired = true;
      } else this.error.emailRequired = false;
      // eslint-disable-next-line
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (mailformat.test(this.email)) {
        this.error.emailIncorrect = false;
      } else this.error.emailIncorrect = true;
    },
    validateMessage() {
      if (!this.message) {
        this.error.message = true;
      } else this.error.message = false;
    },
    validateName() {
      if (!this.name) {
        this.error.name = true;
      } else this.error.name = false;
    },
  },
};
</script>

<style scoped lang="scss">
section {
  background: theme('colors.custom-grey');
}

.form-ctn {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 550px;

  input, textarea {
    border: 1px solid theme('colors.custom-grey-dark');
    width: 100%;
    font-size: 0.8em;
    outline: none;

    &:focus {
      border: 1px solid theme('colors.secondary');
    }
  }

  input {
    height: 40px;
    padding: 5px 20px;
    line-height: 40px;
  }

  input:not(:first-of-type) {
    margin-top: 20px;
  }

  textarea {
    min-height: 40px;
    padding: 20px 20px;
    margin-top: 20px;
  }

  .send-button {
    color: white;
    background: theme('colors.secondary');
    align-self: flex-end;
    margin-top: 20px;
    padding: 5px 20px;
    font-size: .9em;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  }
}

.error-msg {
  color: #f25944;
  font-size: 0.8em;
  margin-top: 5px;
}
</style>
