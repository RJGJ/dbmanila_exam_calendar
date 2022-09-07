<template>
  <div class="calendar">
    <div class="top">
      <button>current month</button>
    </div>
    <div class="inner">
      <div class="days">
        <div v-for="day in days">{{ day }}</div>
      </div>
      <CalendarRow 
        v-for="(_, i) in Array(6)" 
        :key="i" 
        :week="i" 
        :first_day="$moment().startOf('month')"
        class="row" 
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      payload: {
        type: Array,
        default: () => ([
          {

          }
        ])
      }
    },
    data() {
      return {
        days: [
          'sunday',
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
        ],
      }
    },
    mounted() {
      this.first_day = this.$moment().startOf('month')
    }
  }
</script>

<style lang="stylus">
  .calendar
    // border: solid 1px blue
</style>