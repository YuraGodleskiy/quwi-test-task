<template>
  <header class="navbar">
    <img
      class="navbar__logo"
      src="@/assets/images/general/logo.png"
      alt="logo"
    >
    <nav class="navbar-btns">
      <div v-if="this.$auth.loggedIn">
        <nuxt-link to="/" class="navbar__btn">
          projects
        </nuxt-link>
        <button @click="logoutUser" class="navbar__btn">
          logout
        </button>
      </div>
      <nuxt-link v-else to="login" class="navbar__btn">
        Login
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
  }),
  methods: {
    async logoutUser () {
      await this.$auth.logout()
      await this.$router.push('login')
    }
  }
}
</script>
