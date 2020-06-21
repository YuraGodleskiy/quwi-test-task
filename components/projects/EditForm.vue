<template>
  <form @submit.prevent="saveInfo" class="form">
    <h4 class="form__title">
      Edit name of project
    </h4>
    <img v-if="form.logo" :src="form.logo" alt="logo" class="form__logo">
    <img v-else :src="defaultLogo" alt="logo" class="form__logo">
    <input
      v-model="form.name"
      class="form__text-field"
      type="text"
    >
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
    form: {
      logo: '',
      name: ''
    },
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
    const { name, logo_url } = await this.projects.find(item => item.id === +this.id)
    this.form.name = name
    // eslint-disable-next-line camelcase
    this.form.logo = logo_url
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
