<template>
  <form @submit.prevent="loginUser" class="form">
    <h4 class="form__title">
      login
    </h4>
    <input
      v-model="form.email"
      class="form__text-field"
      type="email"
      placeholder="Email"
    >
    <input
      v-model="form.password"
      class="form__text-field"
      type="password"
      placeholder="Password"
    >
    <button type="submit" class="form__btn">
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
