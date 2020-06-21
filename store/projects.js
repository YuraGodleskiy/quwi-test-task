export const actions = {
  async getProjects ({ commit }) {
    const { data } = await this.$axios.get('projects-manage/index')
    commit('SAVE_PROJECTS', data.projects)
  }
}
export const mutations = {
  SAVE_PROJECTS (state, projects) {
    state.projects = projects
  }
}
export const state = () => ({
  projects: []
})
