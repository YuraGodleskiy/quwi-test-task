<template>
  <section class="login-section">
    <LoginForm />
  </section>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped>

</style>
