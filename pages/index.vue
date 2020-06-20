<template>
  <div>
    index
    <button
      v-if="$auth.loggedIn"
      @click="logoutUser"
    >
      Logout
    </button>
    <nuxt-link v-else to="login">
      Login
    </nuxt-link>
  </div>
</template>

<script>

export default {
  async created () {
    console.log(this.$auth.loggedIn)
    if (this.$auth.loggedIn) {
      const { data } = await this.$axios.get('projects-manage/index')
      console.log(data)
    }
  },
  methods: {
    logoutUser () {
      this.$auth.logout()
    }
  }
}
</script>

<style>
</style>
