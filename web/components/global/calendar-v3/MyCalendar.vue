<template>
  <div :class="attr['calendar']">
    <div :class="attr['calendar__top']">
      <button
        :class="[
          attr['calendar__prev-week']
        ]"
        @click="week_offset--"
      >
        <nuxt-img 
          src="assets/placeholders/date-prev.svg" 
          :class="attr['calendar__top-btn']"
        />
      </button>
      <span :class="attr['calendar__week-text']">
        {{ startDate.format('DD MMM') }} - {{ startDate.clone().add(7, 'days').format('DD MMM') }}
      </span>
      <button
        :class="[
          attr['calendar__next-week']
        ]"
        @click="week_offset++"
      >
        <nuxt-img 
          src="assets/placeholders/date-prev.svg" 
          :class="attr['calendar__top-btn']"
        />
      </button>
    </div>
    <div :class="attr['calendar__body']">
      <my-calendar-column
        v-for="key in 8"
        :key="key"
        :offset="key - 1"
        :current_date="current_date"
        :start_date="startDate"
        :class="attr['calendar__column']"
      />
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      MyCalendarColumn: () => import('./MyCalendarColumn'),
    },
    data({ $moment }) {
      return {
        current_date: $moment(),
        week_offset: 0
      }
    },
    computed: {
      startDate() {
        return this.current_date
          .clone()
          .day(1)
          .add(this.week_offset * 8, 'days')
      }
    },
    mounted () {

    },
  }
</script>

<style lang="stylus" module="attr">
  .calendar
    padding: 10px
    &__top
      margin-bottom: 40px
      display: flex
      justify-content: space-between
      align-items: center
      & ^[0]__top-btn
        cursor: pointer
      & ^[0]__next-week
        & ^[0]__top-btn
          transform: rotateZ(180deg)
      & ^[0]__week-text
        font-size: 30px
        text-transform: uppercase
        font-weight: bold
        color: #53565c
    &__body
      display: flex
      & ^[0]__column
        flex: 1 0
</style>
