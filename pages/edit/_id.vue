<template>
  <section class="edit-section">
    <EditForm
      :id="+id"
      :redirect="redirect"
    />
  </section>
</template>

<script>
import EditForm from '@/components/projects/EditForm'
export default {
  name: 'Edit',
  middleware: 'redirectToLogin',
  components: {
    EditForm
  },
  data: () => ({
    id: 0,
    redirect: true
  }),
  asyncData ({ params }) {
    const { id } = params
    const { redirect } = params
    return {
      id,
      redirect
    }
  }
}
</script>
