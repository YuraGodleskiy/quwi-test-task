<template>
  <div>
    <label>
      Name
      <input v-model="form.email" type="text">
    </label>
    <label>
      Password
      <input v-model="form.password" type="password">
    </label>
    <button @click="loginUser">
      Login
    </button>
  </div>
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

<style scoped>

</style>
