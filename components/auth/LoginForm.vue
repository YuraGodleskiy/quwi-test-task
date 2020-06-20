<template>
  <form @submit.prevent="loginUser" class="login-form">
    <h4 class="login-form__title">
      login
    </h4>
    <input
      v-model="form.email"
      class="login-form__text-field"
      type="text"
      placeholder="Email"
    >
    <input
      v-model="form.password"
      class="login-form__text-field"
      type="password"
      placeholder="Password"
    >
    <button type="submit" class="login-form__btn">
      Login
    </button>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    loginUser () {
      this.$auth.loginWith('local', {
        data: { ...this.form }
      })
    }
  }
}
</script>
