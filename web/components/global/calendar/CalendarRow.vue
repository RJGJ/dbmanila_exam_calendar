<template>
  <h1>Row</h1>
</template>

<script>
  export default {
    props: {
      number: {
        type: Number,
        default: () => 0
      }
    },
    data() {
      return {
        days: []
      }
    },
    mounted() {
      const current_month = this.$moment().startOf('month')
      const date_now = this.$moment()
      console.log(current_month)
    }
  }
</script>

<style lang="stylus">
  
</style>
