<template>
  <div class="container">
    <div class="top">
      <div>
        <button id="prev-btn">
          {{ date.clone().subtract(1, 'months').format('MMMM') }}
        </button>
      </div>
      <div>
        <span>{{ date.format('MMMM DD YYYY') }}</span>
      </div>
      <div>
        <button id="next-btn">
          {{ date.clone().add(1, 'months').format('MMMM') }}
        </button>
      </div>
    </div>
    <div class="calendar" id="calendar"></div>
    <div class="add-event">
      <div class="add-event__form-wrap">
        <form id="add-form" class="add-event__form">
          <div class="add-event__input-group">
            <label for="title">Title</label>
            <input type="text" name="title" id="title">
            <span class="add-event__error-dispay">&nbsp;</span>
          </div>
          <div class="add-event__two-col">
            <div class="add-event__input-group">
              <label for="from">From</label>
              <input type="text" name="from" id="from" class="add-event__input">
              <span class="error-display">&nbsp;</span>
            </div>
            <div class="add-event__input-group">
              <label for="to">To</label>
              <input type="text" name="to" id="to" class="add-event__input">
              <span class="add-event__error-display">&nbsp;</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data({ $moment }) {
      return {
        date: $moment(),
      }
    },
    methods: {
      buildCalendar(current_date) {
        const CALENDAR_SIZE = [7, 6] // days per week, weeks per month
        const calendar_element = document.querySelector('#calendar')
        calendar_element.innerHTML = ''
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
        if (date.month() !== this.date.month()) {
          day.classList.add('calendar__day--diff-month')
        }
        const events = this.getEventsOfDay(date)
        day.innerHTML = `
          <div class="calendar__inner">
            <span class="calendar__day-date">${ date.date() }</span>
            ${events.map(event => `
              <div class="calendar__events-wrap">
                <div class="calendar__event" style="--event_color: ${ event.color };">
                  <span class="calendar__event-title">${ event.title }</span>
                </div>
              </div>
            `).join('')}
          </div>
        `
        return day
      },
      getEventsOfDay(date) {
        return [
          {
            color: 'rgb(255, 0, 0)',
            title: 'test'
          },
        ]
      },
      changeMonth(increment) {
        if (increment) {
          this.date = this.date.clone().add(1, 'months')
        } else {
          this.date = this.date.clone().subtract(1, 'months')
        }
        this.buildCalendar(this.date)
      }
    },
    mounted() {
      this.buildCalendar(this.date)
      this.addListeners()
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
      display: flex
      flex-direction: row
      & ^[0]__day
        flex-basis: calc(100% / 7)
        aspect-ratio: 1
        &--diff-month
          color: rgba(0, 0, 0, 0.4)
        & ^[0]__inner
          & ^[0]__day-date
            font-size: 16px
          & ^[0]__events-wrap
            & ^[0]__event
              & ^[0]__event-title
                border: solid 1px var(--event_color)
                text-overflow: ellipsis
  
  .add-event
    display: none
    position: fixed
    top: 0
    left: 0
    width: 100vw
    min-height: 100vh
    justify-content: center
    align-items: center
    background-color: rgba(0, 0, 0, 0.3)
    &--active
      display: flex
    &__form-wrap
      max-width: 600px
      width: 500px
      padding: 20px
      border-radius: 8px
      background-color: var(--theme_white)
</style>