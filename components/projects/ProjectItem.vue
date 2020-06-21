<template>
  <nuxt-link
    :to="{
      name: 'edit-id',
      params: {
        id: id,
        redirect: true
      }
    }"
    class="project-item"
  >
    <img :src="logo ? logo : defaultLogo" :alt="title" class="project-item__logo">
    <b class="project-item__title">
      {{ title }}
    </b>
    <b :style="isActiveStyle" class="project-item__active-mark">
      {{ isActiveRes }}
    </b>
    <div class="project-item__time-info">
      <div>
        <span>
          time this week
        </span>
        <b>
          {{ spentTimeWeek }}
        </b>
      </div>
      <div>
        <span>
          this month
        </span>
        <b>
          {{ spentTimeMonth }}
        </b>
      </div>
      <div>
        <span>
          total
        </span>
        <b>
          {{ spentTimeAll }}
        </b>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex'
import defaultLogo from '@/assets/images/general/defaultLogo.png'
export default {
  name: 'ProjectItem',
  props: {
    logo: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    spentTimeWeek: {
      type: Number,
      default: 0
    },
    spentTimeMonth: {
      type: Number,
      default: 0
    },
    spentTimeAll: {
      type: Number,
      default: 0
    },
    id: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    defaultLogo
  }),
  computed: {
    ...mapState({
      projects: state => state.projects.projects
    }),
    isActiveRes () {
      return this.isActive ? 'Active' : 'Not active'
    },
    isActiveStyle () {
      return {
        color: this.isActive ? 'green' : 'red'
      }
    }
  }
}
</script>
