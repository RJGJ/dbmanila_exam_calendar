<template>
  <div class="calendar">
    <div class="top">
      <button>current month</button>
    </div>
    <div class="inner">
      <div class="days">
        <div class="day" v-for="(day, key) in days" :key="key">{{ day }}</div>
      </div>
      <div class="rows">
        <CalendarRow
          v-for="(_, i) in Array(6)"
          :key="i"
          :week="i"
          :first_day="first_day"
          :current_month="first_day.month()"
          class="row"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      payload: {
        type: Object,
        default: () => ({
          date: {},
          events: []
        })
      }
    },
    data({ $moment }) {
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
        first_day: $moment()
      }
    },
    mounted() {
      this.first_day = this.payload.date.clone().date(1)
      console.log(this.first_day)
    },
    watch: {
      'payload': {
        handler(newValue) {
          this.first_day = this.$moment(newValue.date.date(1))
        },
        deep: true
      }
    },
  }
</script>

<style lang="stylus">
  .calendar
    .inner
      .days
        display: flex
        .day
          flex-grow: 1
          flex-basis: calc(100% / 7)
          text-align: center
      .rows
        border-top: solid 1px black
        border-left: solid 1px black
</style>
