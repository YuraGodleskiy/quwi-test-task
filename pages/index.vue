<template>
  <section class="projects-section">
    <ProjectItem
      v-for="item in projects"
      :key="item.id"
      :logo="item.logo_url"
      :title="item.name"
      :is-active="!!item.is_active"
      :spent-time-week="item.spent_time_week"
      :spent-time-month="item.spent_time_month"
      :spent-time-all="item.spent_time_all"
      :id="item.id"
    />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProjectItem from '@/components/projects/ProjectItem'
export default {
  middleware: 'redirectToLogin',
  components: {
    ProjectItem
  },
  data: () => ({
  }),
  computed: {
    ...mapState({
      projects: state => state.projects.projects
    })
  },
  created () {
    this.getProjects()
  },
  methods: {
    ...mapActions({
      getProjects: 'projects/getProjects'
    })
  }
}
</script>
