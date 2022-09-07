<template>
  <div class="date">
    {{ date.date() }}
  </div>
</template>

<script>
  export default {
    props: {
      date: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style lang="stylus">
  .date
    border: solid 1px red
</style>