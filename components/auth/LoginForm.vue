<template>
  <form @submit.prevent="loginUser" class="form">
    <h4 class="form__title">
      login
    </h4>
    <ValidationProvider v-slot="{ errors }" class="form__input-wrapper" name="email" rules="required|email">
      <input
        v-model="form.email"
        class="form__text-field"
        type="email"
        placeholder="Email"
      >
      <span class="form__error">{{ errors[0] }}</span>
    </ValidationProvider>
    <ValidationProvider v-slot="{ errors }" class="form__input-wrapper" name="password" rules="required">
      <input
        v-model="form.password"
        class="form__text-field"
        type="password"
        placeholder="Password"
      >
      <span class="form__error">{{ errors[0] }}</span>
    </ValidationProvider>
    <span v-if="errorMsg" class="form__error">
      {{ errorMsg }}
    </span>
    <button type="submit" class="form__btn">
      Login
    </button>
  </form>
</template>

<script>
import { extend, ValidationProvider } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
extend('email', email)
extend('required', required)

export default {
  name: 'Login',
  components: {
    ValidationProvider
  },
  data: () => ({
    form: {
      email: '',
      password: ''
    },
    errorMsg: ''
  }),
  methods: {
    async loginUser () {
      try {
        await this.$auth.loginWith('local', {
          data: { ...this.form }
        })
        this.errorMsg = ''
      } catch ({ response }) {
        if (response.statusText === 'Data Validation Failed.') {
          this.errorMsg = 'Email or password is incorrect'
        }
      }
    }
  }
}
</script>
