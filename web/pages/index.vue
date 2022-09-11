<template lang="html">
  <main v-if="loaded" :class="attr['main']">
    <div :class="attr['main__container']">
      <div :class="attr['main__left']">
        <div :class="attr['main__top']">
          <button @click="changeMonth(false)" :class="attr['main__prev-month']">prev</button>
          <div>{{ date.format('YYYY-MM-DD') }}</div>
          <button @click="changeMonth(true)" :class="attr['main__next-month']">next</button>
        </div>
        <form :class="attr['main__form']">
          <div :class="attr['main__input-group']">
            <label for="event">Event</label>
            <input
              v-model="form_data.name"
              type="text"
              name="event"
              id="event"
              placeholder="Enter event"
              required
            />
          </div>
          <div :class="attr['main__from-to']">
            <div :class="attr['main__input-group']">
              <label for="from">From</label>
              <input
                v-model="form_data.from"
                type="date"
                name="from"
                id="from"
                :min="$moment().format('YYYY-MM-DD')"
              />
            </div>
            <div :class="attr['main__input-group']">
              <label for="to">To</label>
              <input
                v-model="form_data.to"
                type="date"
                name="to" id="to"
                :min="minimumToDate"
              />
            </div>
            <div :class="attr['main__input-group']">
              <DaysPicker
                v-show="form_data.from && form_data.to"
                v-model="form_data.days"
              />
              <pre>{{ form_data.days}}</pre>
            </div>
          </div>
          <div :class="attr['main__actions']">
            <button>Add</button>
            <button>Override</button>
          </div>
        </form>
      </div>
      <div :class="attr['main__right']">
        <Calendar :payload="calendar_payload" @current-month="setToCurrentMonth"/>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    components: {
      DaysPicker: () => import('~/components/global/calendar/DaysPicker.vue')
    },
    data: () => ({
      loaded: false,
      records: null,
      page: {
        title: 'Home'
      },
      calendar_payload: {
        date: {},
        events: []
      },
      date: {},
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      form_data: {
        name: '',
        from: '',
        to: '',
        days: [
          { name: 'Monday', checked: false, disabled: false },
          { name: 'Tuesday', checked: false, disabled: false },
          { name: 'Wednesday', checked: false, disabled: true },
          { name: 'Thursday', checked: false, disabled: false },
          { name: 'Friday', checked: false, disabled: false },
          { name: 'Saturday', checked: false, disabled: false },
          { name: 'Sunday', checked: false, disabled: false },
        ]
      }
    }),
    computed: {
      /**
       * The minimum selectable date for the TO date
       */
      minimumToDate() {
        if (this.form_data.from) {
          return this
            .$moment(this.form_data.from)
            .clone()
            .add(1, 'days')
            .format('YYYY-MM-DD')
        }
        return this.form_data.from
      },
      /**
       * used to watch two properties
       */
      fromAndTo() {
        return [
          this.form_data.from,
          this.form_data.to
        ]
      }
    },
    methods: {
      /**
       * increments and decrements the current month
       * based on the `increment` argument
       *
       * @param {Boolean} increment
       */
      changeMonth(increment) {
        if (increment) {
          this.date = this.date.clone().add(1, 'months')
        } else {
          this.date = this.date.clone().subtract(1, 'months')
        }
        this.calendar_payload.date = this.date
      },
      /**
       * sets the calendar's month to the current month
       */
      setToCurrentMonth() {
        this.date = this.$moment()
        this.calendar_payload.date = this.date
      },
      /**
       * Calculates available days of the week
       * using the FROM and TO dates
       */
      setAvailableDays() {
        let available_date = []
        const
          from = this.$moment(this.form_data.from),
          to = this.$moment(this.form_data.to),
          difference = to.diff(from, 'days')
        if (Number.isNaN(difference)) return
        for (let index = 0; index <= difference; index++) {
          const day_index = this.$moment().add(index, 'days')
          available_date.push(day_index.day())
          console.log(day_index.day())
        }
        // remove duplicates
        available_date = [ ...new Set(available_date) ]
        this.form_data.days = this.form_data.days.map((day, idx) => {
          // console.log(available_date.includes(idx), idx)
          const result = {
            ...day,
            disabled: !available_date.includes(idx),
          }
          // console.log(result)
          return result
        })
      }
    },
    watch: {
      fromAndTo() {
        this.setAvailableDays()
      },
      /**
       * clears the TO date to avoid selecting invalid date
       */
      'form_data.from'() {
        this.form_data.to = ''
      }
    },
    updated () {
      this.$nuxt.$emit('toggle-footer', 'image', true)
    },
    mounted () {
      setTimeout(() => {
        this.toggleModalStatus({ type: 'loader', status: true, item: { start: false } })
        this.loaded = true
      }, 500)
      this.date = this.$moment().add(1, 'months')
      this.calendar_payload.date = this.date
    },
    asyncData ({ $axios, store, error }) {
      store.commit('global/modal/toggleModalStatus', { type: 'loader', status: true, item: { start: true } })
    },
    head () {
      let host = process.env.BASE_URL

      return {
        title: `Mahiwagang test`,
        link: [
          {
            rel: 'canonical',
            href: `${host}${this.$route.fullPath}`
          }
        ],
      }
    }
  }
</script>

<style lang="stylus" module="attr">
  .main
    width: 100vw
    height: 100vh
    // background-color: black
    margin: 0
    &__container
      border: solid 1px red
      max-width: 1000px
      margin: 10px auto
      display: flex
      & ^[0]__left
        & ^[0]__top
          display: flex
          justify-content: space-between
          margin-bottom: 10px
        & ^[0]__form
          input
            border: solid 1px black
          .input-group
            display: flex
            flex-direction: column
            margin-bottom: 10px
          .from-to
            display: flex
      & ^[0]__right
        flex-grow: 1
</style>
