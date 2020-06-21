<template>
  <section class="projects-section">
    <ProjectItem
      v-for="item in projects"
      :logo="item.logo_url"
      :title="item.name"
      :is-active="!!item.is_active"
      :spent-time-week="item.spent_time_week"
      :spent-time-month="item.spent_time_month"
      :spent-time-all="item.spent_time_all"
    />
  </section>
</template>

<script>
import ProjectItem from '@/components/projects/ProjectItem'
export default {
  middleware: 'authenticated',
  components: {
    ProjectItem
  },
  data: () => ({
    projects: []
  }),
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('projects-manage/index')
    return {
      projects: data.projects
    }
  }
}
</script>
