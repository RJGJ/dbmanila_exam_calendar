<template>
  <div class="row">
    <!-- {{ first_day }} -->
    <CalendarDay
      v-for="(_, i) in Array(7)"
      :key="i"
      :date="calculateDate(i)"
      :current_month="current_month"
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
      },
      current_month: {
        type: Number,
        default: () => 0
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
    border-bottom: solid 1px black
    width: 100%
    .date
      flex-basis: calc(100% / 7)
</style>
