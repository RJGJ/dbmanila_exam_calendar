<template>
  <div class="container">
    <div class="top">
      <div>
        <button id="prev-btn">prev</button>
      </div>
      <div>
        <span>{{ $moment().format('YYYY-MM-DD') }}</span>
      </div>
      <div>
        <button id="next-btn">next</button>
      </div>
    </div>
    <div class="calendar" id="calendar"></div>
  </div>
</template>

<script>
  export default {
    data({ $moment }) {
      return {
        date: $moment()
      }
    },
    methods: {
      buildCalendar(current_date) {
        const CALENDAR_SIZE = [7, 6] // days per week, weeks per month
        const calendar_element = document.querySelector('#calendar')
        
        let day_counter = this.shiftDates(current_date)
        // week loop
        for (let week_idx = 0; week_idx < CALENDAR_SIZE[1]; week_idx++) {
          const row = this.createRow()
          calendar_element.appendChild(row)
          
          // days loop
          for (let day_idx = 0; day_idx < CALENDAR_SIZE[0]; day_idx++) {
            const day = this.createDay(day_counter)
            row.appendChild(day)
            day_counter.add(1, 'days')
          }
        }
      },
      addListeners() {
        document.querySelector('#prev-btn').addEventListener('click',  () => {
          this.changeMonth(false)
        })
        document.querySelector('#next-btn').addEventListener('click',  () => {
          this.changeMonth(true)
        })
      },
      shiftDates(current_date) {
        // set to first day of the month
        const first_date = current_date.clone().date(1)
        return first_date
          .clone()
          .subtract(first_date.day(), 'days')
      },
      createRow() {
        const row = document.createElement('div')
        row.classList.add('calendar__row')
        return row
      },
      createDay(date) {
        const day = document.createElement('div')
        day.classList.add('calendar__day')
        if (date.month() !== this.$moment().month()) {
          day.classList.add('calendar__day--diff-month')
        }
        day.innerHTML = `<p>${ date.date() }</p>`
        return day
      },
      changeMonth(increment) {
        if (increment) {
          this.date = this.date.add(1, 'months')
          return
        }
        this.date = this.date.subtract(1, 'months')
      }
    },
    mounted() {
      this.buildCalendar(this.date)
      this.addListeners()
    },
    watchers: {
      date(new_val, old_val) {
        this.buildCalendar(new_val)
      }
    }
  }
</script>

<style lang="stylus">
  .container
    //
      
  .top
    display: flex
    justify-content: space-between
  
  .calendar
    display: flex
    flex-direction: column
    &__row
      border: solid 1px red
      display: flex
      flex-direction: row
      & ^[0]__day
        flex-basis: calc(100% / 7)
        // aspect-ratio: 0
        &--diff-month
          color: rgba(0, 0, 0, 0.4)
</style>