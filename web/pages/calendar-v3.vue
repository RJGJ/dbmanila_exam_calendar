<template>
  <div>
    <my-calendar />
  </div>
</template>

<script>
  export default {
    components: {
      MyCalendar: () => import('~/components/global/calendar-v3/MyCalendar'),
    },
  }
</script>

<style lang="stylus" scoped>

</style>
