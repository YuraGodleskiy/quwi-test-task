<template>
  <form @submit.prevent="saveInfo" class="form">
    <h4 class="form__title">
      Edit name of project
    </h4>
    <img v-if="form.logo_url" :src="form.logo_url" alt="logo" class="form__logo">
    <img v-else :src="defaultLogo" alt="logo" class="form__logo">
    <label class="toggle-wrapper">
      <div class="toggle">
        <input v-model="form.is_active" class="toggle-state" disabled type="checkbox" name="check">
        <div class="indicator" />
      </div>
      <div class="label-text">
        {{ form.is_active ? 'Active' : 'Not active' }}
      </div>
    </label>
    <div class="edit-form__input-wrapper">
      <label for="name">Name:</label>
      <input
        id="name"
        v-model="form.name"
        class="form__text-field"
        type="text"
      >
      <label for="spent_time_week">spent_time_week:</label>
      <input
        id="spent_time_week"
        v-model="form.spent_time_week"
        class="form__text-field"
        type="text"
        readonly
      >
      <label for="spent_time_week">spent_time_month:</label>
      <input
        id="spent_time_month"
        v-model="form.spent_time_month"
        class="form__text-field"
        type="text"
        readonly
      >
      <label for="spent_time_all">spent_time_all:</label>
      <input
        id="spent_time_all"
        v-model="form.spent_time_all"
        class="form__text-field"
        type="text"
        readonly
      >
    </div>
    <span v-if="notificationText" :style="{color: notificationColor}" class="form__notification">
      {{ notificationText }}
    </span>
    <button class="form__btn" type="submit">
      Save
    </button>
  </form>
</template>

<script>
import defaultLogo from '@/assets/images/general/defaultLogo.png'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'EditForm',
  props: {
    id: {
      type: Number,
      default: 0
    },
    redirect: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    form: {},
    defaultLogo,
    notificationText: '',
    notificationColor: ''
  }),
  computed: {
    ...mapState({
      projects: state => state.projects.projects
    })
  },
  async created () {
    await this.getProjects()
    // eslint-disable-next-line camelcase
    const item = await this.projects.find(item => item.id === +this.id)
    this.form = { ...item }
    // this.form.name = name
    // // eslint-disable-next-line camelcase
    // this.form.logo = logo_url
  },
  methods: {
    ...mapActions({
      getProjects: 'projects/getProjects'
    }),
    async saveInfo () {
      const { status } = await this.$axios.post(`projects-manage/update?id=${this.id}`, {
        name: this.form.name
      })
      if (status >= 200 && status <= 299) {
        this.notificationText = 'Saved'
        this.notificationColor = 'green'
      } else {
        this.notificationText = 'Something wend wrong'
        this.notificationColor = 'red'
      }
    }
  }
}
</script>
