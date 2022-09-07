<template>
  <div class="calendar">
    <div class="top">
      <button>current month</button>
    </div>
    <div class="inner">
      <div class="days">
        <div v-for="day in days">{{ day }}</div>
      </div>
      <CalendarRow v-for="i in Array(6)" :key="i" :number="i" />
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
        // calendar
      }
    },
    mounted() {
      // console.log(this.$moment)
    }
  }
</script>

<style lang="stylus">
  
</style>