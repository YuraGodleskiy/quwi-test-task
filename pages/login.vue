<template>
  <section class="login-section">
    <LoginForm />
  </section>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm'

export default {
  name: 'Login',
  middleware: 'redirectToIndex',
  components: {
    LoginForm
  }
}
</script>
