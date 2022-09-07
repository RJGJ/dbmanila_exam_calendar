<template>
  <div class="row">
    <CalendarDay 
      v-for="(_, i) in Array(7)" 
      :key="i"
      :date="calculateDate(i)" 
      class="date"
    />
  </div>
</template>

<script>
  export default {
    props: {
      week: {
        type: Number,
        default: () => 0
      },
      first_day: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        days: []
      }
    },
    methods: {
      calculateDate(day) {
        return this.first_day
          .clone()
          .subtract(this.first_day.day(), 'days')
          .add(day, 'days')
          .add(this.week, 'weeks')
      }
    },
    mounted() {
      
    }
  }
</script>

<style lang="stylus">
  .row
    display: flex
    // border: solid 1px green
    width: 100%
    .date
      flex-basis: calc(100% / 7)
</style>
