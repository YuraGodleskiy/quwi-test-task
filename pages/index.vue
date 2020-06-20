<template>
  <div>
    <span class="asd">
      index
    </span>
  </div>
</template>

<script>

export default {
  middleware: 'authenticated',
  async created () {
    if (this.$auth.loggedIn) {
      const { data } = await this.$axios.get('projects-manage/index')
      console.log(data)
    }
  }
}
</script>

<style>
</style>
